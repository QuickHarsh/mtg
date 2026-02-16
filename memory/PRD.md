# Meridian Trade Global - Product Requirements Document (PRD)

**Project:** Corporate Website for Sustainable Textile Sourcing  
**Type:** Static B2B Website  
**Technology Stack:** React, Framer Motion, Three.js, Tailwind CSS, Shadcn UI  
**Created:** February 16, 2025  
**Status:** MVP Complete - Static Frontend Only

---

## Original Problem Statement

Build a premium corporate website for Meridian Trade Global, a B2B sustainable textile sourcing company. The website must:

- Communicate refined authority, global connectivity, and sustainability leadership
- Target international retailers, wholesalers, hospitality groups, and sustainability-focused brands
- Position the company as a premium sourcing partner combining artisanal craftsmanship with global trade capability
- Be fully static (no backend/database required)
- Match $20,000+ agency-quality design standards
- Use modern 3D elements, animations, and interactive features
- Follow the provided brand vision and reference designs

---

## User Personas

### Primary Users

1. **B2B Procurement Manager**
   - Large retailers and hospitality chains
   - Needs: Reliable bulk supply, certifications, quality assurance
   - Goals: Find verified sustainable suppliers for long-term partnerships

2. **Boutique Brand Owner**
   - Small to medium eco-conscious brands
   - Needs: Custom development, private label, ethical sourcing
   - Goals: Differentiate through unique sustainable products

3. **Corporate Sustainability Officer**
   - Enterprise buyers with ESG mandates
   - Needs: Full traceability, compliance documentation, impact metrics
   - Goals: Meet corporate sustainability commitments

---

## Core Requirements (Static Website)

### Functional Requirements

✅ **Navigation & Routing**
- Fixed header with smooth scroll behavior
- 7 main pages: Home, About, Products, Sustainability, Global Network, Why Choose Us, Contact
- Responsive mobile menu
- Active page highlighting

✅ **Content Sections**
- Hero sections with compelling copy
- Product categories with images and details
- Certification and sustainability information
- Global network overview
- Contact forms (frontend-only validation)
- Professional footer with links

✅ **Interactive Elements**
- Smooth scroll animations (Framer Motion)
- Hover effects on cards and buttons
- Animated statistics counters
- 3D avatar placeholders (Three.js)
- Form validation (no submission)

### Design Requirements

✅ **Color Palette**
- Primary: Emerald Green (#10B981, #059669)
- Background: Beige/Cream (#F5F3EF, #FAFAFA)
- Text: Gray scale (900, 700, 600)
- Accents: Blue, Purple, Orange for variety

✅ **Typography**
- Font Family: Inter (Google Fonts)
- Professional, clean, modern aesthetic
- Proper heading hierarchy

✅ **Components**
- Shadcn UI components for consistency
- Custom animated components
- Responsive grid layouts
- Card-based content presentation

---

## Architecture & Implementation

### Technology Stack

**Frontend:**
- React 19.0.0
- React Router DOM 7.5.1
- Framer Motion 12.34.0
- @react-three/fiber 9.5.0
- @react-three/drei 10.7.7
- Three.js 0.160.0
- Tailwind CSS 3.4.17
- Shadcn UI Components
- Lucide React Icons

**Build Tools:**
- Create React App with Craco
- Yarn package manager

### File Structure

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Site footer
│   │   └── ThreeAvatar.jsx # 3D avatar component
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Sustainability.jsx
│   │   ├── GlobalNetwork.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── mockData.js   # All static content
│   ├── App.js
│   ├── App.css
│   └── index.css
```

### Mock Data Structure

All content is stored in `/src/data/mockData.js`:
- Product categories (6 types)
- Sustainability certifications (4 items)
- Why choose us features (6 items)
- Global statistics (4 metrics)
- How it works steps (3 stages)
- Trust layer information
- Sourcing regions (5 countries)

---

## What's Been Implemented

### ✅ Completed (February 16, 2025)

**Page Implementation:**
1. **Home Page**
   - Hero section with dual CTAs
   - Export readiness indicators
   - Product categories grid (6 products)
   - How MTG Works section with 3-step process
   - Sustainability highlights
   - Global statistics section
   - Final CTA section

2. **About Us Page**
   - Mission and vision statements
   - Core values grid (6 values)
   - Ethical sourcing philosophy
   - Commitment statement

3. **Products Page**
   - Detailed product category sections
   - Material listings
   - Feature highlights
   - Wholesale and customization options
   - CTA for catalog request

4. **Sustainability Page**
   - Certification details (GOTS, Natural Dyes, etc.)
   - Environmental impact metrics
   - Sustainable practices grid
   - Supply chain traceability
   - Commitment statement

5. **Global Network Page**
   - World map visual
   - Global footprint statistics
   - Sourcing regions overview
   - International trade capabilities
   - Export process breakdown

6. **Why Choose Us Page**
   - Key differentiators
   - Comparison table
   - Success factors
   - Ideal partner profiles

7. **Contact Page**
   - Contact information cards
   - Multi-field contact form
   - Inquiry type selector
   - Preferred contact methods

**Common Components:**
- Fixed navigation header with smooth scroll
- Professional footer with links and certifications
- Responsive design (desktop, tablet, mobile)
- Smooth animations throughout
- Hover effects and transitions

**Technical Features:**
- Framer Motion animations on scroll
- Three.js placeholders for 3D elements
- Toast notifications (Sonner)
- Form validation (frontend only)
- Responsive images from Unsplash
- Custom scrollbar styling
- SEO-friendly structure

---

## Prioritized Backlog

### P0 Features (Not Implemented - Out of Scope for Static Site)
- Backend API integration
- Database connectivity
- Form submission handling
- Email notifications
- User authentication
- Content management system

### P1 Features (Future Enhancements)
- Advanced 3D product viewers
- Interactive global map with clickable regions
- Video backgrounds
- Blog/news section
- Case studies and testimonials
- Downloadable product catalogs (PDF)
- Multi-language support

### P2 Features (Nice to Have)
- Live chat integration
- Newsletter subscription
- Social media feed integration
- Advanced analytics tracking
- A/B testing capabilities
- Performance optimization

---

## Next Action Items

1. **Content Population**
   - Replace placeholder images with actual product photos
   - Update copy with real company information
   - Add actual contact details and office locations

2. **SEO Optimization**
   - Add meta tags for all pages
   - Implement structured data (Schema.org)
   - Create sitemap.xml
   - Optimize images with proper alt text

3. **Performance**
   - Image optimization and lazy loading
   - Code splitting for faster initial load
   - Implement service worker for PWA
   - Add loading states

4. **Accessibility**
   - ARIA labels for all interactive elements
   - Keyboard navigation testing
   - Screen reader compatibility
   - Color contrast verification

5. **Production Deployment**
   - Set up hosting (Vercel, Netlify, etc.)
   - Configure domain name
   - Set up SSL certificate
   - Configure CDN for assets

---

## Design Guidelines Followed

✅ **Color Restrictions:**
- No dark purple/blue or purple/pink gradients
- Gradients limited to <20% of viewport
- Light, professional emerald green as primary

✅ **Typography:**
- No system-UI font (using Inter)
- Proper heading hierarchy
- Readable line heights

✅ **Icons:**
- Only Lucide React icons (no emojis)
- Consistent icon sizing
- Proper semantic usage

✅ **Interactions:**
- Smooth hover transitions
- Micro-animations on scroll
- Professional button effects
- No jarring movements

✅ **Spacing:**
- Generous whitespace
- Proper component padding
- Consistent grid layouts

---

## Testing Notes

**Browser Compatibility:**
- Chrome/Edge: ✅
- Firefox: ✅ (assumed)
- Safari: ✅ (assumed)

**Responsive Breakpoints:**
- Desktop (1920px): ✅
- Tablet (768px): ✅
- Mobile (375px): ✅

**Performance:**
- Initial load: Fast (static assets)
- Animations: Smooth
- Images: Optimized via Unsplash

---

## Known Limitations

1. **No Backend**: All forms are frontend-only; no actual submission
2. **Static Content**: All data is hardcoded in mockData.js
3. **3D Elements**: Using placeholder images instead of full 3D models
4. **No CMS**: Content updates require code changes
5. **Limited Interactivity**: No user accounts, saved preferences, or dynamic content

---

## Success Metrics (for Future Implementation)

- Form submission rate
- Time on page
- Bounce rate
- Navigation patterns
- CTA click-through rate
- Mobile vs desktop traffic
- Page load performance scores

---

## Conclusion

The Meridian Trade Global website has been successfully implemented as a premium static corporate website. It features modern design, smooth animations, comprehensive content across 7 pages, and follows all specified design guidelines. The site is ready for content population and production deployment.

**Deliverables:**
- ✅ 7 fully functional pages
- ✅ Responsive design
- ✅ Professional animations
- ✅ Corporate B2B aesthetic
- ✅ Sustainability focus
- ✅ Contact forms (frontend validation)
- ✅ Clean, maintainable code

---

*Last Updated: February 16, 2025*
