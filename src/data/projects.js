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
 *   type: 'website' | 'landing' — full multi-page site/app vs. a marketing landing page
 *   category: matches projects.category.* in i18n
 *   tech: array of tech tags
 *   links: { live, source?, mirrors?: string[] }  // mirrors = alternate deployments
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
    type: 'website',
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
    type: 'website',
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
    type: 'landing',
    category: 'editorial',
    tech: ['React', 'Tailwind', 'shadcn/ui', 'Framer Motion', 'i18next'],
    links: {
      live: 'https://yourz-launchpad.vercel.app/',
      mirrors: [
        'https://landing-yourz-app.vercel.app/',
        'https://yourz-launchpad-0dc949f4.vercel.app/',
      ],
    },
    featured: true,
    year: 2026,
    role: 'Solo Developer',
  },
  {
    slug: 'raw-chem',
    name: { en: 'Raw Chem', ar: 'Raw Chem' },
    tagline: {
      en: 'B2B chemicals brand landing — product showcase with a clean industrial layout.',
      ar: 'لاندينج لبراند كيماويات B2B — عرض المنتجات بتصميم صناعي نظيف.',
    },
    description: {
      en: 'A B2B chemicals brand landing built with React and Vite. Product-showcase sections, a transparent navbar on scroll, and SVG wave dividers — refactored to CSS Modules for a maintainable, fully responsive layout.',
      ar: 'لاندينج لبراند كيماويات B2B مبني بـ React و Vite. أقسام لعرض المنتجات، Navbar شفاف عند التمرير، و SVG dividers — مع refactor لـ CSS Modules لتصميم متجاوب وسهل الصيانة.',
    },
    type: 'landing',
    category: 'b2b',
    tech: ['React', 'Vite', 'CSS Modules', 'React Router'],
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
    type: 'landing',
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
      en: 'A multi-page React/Vite landing for an Egyptian grocery-by-weight brand. Corporate colors corrected mid-build from real product screenshots (deep blue #1B3F8F + red #E31E24), four routes including three policy pages, and a reusable PolicyPage layout.',
      ar: 'لاندينج React/Vite متعدد الصفحات لبراند بقالة بالكيلو مصري. ألوان البراند المظبوطة من screenshots المنتجات (أزرق غامق + أحمر)، 4 routes، و PolicyPage layout قابل لإعادة الاستخدام.',
    },
    type: 'landing',
    category: 'retail',
    tech: ['React', 'Vite', 'Tailwind', 'React Router'],
    links: {
      live: 'https://hyper-one-kilo-v2.vercel.app/',
      mirrors: ['https://hyper-one-kilo-v1.vercel.app/'],
    },
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
    type: 'landing',
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
      en: 'Car-auction marketplace landing — bidding concept, lot showcase, responsive layout.',
      ar: 'لاندينج سوق مزادات سيارات — فكرة المزايدة، عرض اللوتات، وتصميم متجاوب.',
    },
    description: {
      en: 'A landing page for a car-auction marketplace, built with React and Vite. Presents the bidding concept and a lot showcase through responsive, sectioned marketing pages.',
      ar: 'لاندينج لسوق مزادات سيارات، مبني بـ React و Vite. يقدّم فكرة المزايدة وعرض اللوتات عبر صفحات تسويقية متجاوبة ومقسّمة.',
    },
    type: 'landing',
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
    tagline: { en: 'Driver-recruitment landing — dark luxury industrial design with gold shimmer.', ar: 'لاندينج تجنيد سائقين — تصميم Dark Luxury صناعي.' },
    description: { en: 'A driver-recruitment landing page with a dark luxury industrial aesthetic, gold shimmer effects, a registration form with validation, and real app screenshots integrated into a PhoneMockup SVG component.', ar: 'لاندينج تجنيد سائقين بـ aesthetic فاخر صناعي، أنيميشن ذهبي، فورم تسجيل بـ validation.' },
    type: 'landing', category: 'b2b', tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind', 'RTL'],
    links: { live: 'https://captain-s-scrap-hub.vercel.app/' }, featured: false, year: 2026, role: 'Solo Developer',
  },
  {
    slug: 'engineer-landing',
    name: { en: 'Engineer', ar: 'المهندس' }, tagline: { en: 'Professional-services landing with a clean, conversion-focused layout.', ar: 'لاندينج خدمات مهنية بتصميم نظيف يركّز على التحويل.' },
    description: { en: 'A single-page marketing site for a professional-services brand, built with React and Vite. Component-driven sections, a responsive layout, and clear calls to action.', ar: 'موقع تعريفي من صفحة واحدة لبراند خدمات مهنية، مبني بـ React و Vite. أقسام معمّمة كمكوّنات، تصميم متجاوب، ودعوات واضحة لاتخاذ إجراء.' },
    type: 'landing', category: 'b2b', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://engineer-landing-page-two.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'al-marhal',
    name: { en: 'Al-Marhal', ar: 'المرحل' }, tagline: { en: 'Service-platform landing with a sectioned, responsive marketing layout.', ar: 'لاندينج منصة خدمية بتصميم تسويقي متجاوب ومقسّم.' },
    description: { en: 'A marketing landing page introducing a service platform, built with React, Vite, and Tailwind. Reusable UI components with responsive breakpoints across every section.', ar: 'لاندينج تسويقي يقدّم منصة خدمية، مبني بـ React و Vite و Tailwind. مكوّنات واجهة قابلة لإعادة الاستخدام مع breakpoints متجاوبة في كل قسم.' },
    type: 'landing', category: 'b2b', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://al-marhal-landing-page.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'exclusive-medical',
    name: { en: 'Exclusive Medical', ar: 'إكسكلوسيف الطبية' }, tagline: { en: 'Medical-services landing with a calm, trust-oriented design.', ar: 'لاندينج خدمات طبية بتصميم هادئ يبني الثقة.' },
    description: { en: 'A landing page for a medical-services provider, built with React, Vite, and Tailwind. Clean, trust-focused sections with a fully responsive layout.', ar: 'لاندينج لمزوّد خدمات طبية، مبني بـ React و Vite و Tailwind. أقسام نظيفة تركّز على بناء الثقة بتصميم متجاوب بالكامل.' },
    type: 'landing', category: 'healthcare', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://exclusive-medical-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'fix-landing-bilingual',
    name: { en: 'FIX Landing — Bilingual', ar: 'FIX لاندينج — المترجم' }, tagline: { en: 'Bilingual Arabic⇄English landing with runtime language switching.', ar: 'لاندينج ثنائي اللغة عربي⇄إنجليزي بتبديل لغة لحظي.' },
    description: { en: 'A landing page with full Arabic/English support powered by i18next, switching both language and text direction at runtime. Built with React and Tailwind for an RTL-aware, responsive layout.', ar: 'لاندينج بدعم كامل للعربي والإنجليزي عبر i18next، يبدّل اللغة واتجاه النص لحظياً. مبني بـ React و Tailwind بتصميم متجاوب يراعي الـ RTL.' },
    type: 'landing', category: 'ecommerce', tech: ['React', 'i18next', 'Tailwind'],
    links: { live: 'https://fix-landing-page-ar-en.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'fix-landing-standard',
    name: { en: 'FIX Landing — Standard', ar: 'FIX لاندينج — العادي' }, tagline: { en: 'Single-language FIX product landing with a responsive marketing layout.', ar: 'لاندينج منتج FIX بنسخة لغة واحدة وتصميم تسويقي متجاوب.' },
    description: { en: 'The standard single-language edition of the FIX product landing, built with React, Vite, and Tailwind. Sectioned marketing layout that adapts cleanly from mobile to desktop.', ar: 'النسخة العادية بلغة واحدة من لاندينج منتج FIX، مبنية بـ React و Vite و Tailwind. تصميم تسويقي مقسّم يتكيّف بسلاسة من الموبايل للديسكتوب.' },
    type: 'landing', category: 'ecommerce', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://fix-landing-page-six.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'paradise-landing',
    name: { en: 'Paradise', ar: 'براديس' }, tagline: { en: 'Lifestyle-brand landing with an image-led, responsive layout.', ar: 'لاندينج براند لايف ستايل بتصميم متجاوب يقوده الصور.' },
    description: { en: 'A lifestyle/retail brand landing page built with React, Vite, and Tailwind. Image-led sections arranged in a responsive grid that adapts cleanly from mobile to desktop.', ar: 'لاندينج لبراند لايف ستايل/تجزئة مبني بـ React و Vite و Tailwind. أقسام تقودها الصور في شبكة متجاوبة تتكيّف بسلاسة من الموبايل للديسكتوب.' },
    type: 'landing', category: 'retail', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://paradise-landing-lyart.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'rabeh',
    name: { en: 'Rabeh', ar: 'رابح' }, tagline: { en: 'Rewards-platform landing presenting the product and its perks.', ar: 'لاندينج منصة مكافآت يعرض المنتج ومزاياه.' },
    description: { en: 'A landing page for a rewards/incentives platform, built with React, Vite, and Tailwind. A sectioned marketing flow that walks visitors through features and benefits in a responsive layout.', ar: 'لاندينج لمنصة مكافآت وحوافز، مبني بـ React و Vite و Tailwind. تدفّق تسويقي مقسّم يأخذ الزائر عبر المميزات والفوائد بتصميم متجاوب.' },
    type: 'landing', category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://landing-rabe7-front.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'rajaeen',
    name: { en: 'Rajaeen', ar: 'راجعين' }, tagline: { en: 'Community platform landing with an editorial, content-first layout.', ar: 'لاندينج منصة مجتمعية بتصميم تحريري يضع المحتوى أولاً.' },
    description: { en: 'A community-focused landing page built with React, Vite, and Tailwind. Editorial, content-first sections with generous typography and a clean responsive layout.', ar: 'لاندينج موجّه للمجتمع مبني بـ React و Vite و Tailwind. أقسام تحريرية تضع المحتوى أولاً بتايبوغرافي مريح وتصميم متجاوب نظيف.' },
    type: 'landing', category: 'editorial', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://rajaeen-landing-page.vercel.app/', mirrors: ['https://rajaeen-landing.vercel.app/'] }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'shatat',
    name: { en: 'Shatat', ar: 'شتت' }, tagline: { en: 'Service-marketplace landing presenting categories and offerings.', ar: 'لاندينج سوق خدمات يعرض الفئات والعروض.' },
    description: { en: 'A landing page for a service marketplace, built with React, Vite, and Tailwind. Presents service categories and offerings in a responsive, sectioned layout.', ar: 'لاندينج لسوق خدمات، مبني بـ React و Vite و Tailwind. يعرض فئات الخدمات والعروض في تصميم متجاوب ومقسّم.' },
    type: 'landing', category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://shatat-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'sianko',
    name: { en: 'Sianko', ar: 'صيانكو' }, tagline: { en: 'Home-services marketplace landing built around service discovery.', ar: 'لاندينج سوق خدمات منزلية مبني حول اكتشاف الخدمات.' },
    description: { en: 'A landing page for a home-services marketplace, built with React, Vite, and Tailwind. Highlights service categories with a responsive layout geared toward discovery.', ar: 'لاندينج لسوق خدمات منزلية، مبني بـ React و Vite و Tailwind. يبرز فئات الخدمات بتصميم متجاوب موجّه نحو الاكتشاف.' },
    type: 'landing', category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://sianko-landing-seven.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'beyoo3',
    name: { en: 'Beyoo3', ar: 'بيوع' }, tagline: { en: 'Marketplace landing introducing the platform to new users.', ar: 'لاندينج سوق إلكتروني يقدّم المنصة للمستخدمين الجدد.' },
    description: { en: 'A marketplace landing page built with React, Vite, and Tailwind, introducing the platform through a responsive, sectioned marketing layout.', ar: 'لاندينج سوق إلكتروني مبني بـ React و Vite و Tailwind، يقدّم المنصة عبر تصميم تسويقي متجاوب ومقسّم.' },
    type: 'landing', category: 'marketplace', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://beyoo3-landing.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'easy-go',
    name: { en: 'Easy Go', ar: 'إيزي جو' }, tagline: { en: 'Travel & transport service landing with a responsive marketing layout.', ar: 'لاندينج خدمة سفر ونقل بتصميم تسويقي متجاوب.' },
    description: { en: 'A landing page for a travel/transport service, built with React, Vite, and Tailwind. Responsive sections that present the service and its key features.', ar: 'لاندينج لخدمة سفر/نقل، مبني بـ React و Vite و Tailwind. أقسام متجاوبة تعرض الخدمة ومميزاتها الأساسية.' },
    type: 'landing', category: 'editorial', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://easy-go-orcin.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'alef-lam-meem',
    name: { en: 'Alef Lam Meem', ar: 'ألف لام ميم' }, tagline: { en: 'Islamic-education platform landing with a calm, readable layout.', ar: 'لاندينج منصة تعليم إسلامي بتصميم هادئ وسهل القراءة.' },
    description: { en: 'A landing page for an Islamic educational platform, built with React, Vite, and Tailwind. Content-focused, readable sections with a fully responsive layout.', ar: 'لاندينج لمنصة تعليم إسلامي، مبني بـ React و Vite و Tailwind. أقسام تركّز على المحتوى وسهلة القراءة بتصميم متجاوب بالكامل.' },
    type: 'landing', category: 'education', tech: ['React', 'Vite', 'Tailwind'],
    links: { live: 'https://alef-lam-meem-landing-page.vercel.app/' }, featured: false, year: 2025, role: 'Solo Developer',
  },
  {
    slug: 'faya',
    name: { en: 'Faya', ar: 'فايا' }, tagline: { en: 'ERP-platform landing for Brmja Tech — i18n and responsive refinements.', ar: 'لاندينج منصة ERP لـ Brmja Tech — تحسينات i18n وتجاوب.' },
    description: { en: 'A landing page for the Faya ERP platform, built at Brmja Tech. I contributed internationalization with i18next and responsive layout updates across the marketing sections.', ar: 'لاندينج لمنصة Faya ERP، من شغل Brmja Tech. ساهمت في التعدّد اللغوي عبر i18next وتحديثات التجاوب عبر أقسام اللاندينج.' },
    type: 'landing', category: 'saas', tech: ['React', 'Vite', 'Tailwind', 'i18next'],
    links: { live: 'https://faya-landing.vercel.app/' }, featured: false, year: 2026, role: 'Team Developer',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const galleryProjects = projects.filter((p) => !p.featured)
