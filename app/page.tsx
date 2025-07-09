'use client'

import { useState, useEffect, useMemo } from 'react'
import Navbar from '@/app/components/common/Navbar'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Skills from '@/app/components/sections/Skills'
import Projects from '@/app/components/sections/Projects'
import Contact from '@/app/components/sections/Contact'
import Footer from '@/app/components/common/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const sections = useMemo(() => ['home', 'about', 'skills', 'projects', 'contact'], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}