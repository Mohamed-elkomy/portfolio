export const profile = {
  name: { en: 'Mohamed Magdy Elkomy', ar: 'محمد مجدي محمد الكومي' },
  shortName: { en: 'Mohamed Elkomy', ar: 'محمد الكومي' },
  nickname: 'Mo',
  handle: 'mo.komy',
  initials: 'MK',
  role: { en: 'Front-End Developer', ar: 'مطوّر واجهات أمامية' },
  location: 'Cairo, Egypt',
  timezone: 'UTC+2',
  available: true,
}

export const contact = {
  email: 'mohamedmagdyelkomy53@gmail.com',
  phone: '+201272782474',
  phoneDisplay: '+20 127 278 2474',
}

export const social = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'Mohamed-elkomy',
    url: 'https://github.com/Mohamed-elkomy',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'mohamed-magdy-elkomy',
    url: 'https://www.linkedin.com/in/mohamed-magdy-elkomy/',
    icon: 'Linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'mohamedmagdyelkomy53@gmail.com',
    url: 'mailto:mohamedmagdyelkomy53@gmail.com',
    icon: 'Mail',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+20 127 278 2474',
    url: 'https://wa.me/201272782474',
    icon: 'MessageCircle',
  },
]

// GitHub stats — falls back to these if API fails
export const githubStats = {
  publicRepos: 97,
  contributionsLastYear: 370,
  totalStars: 0,
  followers: 1,
  url: 'https://github.com/Mohamed-elkomy',
}

// Aggregate stats for the StatsBar section
export const aggregateStats = [
  { id: 'projects', label: 'projects shipped', value: 25, suffix: '+' },
  { id: 'repos', label: 'public repos', value: 97 },
  { id: 'contributions', label: 'contributions / year', value: 370 },
  { id: 'certificates', label: 'certifications', value: 8 },
]
