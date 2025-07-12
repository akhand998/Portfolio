'use client'

import { SiGithub, SiLinkedin,SiX, SiInstagram } from "react-icons/si"

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/akhand998', icon: SiGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/akhand-pratap-singh-9005425b/', icon: SiLinkedin },
    { name: 'Twitter', url: 'https://twitter.com', icon: SiX },
    { name: 'Instagram', url: 'https://instagram.com', icon: SiInstagram }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-foreground">
              AK
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Building digital experiences with passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 text-sm"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground text-sm text-center md:text-right">
              © {currentYear} Akhand. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Additional Footer Content */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}