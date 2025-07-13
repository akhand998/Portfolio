# 🚀 Portfolio Website

A modern, responsive portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features dark mode design, smooth animations, and a secure contact form.

## 🌟 Live Demo

**[Visit Live Site](https://akhandpsingh.tech)**

## ✨ Features

- **Modern Dark Theme**: Sleek dark design with professional aesthetics
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and transitions
- **Project Showcase**: Dynamic project cards with background images
- **Skills Section**: Visual representation of technical skills
- **Contact Form**: Secure server-side email sending with Nodemailer
- **SEO Optimized**: Built with Next.js for optimal performance
- **Type Safe**: Written in TypeScript for better development experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React, Simple Icons
- **Email**: Nodemailer (server-side)
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akhand998/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📧 Email Setup

To enable the contact form, you need to configure Gmail SMTP:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → App passwords
   - Create a new app password for "Mail"
3. **Update environment variables** with your credentials

For detailed setup instructions, see [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md)

## 🖼️ Adding Project Images

To add custom images for your projects:

1. **Add images** to the `/public` folder
2. **Update project data** in:
   - `app/components/sections/Projects.tsx` (home page)
   - `app/projects/page.tsx` (projects page)

For detailed instructions, see [PROJECT_IMAGES_SETUP.md](./PROJECT_IMAGES_SETUP.md)

## 📱 Project Structure

```
akportfolio/
├── app/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── portfolio.png
│   ├── word.png
│   ├── issue.png
│   └── pod.png
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## 🎨 Customization

### Colors & Theme

The color scheme is configured in `tailwind.config.ts` using CSS variables. You can customize:

- Primary colors
- Background colors
- Text colors
- Border colors

### Content

Update your personal information in:

- **Hero Section**: `app/components/sections/Hero.tsx`
- **About Section**: `app/components/sections/About.tsx`
- **Skills**: `app/components/sections/Skills.tsx`
- **Projects**: `app/components/sections/Projects.tsx`

### Navigation

Modify navigation links in `app/components/common/Navbar.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables** in Vercel dashboard
4. **Deploy**

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance

- **100/100** Lighthouse Performance Score
- **Server-side Rendering** with Next.js
- **Optimized Images** and assets
- **Minimal Bundle Size**

## 🐛 Troubleshooting

### Email Not Sending

1. Check environment variables are set correctly
2. Verify Gmail App Password is valid
3. Ensure 2FA is enabled on Gmail account

### Images Not Loading

1. Verify image files exist in `/public` folder
2. Check file names match project data
3. Ensure images are in supported formats (PNG, JPG, WebP)

### Build Errors

1. Check TypeScript types
2. Verify all dependencies are installed
3. Run `npm run lint` to check for issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Website**: [akhandpsingh.tech](https://akhandpsingh.tech)
- **GitHub**: [@akhand998](https://github.com/akhand998)
- **Email**: akhnd.p.sngh@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Simple Icons](https://simpleicons.org/) - Brand icons

---

**Built with ❤️ by [Akhand Singh](https://github.com/akhand998)**
