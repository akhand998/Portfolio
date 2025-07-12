# Project Images Setup

## Current Status
Your `portfolio.png` image is working correctly (162KB file). However, the other project images (`project-1.jpg` through `project-6.jpg`) were empty files (0 bytes) and have been removed.

## Quick Fix Applied
All project cards now temporarily use `/portfolio.png` so you can see the image loading working.

## To Add Your Own Project Images:

### Option 1: Use Your Own Project Screenshots
1. Take screenshots of your actual projects
2. Resize them to approximately 800x400 pixels
3. Save them as:
   - `project-1.jpg` - E-Commerce Platform
   - `project-2.jpg` - Task Management App  
   - `project-3.jpg` - Weather Dashboard
4. Copy them to `/public` folder

### Option 2: Use Placeholder Images
You can temporarily use free placeholder images from:
- https://picsum.photos/800/400 (random images)
- https://via.placeholder.com/800x400 (colored placeholders)
- https://source.unsplash.com/800x400/?technology (tech-related images)

### Option 3: Create Simple Colored Placeholders
Create solid color images with project names:
- E-Commerce: Blue background (#3B82F6)
- Task Management: Green background (#10B981) 
- Weather Dashboard: Purple background (#8B5CF6)

## How to Update
1. Add your images to `/public` folder
2. Update the `image` paths in `/app/components/sections/Projects.tsx`:

```tsx
const projects = [
  {
    title: 'Portfolio Website',
    image: '/portfolio.png', // ✅ Working
    // ...
  },
  {
    title: 'E-Commerce Platform', 
    image: '/project-1.jpg', // Update this path
    // ...
  },
  // ... etc
]
```

## File Requirements
- Format: `.jpg`, `.png`, or `.webp`
- Size: 800x400 pixels (recommended)
- File size: Under 500KB for good performance
- Name: Exactly match the path in the code

## Current Working Image
- ✅ `/portfolio.png` - 162KB, displays correctly
- 🔄 All other cards use portfolio.png temporarily

Once you add proper project images, they will automatically appear on your website!
