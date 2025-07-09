'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Settings, 
  Wrench,
  Globe,
  Code2,
  Database,
  Smartphone,
  Zap,
  GitBranch,
  Container,
  Cloud,
  Triangle,
  Figma,
  FileText
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', icon: Globe },
        { name: 'Next.js', icon: Triangle },
        { name: 'TypeScript', icon: FileText },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Framer Motion', icon: Zap }
      ]
    },
    {
      title: 'Backend',
      icon: Settings,
      skills: [
        { name: 'Node.js', icon: Settings },
        { name: 'Express.js', icon: Zap },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'GraphQL', icon: Globe }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'Docker', icon: Container },
        { name: 'AWS', icon: Cloud },
        { name: 'Vercel', icon: Triangle },
        { name: 'Figma', icon: Figma }
      ]
    }
  ]

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
            >
              <div className="text-center mb-4">
                <div className="mb-2">
                  <category.icon className="w-7 h-7 text-primary mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
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
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:shadow-md transition-all duration-300 cursor-pointer group min-w-[80px]"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="group-hover:text-primary transition-colors"
                    >
                      <skill.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <span className="text-foreground font-medium text-sm text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}