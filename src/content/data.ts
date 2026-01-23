export type Project = {
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  link?: string;
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
};

export type Education = {
  school: string;
  degree: string;
  year: string;
  coursework?: string[];
  activities?: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  type: 'internship' | 'part-time' | 'research' | 'volunteer' | 'leadership' | 'other';
  description: string[];
  tech?: string[];
  companyUrl?: string;
};

export type Achievement = {
  title: string;
  category: 'award' | 'certification' | 'hackathon' | 'honor' | 'publication' | 'other';
  date: string;
  issuer?: string;
  description: string;
  link?: string;
  icon?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type NowActivity = {
  github?: {
    repo: string;
    message: string;
    timestamp: string;
  };
  quote?: {
    text: string;
    author?: string;
  };
  location: {
    city: string;
    timezone: string;
    time: string;
  };
};

export const now = {
  github: {
    enabled: true,
    username: 'parthiv-2006',
  },
  quote: {
    enabled: true,
  },
  location: {
    city: 'Toronto',
    timezone: 'America/Toronto',
  },
};

export const hero = {
  badge: 'CS Co-op Student + Full-stack Dev',
  title: 'Building thoughtful software with measurable impact.',
  lede:
    'Computer Science student at the University of Toronto (St. George) focused on AI automation, data-driven systems, and responsive web experiences.',
  stats: [
    { label: 'CGPA', value: '3.70', note: 'Current' },
    { label: 'Roles', value: '4', note: 'Industry + Org' },
  ],
};

export const about = {
  story:
    'I build products at the intersection of intelligent automation and user-centered design, focusing on systems that reduce friction and improve decision quality.',
  highlights: [
    'AI automation: Built NLP + CV pipelines and RAG systems for document workflows.',
    'Data-driven: Developed LSTM forecasting and financial analytics tooling.',
    'Quality-minded: Led QA efforts to catch critical defects and UX issues.',
    'Frontend craft: Shipped responsive React experiences with accessibility in mind.',
  ],
  profilePicture: '/profile-picture.jpg', // Add your profile picture to public folder
};

export const education: Education[] = [
  {
    school: 'University of Toronto St. George',
    degree: 'Bachelor of Computer Science, Co-op Program (CGPA: 3.70/4.00)',
    year: 'Sept 2024 – Apr 2028',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS'],
  },
  {
    category: 'Frameworks & Libs',
    items: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'TensorFlow', 'Pandas'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'VS Code', 'Maven', 'Postman', 'Linux', 'REST', 'Agile', 'CI/CD', 'WCAG'],
  },
];

export const projects: Project[] = [
  {
    title: 'Signalboard',
    summary: 'Realtime ops console that surfaces incidents before they spike.',
    impact: 'Cut mean-time-to-detect by 19% via clearer alert groupings and fast drilldowns.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Vite'],
    link: '#',
    repoUrl: 'https://github.com/parthiv-2006',
    demoUrl: '#',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3ESignalboard%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Atlas Docs',
    summary: 'Docs revamp with guided discovery and runnable snippets.',
    impact: 'Increased task completion by 27% for new developers in usability studies.',
    tech: ['MDX', 'Next.js', 'Search'],
    link: '#',
    repoUrl: 'https://github.com/parthiv-2006',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%2306b6d4" text-anchor="middle" dominant-baseline="middle"%3EAtlas Docs%3C/text%3E%3C/svg%3E',
  },
  {
    title: 'Cirrus Design Kit',
    summary: 'Composable design system with guardrails for product teams.',
    impact: 'Reduced net-new component requests by 42% and improved UI consistency.',
    tech: ['Tokens', 'Storybook', 'Theming'],
    link: '#',
    repoUrl: 'https://github.com/parthiv-2006',
    demoUrl: '#',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23f59e0b" text-anchor="middle" dominant-baseline="middle"%3ECirrus Kit%3C/text%3E%3C/svg%3E',
  },
];

export const contact = {
  note: 'Currently open to software engineering and AI automation opportunities. Happy to connect about full-stack systems, data-driven products, and UX.',
  email: 'parthiv.paul@mail.utoronto.ca',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/parthiv-paul' },
    { label: 'GitHub', url: 'https://github.com/parthiv-2006' },
  ],
};

// Simple quote bank for Quote of the Day
export const quotes = [
  { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'The only way to go fast, is to go well.', author: 'Robert C. Martin' },
  { text: 'Ship early, learn fast.', author: 'Unknown' },
];

export const experience: Experience[] = [
  {
    company: 'Outamation',
    role: 'AI and Automation Extern',
    location: 'Remote',
    startDate: '2025-05',
    endDate: '2025-08',
    type: 'internship',
    description: [
      'Engineered AI-powered workflows for high-volume document classification using NLP and Computer Vision pipelines (PyMuPDF, OCR), significantly reducing manual data entry time.',
      'Optimized a Retrieval-Augmented Generation (RAG) system with LlamaIndex, increasing document query accuracy by 25% against internal benchmarks.',
    ],
    tech: ['Python', 'NLP', 'Computer Vision', 'PyMuPDF', 'OCR', 'LlamaIndex'],
  },
  {
    company: 'Vertige Investment Group',
    role: 'Quantitative Analyst (Student Organization)',
    location: 'Toronto, ON',
    startDate: '2024-09',
    endDate: '2025-01',
    type: 'part-time',
    description: [
      'Architected a stock forecasting model using TensorFlow (LSTM networks) for time-series data, achieving 80% prediction accuracy on historical validation sets.',
      'Conducted quantitative analysis of financial statements and market volatility indicators to automate data-driven investment reporting.',
    ],
    tech: ['Python', 'TensorFlow', 'LSTM', 'Time Series'],
  },
  {
    company: 'Chester-Hill Solutions',
    role: 'Software QA Tester',
    location: 'Remote',
    startDate: '2024-06',
    endDate: '2024-11',
    type: 'part-time',
    description: [
      'Executed comprehensive manual and automated testing suites, identifying and documenting 50+ critical software defects and UX inconsistencies.',
      'Partnered with engineering to debug API endpoints and UI components, reducing post-release hotfixes by 15%.',
    ],
    tech: ['QA', 'Testing', 'APIs', 'UI'],
  },
  {
    company: 'Ontario Liberal Party',
    role: 'Frontend Developer',
    location: 'Toronto, ON',
    startDate: '2023-05',
    endDate: '2023-09',
    type: 'part-time',
    description: [
      'Developed and maintained responsive frontend interfaces serving 1,000+ monthly users using React and Redux to ensure dynamic and accessible experiences.',
      'Overhauled mobile responsiveness with Sass and WCAG-aligned accessibility improvements, increasing mobile engagement metrics by 30%.',
    ],
    tech: ['React', 'Redux', 'Sass', 'WCAG'],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'J.S. Mclean Scholarship (UofT)',
    category: 'award',
    date: '2023-01',
    issuer: 'University of Toronto',
    description: 'Awarded for academic excellence and leadership potential.',
  },
  {
    title: '2nd Place — National Waterloo SAF Financial Literacy Competition',
    category: 'award',
    date: '2023-01',
    issuer: 'Waterloo SAF',
    description: 'Recognized nationally for financial analysis and investment strategy.',
  },
];
