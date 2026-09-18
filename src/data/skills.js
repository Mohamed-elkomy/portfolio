// Skills — grouped into "core competencies" (deep) and "tools & platforms" (working knowledge)
// Levels are kept honest: Expert = daily production use, Advanced = shipped in production,
// Working knowledge = used in projects / actively deepening.

export const coreSkills = [
  { name: 'React.js 19', level: 'Expert', years: 2 },
  { name: 'JavaScript (ES2022+)', level: 'Expert', years: 3 },
  { name: 'TypeScript', level: 'Working knowledge', years: 1 },
  { name: 'Next.js', level: 'Working knowledge', years: 1 },
  { name: 'Redux Toolkit', level: 'Advanced', years: 1 },
  { name: 'REST APIs / Axios', level: 'Advanced', years: 2 },
  { name: 'TanStack React Query', level: 'Advanced', years: 1 },
  { name: 'Zustand / Context API', level: 'Advanced', years: 1 },
  { name: 'React Router', level: 'Expert', years: 2 },
  { name: 'React Hook Form / Yup', level: 'Advanced', years: 1 },
  { name: 'HTML5 / Semantic HTML', level: 'Expert', years: 4 },
  { name: 'CSS3 / Responsive Design', level: 'Expert', years: 4 },
  { name: 'Tailwind CSS', level: 'Expert', years: 2 },
  { name: 'i18next / RTL-LTR', level: 'Expert', years: 1 },
  { name: 'Framer Motion', level: 'Advanced', years: 1 },
  { name: 'Vite', level: 'Expert', years: 2 },
  { name: 'shadcn/ui', level: 'Advanced', years: 1 },
  { name: 'Bootstrap 5', level: 'Advanced', years: 2 },
  { name: 'Web Performance & SEO', level: 'Advanced', years: 1 },
  { name: 'Software Engineering (SOLID, Clean Code)', level: 'Advanced', years: 1 },
  { name: 'Flutter / Dart', level: 'Intermediate', years: 1 },
]

// Things I'm actively learning right now — shown on the site only (not on the CV)
export const learning = [
  { name: 'Node.js', note: { en: 'Server-side JavaScript fundamentals', ar: 'أساسيات JavaScript على السيرفر' } },
  { name: 'Express.js', note: { en: 'Building REST APIs end to end', ar: 'بناء REST APIs من الأول للآخر' } },
  { name: 'Next.js (deeper)', note: { en: 'App Router, SSR/SSG, server components', ar: 'App Router و SSR/SSG و server components' } },
  { name: 'TypeScript (deeper)', note: { en: 'Typing React apps and API layers', ar: 'تايب React apps وطبقة الـ API' } },
]

export const tools = [
  'Git & GitHub',
  'VS Code',
  'Postman',
  'Chrome DevTools',
  'ESLint',
  'npm',
  'Figma',
  'Vercel',
  'Firebase',
  'Firestore',
  'Strapi',
  'MySQL',
  'WordPress',
  'Notion',
  'Photoshop',
  'Illustrator',
]

export const languages = [
  { name: 'Arabic', native: 'العربية', level: 'Native' },
  { name: 'English', native: 'English', level: 'Professional working proficiency' },
]

// Hobbies & interests — the person behind the code
export const interests = [
  { id: 'photography', icon: 'Camera', en: 'Photography', ar: 'التصوير' },
  { id: 'design', icon: 'Palette', en: 'UI & graphic design', ar: 'تصميم الواجهات والجرافيك' },
  { id: 'reading', icon: 'BookOpen', en: 'Reading', ar: 'القراءة' },
  { id: 'gaming', icon: 'Gamepad2', en: 'Gaming', ar: 'الألعاب' },
  { id: 'music', icon: 'Headphones', en: 'Music', ar: 'الموسيقى' },
  { id: 'security', icon: 'ShieldCheck', en: 'Networking & cybersecurity', ar: 'الشبكات والأمن السيبراني' },
]
