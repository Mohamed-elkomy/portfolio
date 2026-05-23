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
│   ├── certificates/          ← 8 cert files (see /src/data/certifications.js for filenames)
│   ├── favicon.svg
│   └── Mohamed_Elkomy_CV.pdf  ← drop your CV PDF here (download CTAs link to this)
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
| `certifications.js` | 8 certificates with file paths (major + continuous tiers) |

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

## 📸 Capturing screenshots

Project detail pages render a static screenshot of each live site (set via
`scripts/capture-screenshots.mjs`, output to `/public/projects/`).

```bash
# 1. Install Playwright + the Chromium browser (one-time)
npm install              # picks up playwright from devDependencies
npx playwright install chromium

# 2. Capture desktop + mobile shots of every project
npm run screenshots
```

The script reads the project list from `src/data/projects.js`, opens each
`links.live` URL in Chromium, and writes:

- `public/projects/{slug}.jpg` — desktop, 1440×900
- `public/projects/{slug}-mobile.jpg` — mobile, 375×812

It's **idempotent** — projects with both files already present are skipped, so
you can re-run it safely after adding new projects. A failing site is logged and
skipped without crashing the run. Commit the resulting JPGs to version control.

---

## ✅ Still needed from you

To reach 100%, drop these files into `/public/`:

1. **`Mohamed_Elkomy_CV.pdf`** — your CV PDF (all download CTAs link to this)
2. **`certificates/*`** — 8 certificate files (already in repo):
   - `eraasoft-frontend.pdf`
   - `route-flutter.pdf`
   - `iti-embedded.jpeg`
   - `zewail-ai.jpeg`
   - `mahara-tech-html-css.pdf`
   - `mahara-tech-cybersecurity.pdf`
   - `yanfaa-power-bi.pdf`
   - `yanfaa-html.pdf`
3. **`og-image.png`** — 1200×630 social share image (use the brass + ink + cream palette)
4. **Project screenshots** — run `npm run screenshots` (see above) to populate `/public/projects/`
5. **(optional) Profile photo** — in `/src/assets/me.jpg` — for the About section

---

## 🧠 Notes

- **Smooth scroll** is handled by Lenis. Respects `prefers-reduced-motion`.
- **All sections** have proper `aria-labelledby` and `<h2>` headings for screen readers.
- **Theme + language preferences** are persisted to `localStorage`.
- **Logo** is the **M·K monogram** with a brass dot (see `Logo.jsx`).

---

Built with care · React · Vite · Tailwind · Framer Motion · i18next.
