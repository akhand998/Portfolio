'use client'

import { useActionState, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactFormState {
  success: boolean
  message: string
  timestamp: number
}

// Server action for form submission
async function submitContactForm(prevState: ContactFormState, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    // Send to our secure API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
    
    const result = await response.json()
    
    return {
      success: result.success,
      message: result.message,
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

  const [showMessage, setShowMessage] = useState(false)

  // Show message when state changes and auto-hide after 5 seconds
  useEffect(() => {
    if (state.message && state.timestamp) {
      setShowMessage(true)
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [state.message, state.timestamp])

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akhnd.p.sngh@gmail.com',
      link: 'mailto:akhnd.p.sngh@gmail.com'
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
    <section id="contact" className="min-h-[calc(100vh-6rem)] flex items-center py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="text-primary flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
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
            {state.message && showMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 border rounded-lg ${
                  state.success 
                    ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border-red-500/30 text-red-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{state.message}</span>
                  <button
                    onClick={() => setShowMessage(false)}
                    className="ml-4 text-current opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Close message"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
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