# Senior Flutter Developer Portfolio

A modern, interactive portfolio website showcasing professional experience and expertise in Flutter and mobile development.

**Live Demo**: [View on AI Studio](https://ai.studio/apps/drive/1S-ZEaIJ3VWZZSIcW4RNxT05XQOsiaxL7)

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.local and add your API keys
# VITE_GEMINI_API_KEY=your_gemini_key
# VITE_MAIL_JS_SERVICE_ID=your_service_id
# VITE_MAIL_JS_TEMPLATE_ID=your_template_id
# VITE_MAIL_JS_KEY=your_public_key

# Start development server
npm run dev
```

The app runs on `http://localhost:3000`.

### Build for Production

```bash
npm run build       # Build optimized bundle
npm run preview     # Preview production build
```

## Project Structure

```
├── components/          # Reusable React components
│   ├── Reveal.tsx      # Scroll animation wrapper
│   ├── Counter.tsx     # Animated counter
│   ├── Navbar.tsx      # Navigation header
│   ├── Footer.tsx      # Footer
│   └── ProjectModal.tsx # Project details modal
├── sections/           # Page sections
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills display
│   ├── Projects.tsx    # Projects grid
│   ├── ExperienceSelection.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact form
│   └── NotFound.tsx    # 404 page
├── data/
│   └── portfolioData.ts # Content & data
├── types.ts            # TypeScript interfaces
├── App.tsx             # Root component
├── index.tsx           # Entry point
└── vite.config.ts      # Build configuration
```

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols
- **Services**: EmailJS, Google Generative AI

## Key Features

### Navigation & Routing
- Sticky navbar with active section highlighting
- Hash-based routing with smooth scroll
- Mobile-responsive hamburger menu
- 404 error page support

### Animations
- Scroll-triggered reveal animations
- 3 animation effects: slide-up, fade, scale
- GPU-accelerated CSS transforms
- Smooth 60 FPS animations

### Sections
- **Hero**: Introduction and tech stack
- **About**: Professional summary and stats
- **Skills**: Expertise categories and proficiencies
- **Projects**: Portfolio grid with detailed modals
- **Experience**: Work history timeline
- **Contact**: Email form with validation

### Responsive Design
- Mobile-first approach
- Adaptive layouts (1-3 columns)
- Touch-friendly buttons and spacing
- Optimized for all screen sizes

## Environment Variables

Create `.env.local` with:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_MAIL_JS_SERVICE_ID=your_service_id
VITE_MAIL_JS_TEMPLATE_ID=your_template_id
VITE_MAIL_JS_KEY=your_emailjs_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

```

**Note**: These are loaded by Vite and available as `import.meta.env.VITE_*`

## Development

### Code Standards
- TypeScript strict mode enabled
- Component-based architecture
- Functional components with hooks
- Tailwind CSS for styling
- No external UI component libraries

### Available Scripts
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Customization

Edit `data/portfolioData.ts` to update:
- Hero section (name, role, description)
- Skills and proficiencies
- Projects and case studies
- Work experience
- Contact information

## Component Examples

### Reveal Animation Component
```tsx
<Reveal delay={0.2} effect="slide-up" duration={800}>
  <YourContent />
</Reveal>
```

Effects: `slide-up` | `fade` | `scale`

### Counter Component
```tsx
<Counter value={20} duration={2000} suffix="+" />
```

### Project Modal
Automatically handles detailed project information with image, description, and action buttons.

## Performance

- **Page Load**: < 2s on 4G networks
- **Animations**: 60 FPS with GPU acceleration
- **Bundle Size**: ~150 KB gzipped
- **Lighthouse**: 90+ scores

## Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast ratios

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Deployment

### GitHub Pages (Automated CI/CD)

The project is automatically deployed to GitHub Pages on every push to `main`/`master` branch.

**Live URL**: `https://[username].github.io/senior-flutter-developer-portfolio/`

**CI/CD Pipeline**:
- ✅ Type checking (TypeScript)
- ✅ Code linting (ESLint)
- ✅ Build validation
- ✅ Automated deployment to GitHub Pages

**Required GitHub Secrets**:
Navigate to: `Settings > Secrets and variables > Actions > New repository secret`

Add these 4 secrets:
- `GEMINI_API_KEY` - Google Generative AI API key
- `MAIL_JS_SERVICE_ID` - EmailJS service ID
- `MAIL_JS_TEMPLATE_ID` - EmailJS template ID
- `MAIL_JS_KEY` - EmailJS public key
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA v2 Site Key


**Enable GitHub Pages**:
1. Navigate to: `Settings > Pages`
2. Source: Select `GitHub Actions`
3. Save

**Local Testing Before Deploy**:
```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Build for production
npm run build

# Preview build
npm run preview
```

**Manual Deployment**:
```bash
# Push to main branch to trigger deployment
git push origin main
```

### Alternative: Vercel
```bash
npm i -g vercel
vercel
```

### Alternative: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

## Form Integration

Contact form uses EmailJS for email delivery. Configure template variables in your EmailJS dashboard to match form fields.

## API Integration

The portfolio integrates with:
- **EmailJS**: Contact form submissions
- **Google Generative AI**: Optional AI features
- **Unsplash**: Dynamic project images
- **Material Symbols**: Icon library

## Documentation

Comprehensive documentation available in `/docs`:
- `codebase-summary.md` - Complete codebase overview
- `project-overview-pdr.md` - Project requirements and specifications
- `code-standards.md` - Coding standards and best practices
- `system-architecture.md` - Architecture and design patterns

## Contributing

1. Follow code standards in `docs/code-standards.md`
2. Maintain TypeScript strict mode
3. Keep components focused and reusable
4. Test responsive design on multiple viewports
5. Ensure accessibility compliance

## Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3001
```

### Build Failures
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Loading
- Restart dev server after `.env.local` changes
- Use `VITE_` prefix for client-side variables
- Check Vite console for loading confirmation

## Support

For issues or questions:
- Check `/docs` for comprehensive documentation
- Review component TypeScript interfaces
- Examine `portfolioData.ts` for content structure

## License

Personal portfolio project. All rights reserved.

---

**Last Updated**: December 23, 2024
**Version**: 0.0.0
