# Deployment Documentation for Heraldo Domingues Portfolio Website

This document provides instructions for deploying the Heraldo Domingues professional portfolio website to production.

## Project Overview

The portfolio website is built with:
- Next.js 14 (App Router)
- Shadcn UI components
- Tailwind CSS for styling
- Custom i18n implementation for multilingual support (English, Spanish, Portuguese)

## Prerequisites

- Node.js 16.x or higher
- Git
- Vercel account (recommended for deployment)
- Domain name (heraldo.domingues.pro)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/dominguesh/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `.next` directory.

To test the production build locally:

```bash
npm run start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

1. Create an account on [Vercel](https://vercel.com) if you don't have one.
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy the project:
```bash
vercel
```

5. For production deployment:
```bash
vercel --prod
```

6. Configure your custom domain (heraldo.domingues.pro) in the Vercel dashboard.

### Option 2: Static Export

For static hosting platforms:

1. Add the following to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  // ... other config
};
```

2. Build the project:
```bash
npm run build
```

3. The static files will be generated in the `out` directory, which can be deployed to any static hosting service like Netlify, GitHub Pages, or AWS S3.

## Environment Variables

Create a `.env.local` file for local development and set the following variables:

```
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Form submission endpoint (if using a backend service)
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-endpoint.com/api
```

For production, set these environment variables in your hosting platform's dashboard.

## Content Updates

### Adding Company Logos
1. Place company logo images in `/public/images/worked-companies/`
2. Update the `companyLogos` array in `src/components/sections/CompaniesCarousel.tsx`

### Adding Certification Badges
1. Place active certification badges in `/public/images/active-badges/`
2. Place expired certification badges in `/public/images/expired-badges/`
3. Update the `certifications` object in `src/components/sections/CertificationsBadges.tsx`

### Updating Portfolio Projects
1. Update the `projects` array in `src/components/sections/PortfolioSection.tsx` with new project information

## Multilingual Support

To update translations:
1. Edit the JSON files in `src/i18n/locales/` directory:
   - `en.json` for English
   - `es.json` for Spanish
   - `pt.json` for Portuguese

## Performance Monitoring

After deployment, use the following tools to monitor performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

## Troubleshooting

### Common Issues

1. **Build Errors**:
   - Check for missing dependencies in `package.json`
   - Verify all imports are correct
   - Check for TypeScript errors with `npm run type-check`

2. **Styling Issues**:
   - Verify Tailwind CSS is properly configured
   - Check for conflicting CSS classes

3. **Deployment Failures**:
   - Check environment variables are properly set
   - Verify build commands are correct
   - Check for unsupported API usage

## Maintenance

Regular maintenance tasks:
1. Keep dependencies updated with `npm update`
2. Monitor for security vulnerabilities with `npm audit`
3. Regularly backup the codebase
4. Update content as needed

## Support

For additional support or questions, contact the development team at [contact@example.com](mailto:contact@example.com).
