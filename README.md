# Mohamed Magdy Elkomy — Portfolio

> Front-End Developer · React.js · Cairo, Egypt

A refined, high-performance portfolio built with React 18, Vite 6, Tailwind CSS, Framer Motion, Lenis smooth scroll, and full Arabic/English internationalization with RTL support.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Run ESLint check
npm run lint

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

Dev server runs locally on `http://localhost:5173`.

---

## ✨ Features & Architecture

- **High-Performance Code Splitting**: Dynamic page loading with `React.lazy()` & `Suspense`.
- **Full Internationalization (i18n)**: English (LTR) & Arabic (RTL) with auto-syncing `<html dir>` and `<html lang>`.
- **Refined Design System**: Custom HSL color tokens (Antique Brass, Warm Ink, Cream, Stone) with dark mode persistence.
- **Advanced Filtering**: Filter projects by Category, Type (Website vs Landing), and Technology tags (`React`, `Redux`, `Tailwind`, `Axios`, etc.).
- **SEO & Social Sharing Ready**: Includes dynamic `Helmet` meta tags, `sitemap.xml`, and `robots.txt`.
- **Interactive Messaging & CV Downloads**: Direct contact form with validation and quick CV download actions.

---

## 🎨 Design System

**Aesthetic:** Refined Minimal Premium · editorial typography · light + dark mode · AR/EN with RTL.

**Palette**
- **Antique Brass**: `#C8A055` — primary accent
- **Warm Ink**: `#1C1917` — primary text / dark bg
- **Cream**: `#FAFAF5` — primary bg / light text
- **Stone**: `#78716C` — muted elements

**Typography**
- **Fraunces** — display serif (variable, with optical sizing)
- **Geist** — body sans (Vercel)
- **Geist Mono** — code monospace
- **Amiri** — Arabic serif
- **Cairo** — Arabic sans

All fonts loaded from Google Fonts via `index.html` and `tailwind.config.js`.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   ├── certificates/          ← Certificate PDFs and images
│   ├── favicon.svg
│   ├── Mohamed_Elkomy_CV.pdf  ← CV PDF for download actions
│   ├── robots.txt             ← Search crawler directive
│   └── sitemap.xml            ← XML sitemap for SEO
├── src/
│   ├── assets/                ← Project screenshots, branding assets
│   ├── components/
│   │   ├── common/            ← SectionHeading, ProjectCard, Seo, CustomCursor
│   │   ├── layout/            ← Navbar, Footer, Logo, ThemeToggle, LanguageToggle
│   │   └── sections/          ← Hero, StatsBar, About, FeaturedProjects, Skills, Contact
│   ├── data/                  ← Centralized content (projects, skills, experience, profile)
│   ├── hooks/                 ← useTheme, useLocale, useContentProtection
│   ├── i18n/                  ← en.json, ar.json, i18next configuration
│   ├── lib/                   ← cn() class merge utility
│   ├── pages/                 ← Home, Projects, ProjectDetail, AboutPage, CertificationsPage, ContactPage, NotFound
│   ├── styles/                ← globals.css & design system tokens
│   ├── App.jsx                ← Routes + React.lazy code splitting + Lenis smooth scroll
│   └── main.jsx               ← Application entry point
├── .eslintrc.cjs              ← ESLint configuration
├── index.html
├── package.json
├── tailwind.config.js         ← Design tokens (palette, fonts, animations)
└── vite.config.js             ← Vite aliases, ESM resolution & chunk configuration
```

---

## 📝 Content Management (`/src/data/`)

Edit these structured data files to update portfolio content:

| File | Content |
|---|---|
| `profile.js` | Name, title, email, phone, social links, GitHub statistics |
| `projects.js` | All 25 projects (8 featured + 17 gallery) — bilingual |
| `skills.js` | Core competencies, tools, languages |
| `experience.js` | Career history and company contributions |
| `education.js` | Academic background & graduation project |
| `certifications.js` | Professional certificates & paths |

---

## 📸 Capturing Project Screenshots

Project detail pages render static screenshots of each live site (via Playwright script `scripts/capture-screenshots.mjs`).

```bash
# 1. Install Playwright browser
npx playwright install chromium

# 2. Capture desktop + mobile shots of all projects
npm run screenshots
```

Captures output directly to `/public/projects/{slug}.jpg` and `/public/projects/{slug}-mobile.jpg`.

---

## 🚀 Deployment

**Vercel / Netlify**:
1. Push repository to GitHub.
2. Import project into Vercel / Netlify.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

---

Built with care by **Mohamed Magdy Elkomy** · React · Vite · Tailwind CSS · Framer Motion · i18next.
