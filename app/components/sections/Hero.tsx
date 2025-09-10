'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-12 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 sm:mb-6"
          >
            <div className="w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors duration-300 relative bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
                AK
              </span>
              <Image
                src="/WhatsApp Image 2025-06-11 at 12.14.53 PM.jpeg"
                alt="Akhand - Full Stack Developer"
                width={288}
                height={288}
                className="w-full h-full object-cover absolute inset-0"
                priority
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
          >
            Hi, I&apos;m{' '}
            <span className="text-primary block xs:inline">
              Akhand
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 max-w-3xl mx-auto"
          >
            A passionate full-stack developer crafting beautiful, functional web experiences
            with modern technologies and creative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center px-2 sm:px-0 sm:flex-row max-w-md sm:max-w-none mx-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-border text-muted-foreground hover:bg-muted hover:text-foreground px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}