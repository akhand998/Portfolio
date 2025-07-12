import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting map (in production, use Redis or a proper rate limiting service)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per 15 minutes

  const userRequests = rateLimitMap.get(ip)
  
  if (!userRequests) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (now - userRequests.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (userRequests.count >= maxRequests) {
    return true
  }

  userRequests.count += 1
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'All fields are required.' 
        },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide a valid email address.' 
        },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)

    // Validate length
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Name must be between 2 and 100 characters.' 
        },
        { status: 400 }
      )
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Message must be between 10 and 1000 characters.' 
        },
        { status: 400 }
      )
    }

    // Check if required environment variables are present
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP credentials:', {
        SMTP_USER: process.env.SMTP_USER ? 'present' : 'missing',
        SMTP_PASS: process.env.SMTP_PASS ? 'present' : 'missing',
        SMTP_HOST: process.env.SMTP_HOST || 'using default',
        SMTP_PORT: process.env.SMTP_PORT || 'using default'
      })
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not properly configured. Please contact the administrator.' 
        },
        { status: 500 }
      )
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Additional options for better compatibility
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify connection configuration
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service configuration error. Please try again later.' 
        },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.SMTP_USER
      },
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
              <p style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #007bff; margin: 0;">
                <strong>${sanitizedName}</strong><br>
                <a href="mailto:${sanitizedEmail}" style="color: #007bff; text-decoration: none;">${sanitizedEmail}</a>
              </p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
                ${sanitizedMessage.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.</p>
              <p>Reply directly to this email to respond to ${sanitizedName}.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: sanitizedEmail
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    })

  } catch (error) {
    console.error('Email sending error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error sending your message. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
