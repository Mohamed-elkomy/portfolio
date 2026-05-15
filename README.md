# Mohamed Magdy Elkomy — Portfolio

> Front-End Developer · React.js · Cairo, Egypt

A refined, editorial portfolio built with React, Vite, Tailwind CSS, Framer Motion, and full Arabic/English internationalization.

---

## ⚡ Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Dev server runs on `http://localhost:5173`.

---

## 🎨 Design system

**Aesthetic:** Refined Minimal Premium · editorial typography · light + dark mode · AR/EN with RTL.

**Palette**
- Antique Brass `#C8A055` — accent
- Warm Ink `#1C1917` — primary text / dark bg
- Cream `#FAFAF5` — primary bg
- Stone `#78716C` — muted

**Typography**
- **Fraunces** — display serif (variable, with optical sizing)
- **Geist** — body sans (Vercel)
- **Geist Mono** — code
- **Amiri** — Arabic serif
- **Cairo** — Arabic sans

All fonts loaded from Google Fonts. See `index.html` and `tailwind.config.js`.

---

## 🗂 Project structure

```
portfolio/
├── public/
│   ├── certificates/          ← drop 9 cert PDFs here (see /src/data/certifications.js for filenames)
│   ├── favicon.svg
│   └── resume.pdf             ← drop your CV PDF here
├── src/
│   ├── assets/                ← project screenshots, photography
│   ├── components/
│   │   ├── common/            ← SectionHeading, ProjectCard
│   │   ├── layout/            ← Navbar, Footer, Logo, ThemeToggle, LanguageToggle
│   │   └── sections/          ← Hero, StatsBar, About, FeaturedProjects, Skills,
│   │                             Experience, Education, Certifications, Services, Contact
│   ├── data/                  ← all content as JS objects (projects, skills, experience, etc.)
│   ├── hooks/                 ← useTheme, useLocale
│   ├── i18n/                  ← en.json, ar.json, i18next config
│   ├── lib/                   ← cn() utility
│   ├── pages/                 ← Home, Projects, ProjectDetail, Photography,
│   │                             AboutPage, CertificationsPage, ContactPage, NotFound
│   ├── styles/                ← globals.css with design tokens
│   ├── App.jsx                ← router + Lenis smooth scroll
│   └── main.jsx               ← entry
├── index.html
├── package.json
├── tailwind.config.js         ← design tokens (palette, fonts, animations)
└── vite.config.js             ← @ alias, manual chunks for code-splitting
```

---

## 📝 Content lives in `/src/data/`

Edit these files to update the site — no React knowledge needed for content updates:

| File | What's in it |
|---|---|
| `profile.js` | Name, location, email, phone, social links, stats |
| `projects.js` | All 25 projects (8 featured + 17 gallery) — bilingual |
| `skills.js` | Core competencies + Tools + Languages |
| `experience.js` | Work history with bilingual content |
| `education.js` | MTI + graduation project |
| `certifications.js` | 9 certificates with PDF file paths |
| `services.js` | Freelance offerings + pricing |

---

## 🌐 Internationalization

The site supports English (LTR) and Arabic (RTL) with automatic direction switching.

- Translations live in `src/i18n/en.json` and `src/i18n/ar.json`.
- The `<html lang>` and `<html dir>` attributes auto-sync with the selected language.
- Project descriptions, role titles, etc., are bilingual objects: `{ en: '...', ar: '...' }`.

---

## 🚀 Deployment

**Vercel** (recommended):

```bash
# 1. Push to GitHub
# 2. Import the repo in Vercel
# 3. Framework preset: Vite
# 4. Build command: npm run build
# 5. Output dir: dist
```

The `vite.config.js` already includes manual chunking for `react-vendor`, `motion`, and `i18n`.

---

## ✅ Still needed from you

To reach 100%, drop these files into `/public/`:

1. **`resume.pdf`** — your CV PDF (download CTA links to this)
2. **`certificates/*.pdf`** — 9 certificate PDFs:
   - `eraasoft-frontend.pdf`
   - `mahara-tech-html-css.pdf`
   - `mahara-tech-cybersecurity.pdf`
   - `yanfaa-html.pdf`
   - `yanfaa-power-bi.pdf`
   - `route-flutter.pdf`
   - `zewail-ai.pdf`
   - `iti-embedded.pdf`
   - `sololearn-html.pdf`
3. **`og-image.png`** — 1200×630 social share image (use the brass + ink + cream palette)
4. **(optional) Project screenshots** — in `/public/projects/{slug}.jpg` — used on project detail pages (auto-fallback if missing)
5. **(optional) Profile photo** — in `/src/assets/me.jpg` — for the About section

---

## 🧠 Notes

- **Smooth scroll** is handled by Lenis. Respects `prefers-reduced-motion`.
- **All sections** have proper `aria-labelledby` and `<h2>` headings for screen readers.
- **Theme + language preferences** are persisted to `localStorage`.
- **Logo** is the **M·K monogram** with a brass dot (see `Logo.jsx`).

---

Built with care · React · Vite · Tailwind · Framer Motion · i18next.
