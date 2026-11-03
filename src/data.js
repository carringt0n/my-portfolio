export const profile = {
  name: 'Soroibe Chisom Carrington',
  shortName: 'Chisom',
  role: 'Website Developer',
  location: 'Lagos, Nigeria',
  email: 'csoroibe@gmail.com',
  github: 'https://github.com/carringt0n',
  linkedin: 'https://www.linkedin.com/in/chisom-carrington-4a3492350/',
  twitter: 'https://x.com/whoiscarrington',
  cvUrl: '/My_CV.pdf',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 'Advanced', pct: 90 },
      { name: 'TypeScript', level: 'Intermediate', pct: 70 },
      { name: 'HTML & CSS', level: 'Advanced', pct: 90 },
      { name: 'PHP', level: 'Intermediate', pct: 70 },
      { name: 'SQL', level: 'Intermediate', pct: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Advanced', pct: 90 },
      { name: 'React Native', level: 'Intermediate', pct: 70 },
      { name: 'Expo', level: 'Intermediate', pct: 70 },
      { name: 'Node.js', level: 'Intermediate', pct: 70 },
      { name: 'Express', level: 'Intermediate', pct: 70 },
      { name: 'Tailwind CSS', level: 'Advanced', pct: 90 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', pct: 90 },
      { name: 'Vite', level: 'Advanced', pct: 90 },
      { name: 'Render', level: 'Intermediate', pct: 70 },
      { name: 'REST APIs', level: 'Advanced', pct: 90 },
      { name: 'VS Code', level: 'Advanced', pct: 90 },
      { name: 'Figma', level: 'Intermediate', pct: 70 },
    ],
  },
]

export const projects = [
  {
    title: 'FORMA — Furniture E-Commerce',
    description:
      'A full-stack furniture store with Google sign-in, a persistent cart, and checkout. Deployed on Render with a Node.js and Express backend.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    tags: ['Node.js', 'Express', 'JavaScript', 'OAuth', 'Render'],
    liveUrl: 'https://hng-shop-website-o4qt.onrender.com',
    repoUrl: 'https://github.com/carringt0n/hng-shop-website',
  },
  {
    title: 'FORMA Mobile App',
    description:
      'Cross-platform mobile version of the FORMA store, built with Expo.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'Expo', 'TypeScript', 'Deep Linking'],
    liveUrl: null,
    repoUrl: 'https://github.com/carringt0n/hng-shop-website',
  },
  {
    title: 'Lagos Survey Points Map Viewer',
    description:
      'An interactive map of sample survey points across Lagos — filter by point type, search by name or area, view point details, and add your own points, saved in the browser. Built to bridge surveying knowledge with web development. Sample data only, not real survey records.',
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Leaflet', 'Tailwind CSS', 'Vite'],
    liveUrl: null,
    repoUrl: 'https://github.com/carringt0n/lagos-survey-map-viewer',
  },
  {
    title: 'Job Application Tracker',
    description:
      'Track job applications through Applied, Interview, Offer, and Rejected stages, with search, sorting, stats, and follow-up dates with overdue highlights. Data saves in the browser only.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: null,
    repoUrl: 'https://github.com/carringt0n/job-application-tracker',
  },
]

export const experience = [
  {
    role: 'Independent Website Developer',
    company: 'Self-directed projects',
    period: '2025 — Present',
    points: [
      'Designed, built, and deployed FORMA, a full-stack furniture e-commerce site with Google OAuth sign-in.',
      'Converted the FORMA website into a cross-platform Expo mobile app.',
      'Debugged production OAuth and API issues end to end, from server configuration to mobile deep links.',
    ],
  },
]
