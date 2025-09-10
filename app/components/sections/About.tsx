'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '1', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    
    { number: '∞', label: 'Lines of Code' }
  ]

  return (
    <section id="about" className="min-h-[calc(100vh-6rem)] flex items-center py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
              I love creating seamless user experiences and solving complex problems through code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  My coding journey began with curiosity and has evolved into a passion for creating 
                  innovative solutions. I specialize in React, Node.js, and modern web technologies.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  When I&apos;m not coding, I enjoy exploring new technologies, contributing to open source projects, 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
