# Adding Project Images

## How to Add Your Project Screenshots

1. **Prepare Your Images**:
   - Take screenshots of your projects or create preview images
   - Recommended size: 1200x800 pixels or similar aspect ratio
   - Format: JPG, PNG, or WebP
   - Optimize images for web (compress to reduce file size)

2. **Add Images to Public Folder**:
   Place your project images in the `/public` folder with these names:
   - `project-1.jpg` - Your first/main project
   - `project-2.jpg` - Second project
   - `project-3.jpg` - Third project
   - `project-4.jpg` - Fourth project
   - `project-5.jpg` - Fifth project (projects page)
   - `project-6.jpg` - Sixth project (projects page)

3. **Update Project Data**:
   - Edit `/app/components/sections/Projects.tsx` for home page projects
   - Edit `/app/projects/page.tsx` for the full projects page
   - Update the `title`, `description`, `technologies`, `liveDemo`, and `github` fields

## Image Guidelines

- **Aspect Ratio**: 3:2 or 16:10 works best
- **Quality**: High resolution but optimized for web
- **Content**: Show the actual project interface/design
- **Consistency**: Try to maintain similar style across all project images

## Example Project Structure

```javascript
{
  title: 'Your Project Name',
  description: 'Brief description of what your project does and technologies used.',
  technologies: ['React', 'Next.js', 'Tailwind CSS'],
  image: '/project-1.jpg',
  liveDemo: 'https://your-project-demo.com',
  github: 'https://github.com/yourusername/project-repo',
  category: 'Web App' // Only for projects page
}
```

## Current Implementation

The project cards now feature:
- **Background Images**: Your project screenshots as card backgrounds
- **Overlay Effects**: Subtle gradients for better text readability
- **Fallback Icons**: Globe icon appears when images don't load
- **Hover Animations**: Smooth scaling and visual effects
- **Responsive Design**: Cards adapt to different screen sizes

## Tips for Best Results

1. Use consistent lighting and background in screenshots
2. Include the main interface/features of your project
3. Avoid cluttered or busy backgrounds
4. Consider adding a subtle border or shadow to screenshots before using them
5. Test images on both light and dark themes to ensure good visibility
