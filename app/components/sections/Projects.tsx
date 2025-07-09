'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      image: '/placeholder-project-4.jpg',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      image: '/placeholder-project-4.jpg',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      image: '/placeholder-project-4.jpg',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      image: '/placeholder-project-4.jpg',
      liveDemo: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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
                className="h-40 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center relative overflow-hidden"
              >
                <motion.div 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.15 : 1,
                    rotate: hoveredIndex === index ? 8 : 0,
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Globe className="w-12 h-12 text-primary opacity-50" />
                </motion.div>
              </motion.div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">
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
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: projects.length * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex items-center justify-center"
          >
            <Link 
              href="/projects" 
              className="w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <svg
                className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300"
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
    </section>
  )
}