// 8 certifications across 6 institutions
// tier: 'major'      — diplomas / serious multi-month or multi-day programs
// tier: 'continuous' — shorter courses shown in a secondary "Continuous learning" section

export const certifications = [
  {
    id: 'eraasoft-frontend',
    title: { en: 'Front-End Development Diploma', ar: 'دبلوم تطوير الواجهات الأمامية' },
    issuer: 'Eraasoft Academy',
    date: 'May 2025',
    hours: '5 months',
    tier: 'major',
    file: '/certificates/eraasoft-frontend.pdf',
  },
  {
    id: 'route-flutter',
    title: { en: 'Flutter Development Diploma', ar: 'دبلوم Flutter' },
    issuer: 'Route IT Training Center',
    date: 'Nov 2023',
    hours: '5 months',
    tier: 'major',
    file: '/certificates/route-flutter.pdf',
  },
  {
    id: 'iti-embedded',
    title: { en: 'Embedded Systems', ar: 'الأنظمة المدمجة' },
    issuer: 'Information Technology Institute (ITI)',
    date: 'Sep 2022',
    hours: '156 hours',
    tier: 'major',
    file: '/certificates/iti-embedded.jpeg',
  },
  {
    id: 'zewail-ai',
    title: { en: 'Introduction to AI and Applications', ar: 'مقدمة الذكاء الاصطناعي وتطبيقاته' },
    issuer: 'Zewail City of Science and Technology',
    date: 'Aug 2023',
    hours: '50 hours',
    code: 'CPSM_2023_08_004179',
    tier: 'major',
    file: '/certificates/zewail-ai.jpeg',
  },
  {
    id: 'mahara-tech-html-css',
    title: { en: 'Learn HTML & CSS', ar: 'تعلّم HTML و CSS' },
    issuer: 'Mahara-Tech (ITI Platform)',
    date: 'Oct 2025',
    hours: '7h 42m',
    code: 'JHO3nMzqDR',
    tier: 'major',
    file: '/certificates/mahara-tech-html-css.pdf',
  },
  {
    id: 'yanfaa-power-bi',
    title: { en: 'The basics of Power BI', ar: 'أساسيات Power BI' },
    issuer: 'Yanfaa (يَنفع)',
    date: 'Oct 2025',
    hours: '1h 22m',
    tier: 'continuous',
    file: '/certificates/yanfaa-power-bi.pdf',
  },
  {
    id: 'mahara-tech-cybersecurity',
    title: { en: 'Cybersecurity For All', ar: 'الأمن السيبراني للجميع' },
    issuer: 'Mahara-Tech (ITI Platform)',
    date: 'Oct 2025',
    hours: '37 min',
    code: 'XFXxcuHgtU',
    tier: 'continuous',
    file: '/certificates/mahara-tech-cybersecurity.pdf',
  },
  {
    id: 'yanfaa-html',
    title: { en: 'HTML', ar: 'HTML' },
    issuer: 'Yanfaa (يَنفع)',
    date: 'Oct 2025',
    hours: '1h 26m',
    tier: 'continuous',
    file: '/certificates/yanfaa-html.pdf',
  },
]

export const majorCertifications = certifications.filter((c) => c.tier === 'major')
export const continuousCertifications = certifications.filter((c) => c.tier === 'continuous')
