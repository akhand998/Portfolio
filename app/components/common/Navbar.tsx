'use client'

import { useState } from 'react'

interface NavbarProps {
  sections: string[]
  activeSection: string
  setActiveSection: (section: string) => void
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ sections, activeSection, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'resume') {
      // Open resume in new tab - replace with your actual resume URL
      window.open('/resume.pdf', '_blank')
      setIsMenuOpen(false)
      return
    }
    
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            AK
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`capitalize transition-colors duration-300 hover:text-primary cursor-pointer ${
                  activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left py-2 capitalize transition-colors duration-300 hover:text-primary cursor-pointer ${
                  activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}