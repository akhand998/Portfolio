export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  liveDemo: string
  github: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}