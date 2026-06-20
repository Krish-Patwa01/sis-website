# Shridhar InfoSec Solutions — Enterprise Website

Premium, production-ready website for Shridhar InfoSec Solutions (SIS), a next-generation
cybersecurity services firm. Built from the **SIS 2026 Company Profile**.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router, TypeScript) |
| Styling    | Tailwind CSS v4                     |
| Icons      | lucide-react                        |
| Fonts      | Space Grotesk (display) + Inter (body) via `next/font` |
| Animations | CSS keyframes + IntersectionObserver (zero animation libraries) |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx        # Metadata, SEO, Open Graph, JSON-LD, fonts
  page.tsx          # Section composition
  globals.css       # Design tokens, glass/glow/reveal utilities
components/
  Navbar.tsx        # Fixed glass navbar + mobile menu
  Hero.tsx          # Headline, CTAs, live defense console visual
  Stats.tsx         # Animated counters
  About.tsx         # Vision / Mission / Values
  Services.tsx      # 3 flagship pillars + 6 service cards
  Process.tsx       # 5-step engagement model
  WhyUs.tsx         # 4 differentiators
  Industries.tsx    # 7 industries + CTA tile
  FAQ.tsx           # Accessible accordion
  Contact.tsx       # Contact panel with details
  Footer.tsx        # Sitemap + contact footer
  Reveal.tsx        # Scroll-reveal primitive
  SectionHeading.tsx
public/
  logo-light.png    # For dark backgrounds (used)
  logo-dark.png     # For light backgrounds
```

## Highlights

- **Design**: dark, futuristic, enterprise-grade — glassmorphism, gradient text, glow orbs,
  animated grid hero, beam borders.
- **Performance**: no animation libraries, `next/font` self-hosted fonts, `next/image`,
  CSS-only effects, `prefers-reduced-motion` respected.
- **Accessibility**: semantic landmarks, aria labels/expanded states, keyboard-friendly
  accordion and menu, strong color contrast.
- **SEO**: meta + Open Graph + Twitter cards, Organization JSON-LD, single `h1`, proper
  heading hierarchy.

## Future Enhancements

- Contact form with server action + email integration (Resend/SES)
- Blog / security advisories section (MDX)
- Case studies & client logos ("Our Clientele")
- Per-service detail pages for SEO long-tail
- Analytics (Plausible/GA4) and sitemap.xml/robots.txt via `next-sitemap`
