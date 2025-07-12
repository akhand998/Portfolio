'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const allProjects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      image: '/portfolio.png',
      liveDemo: 'https://alkandpsingh.tech',
      github: 'https://github.com/akhand998/portfolio',
      category: 'Web Development'
    },
    {
      title: 'Wordgame',
      description: "wordle like 'Guess the word' game built using react in vite",
      technologies: ['React', 'tailwindcss', 'vite'],
      image: '/word.png',
      liveDemo: 'https://wordzzle.vercel.app/',
      github: 'https://github.com/akhand998/wordgame',
      category: 'Game Development'
    },
    {
      title: 'Issue Tracker',
      description: 'Collaborative issue tracking application with real-time updates and team features.',
      technologies: ['Next.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: '/issue.png',
      liveDemo: 'https://issuetrackeralkandpsingh.tech',
      github: 'https://github.com/akhand998/IssueTracker',
      category: 'Web Development'
    },
    {
      title: 'Podcast',
      description: 'podcast generating chrome extension.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'elevenlabs'],
      image: '/pod.png',
      liveDemo: '#',
      github: 'https://github.com/akhand998/Podcast',
      category: 'Browser Extension'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my complete collection of projects, from web applications to mobile apps and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: hoveredIndex === index ? -8 : 0,
                scale: hoveredIndex === index ? 1.02 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-200 group cursor-pointer"
            >
              <motion.div 
                animate={{ 
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-48 relative overflow-hidden project-card-bg"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#1f2937' // fallback color
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
                
                {/* Category tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-background/90 text-foreground text-xs rounded-full backdrop-blur-sm border border-border">
                    {project.category}
                  </span>
                </div>
                
                {/* Fallback icon when image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="opacity-30"
                  >
                    <Globe className="w-16 h-16 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-border text-muted-foreground hover:bg-muted hover:text-foreground py-2 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-card border border-border rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Interested in working together?
          </h3>
          <p className="text-muted-foreground mb-6">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
