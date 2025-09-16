'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Personalised Dashboard',
      description: 'A beautiful, personalized dashboard with secure NextAuth authentication, news feed, movie recommendations, dark mode, and favorites system with drag-and-drop reordering.',
      technologies: ['Next.js 14', 'NextAuth.js', 'Redux Toolkit', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'TypeScript'],
      image: '/personaldashboard.png',
      liveDemo: 'https://personalised-dashboard.vercel.app/',
      github: 'https://github.com/akhand998/Personalised-Dashboard'
    },
    {
      title: 'Wordgame',
      description: "wordle like 'Guess the word' game built using react in vite",
      technologies: ['React',  'tailwindcss', 'vite'],
      image: '/word.png',
      liveDemo: 'https://wordzzle.vercel.app/',
      github: 'https://github.com/akhand998/wordgame'
    },
    {
      title: 'Issue Tracker',
      description: 'Collaborative issue tracking application with real-time updates and team features.',
      technologies: ['Next.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: '/issue.png',
      liveDemo: 'https://issuetracker.akhandpsingh.tech',
      github: 'https://github.com/akhand998/IssueTracker'
    },
    {
      title: 'Podcast',
      description: 'podcast generating chrome extension.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'elevenlabs'],
      image: '/pod.png',
      liveDemo: '#',
      github: 'https://github.com/akhand998/Podcast'
    }
  ]

  return (
    <section id="projects" className="min-h-[calc(100vh-6rem)] flex items-center py-12 sm:py-16 lg:py-20 bg-secondary/30">
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
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Mobile: Single column grid, Desktop: Multi-column */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-6 lg:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 flex-1 w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.03 : 1,
                    y: hoveredIndex === index ? -12 : 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <motion.div 
                    animate={{ 
                      scale: hoveredIndex === index ? 1.08 : 1,
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="h-32 sm:h-36 lg:h-40 relative overflow-hidden bg-gray-800 project-card-bg"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {/* Overlay for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
                    
                    {/* Animated icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ 
                          scale: hoveredIndex === index ? 1.15 : 1,
                          rotate: hoveredIndex === index ? 8 : 0,
                        }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="opacity-0 hover:opacity-30 transition-opacity"
                      >
                        <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={project.liveDemo}
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-1.5 px-2 rounded-md text-xs font-semibold text-center transition-all duration-300 cursor-pointer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 border border-border text-muted-foreground hover:bg-muted hover:text-foreground py-1.5 px-2 rounded-md text-xs font-semibold text-center transition-all duration-300 cursor-pointer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: projects.length * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex items-center justify-center lg:flex-col"
            >
              <Link 
                href="/projects" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}