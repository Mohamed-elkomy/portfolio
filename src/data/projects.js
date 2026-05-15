// =========================================================================
// Projects — Featured (8) shown on Home + Gallery (17) shown on /projects
// =========================================================================

/**
 * Project schema:
 * {
 *   slug: unique kebab-case id (used in /projects/:slug)
 *   name: { en, ar }
 *   tagline: { en, ar }
 *   description: { en, ar } - longer copy for detail page
 *   category: matches projects.category.* in i18n
 *   tech: array of tech tags
 *   links: { live, source? }
 *   featured: boolean
 *   year: number
 *   image?: '/projects/{slug}.jpg' (in /public/projects/)
 *   role: string (Lead / Solo / Team)
 * }
 */

export const projects = [
  // ============== FEATURED (Home page) ==============
  {
    slug: 'fix-store',
    name: { en: 'FIX Store', ar: 'FIX Store' },
    tagline: {
      en: 'Feature-rich React e-commerce with Redux Toolkit and Embla carousel.',
      ar: 'تجارة إلكترونية بـ React و Redux و Embla carousel.',
    },
    description: {
      en: 'A production e-commerce storefront built for Brmja Tech. Features include a custom Embla autoplay hook, variant renderer with color swatches and pill selectors, category and brand navigation with URL param filtering, bottom-sheet product modals, and a fully internationalized UI.',
      ar: 'متجر إلكتروني بنيته لـ Brmja Tech. يتضمن hook مخصص للـ Embla autoplay، نظام variants بألوان و pills، تصفّح حسب الفئة والبراند بالـ URL params، modals منبثقة للمنتجات، وواجهة متعددة اللغات.',
    },
    category: 'ecommerce',
    tech: ['React 18', 'Redux Toolkit', 'Vite', 'Tailwind', 'shadcn/ui', 'i18next', 'Embla'],
    links: { live: 'https://fix-store.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Lead Developer',
  },
  {
    slug: 'my-tours',
    name: { en: 'MyTours', ar: 'MyTours' },
    tagline: {
      en: 'Tourism & rental platform supporting 9 languages with full RTL handling.',
      ar: 'منصة سياحة وإيجار بدعم 9 لغات بالكامل مع RTL.',
    },
    description: {
      en: 'A multi-language travel platform I inherited and overhauled — 9 locales, full RTL support, shared storage utilities, dark mode, SEO with react-helmet-async, shimmer skeletons, and Vite bundle optimization. The kind of project that proves I can handle scale and maintenance.',
      ar: 'منصة سفر بـ 9 لغات تسلمتها وحدّثتها بالكامل — RTL، utilities مشتركة للـ storage، dark mode، SEO عبر react-helmet-async، shimmer skeletons، وتحسين bundle بـ Vite.',
    },
    category: 'saas',
    tech: ['React 19', 'Vite 6', 'Bootstrap 5', 'i18next', 'Axios', 'react-helmet-async'],
    links: { live: 'https://mytourshub.com/' },
    featured: true,
    year: 2026,
    role: 'Maintainer & Architect',
  },
  {
    slug: 'yourz',
    name: { en: 'YourZ', ar: 'YourZ' },
    tagline: {
      en: 'Premium beauty & fashion marketplace landing with Light Editorial aesthetic.',
      ar: 'لاندينج بيج فاخرة لتطبيق جمال وأزياء بأسلوب Light Editorial.',
    },
    description: {
      en: 'A premium landing page for YourZ — a beauty marketplace by Brmja Tech. Built with shadcn/ui, full i18n, dark/light mode, Framer Motion micro-interactions, and policy pages required for App Store and Google Play submission.',
      ar: 'لاندينج بريميوم لـ YourZ — تطبيق سوق جمال وأزياء. مبني بـ shadcn/ui، i18n كامل، light/dark mode، Framer Motion، وصفحات السياسات المطلوبة لمتاجر التطبيقات.',
    },
    category: 'editorial',
    tech: ['React', 'Tailwind', 'shadcn/ui', 'Framer Motion', 'i18next'],
    links: { live: 'https://yourz-launchpad.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'raw-chem',
    name: { en: 'Raw Chem', ar: 'Raw Chem' },
    tagline: {
      en: 'B2B chemical platform — multi-page SPA with auth, dashboard, protected routes.',
      ar: 'منصة كيماويات B2B — SPA متعدد الصفحات مع auth و dashboard.',
    },
    description: {
      en: 'A complete B2B chemicals SPA with Home, Products catalog with search and filter, Auth pages, Dashboard with protected routes, About, and Contact pages. Refactored to CSS Modules with transparent navbar on scroll and SVG wave dividers.',
      ar: 'SPA كاملة لكيماويات B2B — صفحات Home، Products بـ search و filter، Auth، Dashboard مع protected routes، About، و Contact. CSS Modules، Navbar شفاف، و SVG dividers.',
    },
    category: 'b2b',
    tech: ['React', 'Vite', 'CSS Modules', 'React Router', 'Auth'],
    links: { live: 'https://rawchem-landing.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'muslim-academy',
    name: { en: 'Muslim Academy', ar: 'Muslim Academy' },
    tagline: {
      en: 'Islamic education platform with pricing tiers in British pounds.',
      ar: 'منصة تعليم إسلامي مع باقات تسعير بالجنيه الإسترليني.',
    },
    description: {
      en: 'A landing page for an Islamic educational platform with 11 components, 4 pages, real pricing plans in GBP, dual teacher (teal) and student (green) sections, FAQ sourced from app screens, and policy pages for App Store compliance.',
      ar: 'لاندينج لمنصة تعليم إسلامي — 11 component، 4 صفحات، باقات تسعير حقيقية بالإسترليني، قسم teacher (تيل) و student (أخضر)، FAQ، وصفحات سياسات.',
    },
    category: 'education',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    links: { live: 'https://muslim-academy-landing.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'hyper-one-kilo',
    name: { en: 'Hyper One Kilo', ar: 'هايبر ون كيلو' },
    tagline: {
      en: 'Egyptian grocery-by-weight brand with corporate identity and four routes.',
      ar: 'بقالة بالكيلو مصرية بهوية كاملة وأربع صفحات.',
    },
    description: {
      en: 'A multi-page React/Vite app for an Egyptian grocery-by-weight brand. Corporate colors corrected mid-build from real product screenshots (deep blue #1B3F8F + red #E31E24), four routes including three policy pages, and a reusable PolicyPage layout.',
      ar: 'تطبيق React/Vite متعدد الصفحات لبراند بقالة بالكيلو مصري. ألوان البراند المظبوطة من screenshots المنتجات (أزرق غامق + أحمر)، 4 routes، و PolicyPage layout قابل لإعادة الاستخدام.',
    },
    category: 'retail',
    tech: ['React', 'Vite', 'Tailwind', 'React Router'],
    links: { live: 'https://hyper-one-kilo-v2.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'she-go',
    name: { en: 'SheGo', ar: 'SheGo' },
    tagline: {
      en: 'Home medical services platform — 10-section homepage, full RTL Arabic branding.',
      ar: 'منصة خدمات طبية منزلية — 10 sections، هوية RTL كاملة.',
    },
    description: {
      en: 'A complete React/Vite multi-page landing page for a home medical services platform. 10-section homepage, Privacy Policy, Terms, and Delete Account pages. Purple gradient RTL Arabic branding with 12 service types.',
      ar: 'لاندينج كاملة لمنصة خدمات طبية منزلية. صفحة رئيسية بـ 10 sections، Privacy، Terms، Delete Account. هوية بنفسجية RTL مع 12 نوع خدمة.',
    },
    category: 'healthcare',
    tech: ['React', 'Vite', 'Tailwind', 'i18next'],
    links: { live: 'https://landing-she-go.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'mazad-arabity',
    name: { en: 'Mazad Arabity', ar: 'مزاد عربيتي' },
    tagline: {
      en: 'Car auction marketplace — bidding flow, lot pages, and seller dashboard.',
      ar: 'سوق مزادات عربيات — تدفّق المزايدة، صفحات اللوتات، و dashboard للبائع.',
    },
    description: {
      en: 'A car auction SaaS platform — one of the top SaaS opportunities in my portfolio. Built with a focus on bidding flow, lot pages with rich media, and a seller dashboard.',
      ar: 'منصة SaaS لمزادات السيارات — من أقوى فرص الـ SaaS في الـ portfolio. الـ bidding flow، صفحات اللوتات بمحتوى ثري، و dashboard للبائع.',
    },
    category: 'marketplace',
    tech: ['React', 'Vite', 'Tailwind', 'React Router'],
    links: { live: 'https://mazad-arabity.vercel.app/' },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },

  // ============== GALLERY (only on /projects) ==============
  {
    slug: 'el-koptan',
    name: { en: 'ElKoptan', ar: 'القبطان' },
    tagline: { en: 'Driver recruitment SPA — dark luxury industrial design with gold shimmer.', ar: 'SPA لتجنيد سائقين — تصميم Dark Luxury صناعي.' },
    description: { en: 'A driver recruitment platform with a dark luxury industrial aesthetic, gold shimmer effects, registration form with validation, and integrated real app screenshots into a PhoneMockup SVG component.', ar: 'منصة تجنيد سائقين بـ aesthetic فاخر صناعي، أنيميشن ذهبي، فورم تسجيل بـ validation.' },
    category: 'b2b', tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind', 'RTL'],
    links: { live: 'https://captain-s-scrap-hub.vercel.app/' }, featured: false, year: 2026, role: 'Solo Developer',
  },
  {
    slug: 'engineer-landing',
    name: { en: 'Engineer', ar: 'المهندس' }, tagline: { en: 'Professional services landing.', ar: 'لاندينج خدمات مهنية.' },
    description: { en: 'A professional services landing page.', ar: 'لاندينج خدمات مهنية.' },
    category: 'b2b', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://engineer-landing-page-two.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'al-marhal',
    name: { en: 'Al-Marhal', ar: 'المرحل' }, tagline: { en: 'Service platform landing page.', ar: 'لاندينج منصة خدمية.' },
    description: { en: 'A service platform landing page.', ar: 'لاندينج منصة خدمية.' },
    category: 'b2b', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://al-marhal-landing-page.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'exclusive-medical',
    name: { en: 'Exclusive Medical', ar: 'إكسكلوسيف الطبية' }, tagline: { en: 'Medical services landing.', ar: 'لاندينج خدمات طبية.' },
    description: { en: 'A medical services landing page.', ar: 'لاندينج خدمات طبية.' },
    category: 'healthcare', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://exclusive-medical-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'fix-landing-bilingual',
    name: { en: 'FIX Landing (Bilingual)', ar: 'FIX لاندينج' }, tagline: { en: 'Bilingual landing page with translator.', ar: 'لاندينج بيج بترجمة عربي-إنجليزي.' },
    description: { en: 'A bilingual Arabic-English landing page.', ar: 'لاندينج بيج عربي-إنجليزي.' },
    category: 'ecommerce', tech: ['React', 'i18next', 'Tailwind'],
    links: { live: 'https://fix-landing-page-ar-en.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'paradise-landing',
    name: { en: 'Paradise', ar: 'براديس' }, tagline: { en: 'Lifestyle brand landing page.', ar: 'لاندينج براند لايف ستايل.' },
    description: { en: 'A lifestyle brand landing page.', ar: 'لاندينج براند لايف ستايل.' },
    category: 'retail', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://paradise-landing-lyart.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'rabeh',
    name: { en: 'Rabeh', ar: 'رابح' }, tagline: { en: 'Rewards/incentives platform landing.', ar: 'لاندينج منصة مكافآت.' },
    description: { en: 'A rewards platform landing page.', ar: 'لاندينج منصة مكافآت.' },
    category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://landing-rabe7-front.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'rajaeen',
    name: { en: 'Rajaeen', ar: 'راجعين' }, tagline: { en: 'Community/social landing page.', ar: 'لاندينج مجتمعية.' },
    description: { en: 'A community-focused landing page.', ar: 'لاندينج مجتمعية.' },
    category: 'editorial', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://rajaeen-landing-page.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'shatat',
    name: { en: 'Shatat', ar: 'شتت' }, tagline: { en: 'Service marketplace landing.', ar: 'لاندينج سوق خدمات.' },
    description: { en: 'A service marketplace landing.', ar: 'لاندينج سوق خدمات.' },
    category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://shatat-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'sianko',
    name: { en: 'Sianko', ar: 'صيانكو' }, tagline: { en: 'Home services marketplace.', ar: 'سوق خدمات منزلية.' },
    description: { en: 'A home services marketplace landing page — one of the top SaaS opportunities in my portfolio.', ar: 'لاندينج سوق خدمات منزلية — من أقوى فرص الـ SaaS.' },
    category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://sianko-landing-seven.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'beyoo3',
    name: { en: 'Beyoo3', ar: 'بيوع' }, tagline: { en: 'Marketplace landing.', ar: 'لاندينج سوق إلكتروني.' },
    description: { en: 'A marketplace landing page.', ar: 'لاندينج سوق إلكتروني.' },
    category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://beyoo3-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'easy-go',
    name: { en: 'Easy Go', ar: 'إيزي جو' }, tagline: { en: 'Travel/transport service landing.', ar: 'لاندينج خدمة سفر/نقل.' },
    description: { en: 'A travel/transport service landing page.', ar: 'لاندينج خدمة سفر.' },
    category: 'saas', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://easy-go-orcin.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'alef-lam-meem',
    name: { en: 'Alef Lam Meem', ar: 'ألف لام ميم' }, tagline: { en: 'Islamic educational platform landing.', ar: 'لاندينج منصة تعليم إسلامي.' },
    description: { en: 'An Islamic educational platform landing page.', ar: 'لاندينج منصة تعليم إسلامي.' },
    category: 'education', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://alef-lam-meem-landing-page.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'faya',
    name: { en: 'Faya', ar: 'فايا' }, tagline: { en: 'ERP platform landing — recent Brmja Tech build.', ar: 'لاندينج منصة ERP — من شغل Brmja Tech الحديث.' },
    description: { en: 'A landing page for the Faya ERP platform — a recent build at Brmja Tech with translation and responsive updates.', ar: 'لاندينج لمنصة Faya ERP — من شغل Brmja Tech الحديث.' },
    category: 'saas', tech: ['React', 'Vite', 'Tailwind', 'i18next'],
    links: { live: 'https://faya-landing.vercel.app/' }, featured: false, year: 2026, role: 'Team Developer',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const galleryProjects = projects.filter((p) => !p.featured)
