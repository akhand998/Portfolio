'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Settings, 
  Wrench
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiFigma
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Framer Motion', icon: SiFramer }
      ]
    },
    {
      title: 'Backend',
      icon: Settings,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'GraphQL', icon: SiGraphql }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'AWS', icon: SiAmazon },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Figma', icon: SiFigma }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-[calc(100vh-6rem)] flex items-center py-12 sm:py-16 lg:py-20">
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
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-colors"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="mb-2">
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:shadow-md transition-all duration-300 cursor-pointer group min-w-[70px] md:min-w-[80px] text-primary"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="group-hover:text-primary transition-colors"
                    >
                      <skill.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'currentColor' }} />
                    </motion.div>
                    <span className="text-foreground font-medium text-xs md:text-sm text-center group-hover:text-primary transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}