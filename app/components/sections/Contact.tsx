'use client'

import { useActionState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Server action for form submission
async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    // EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
    
    // Initialize EmailJS
    emailjs.init(publicKey)
    
    // Send email using EmailJS
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Akhand',
        reply_to: email,
      }
    )
    
    console.log('Email sent successfully:', result)
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
      timestamp: Date.now()
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
      timestamp: Date.now()
    }
  }
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: '',
    timestamp: 0
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amanpratapsingh998@gmail.com',
      link: 'mailto:amanpratapsingh998@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9305349279',
      link: 'tel:9305349279'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lucknow, India',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="text-primary">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.label}
                    </div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Success/Error Message */}
            {state.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 border rounded-lg ${
                  state.success 
                    ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border-red-500/30 text-red-400'
                }`}
              >
                {state.message}
              </motion.div>
            )}

            <form action={formAction} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground disabled:opacity-50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isPending}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-muted-foreground resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}