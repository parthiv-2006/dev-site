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
  badge: 'CS Student + Full-stack Dev',
  title: 'Crafting software with purpose and precision.',
  lede:
    'Second-year Computer Science student passionate about building scalable web applications. I combine academic foundations with hands-on development to solve real-world problems.',
  stats: [
    { label: 'GPA', value: '3.9', note: 'Cumulative' }, // Placeholder
    { label: 'Projects', value: '12+', note: 'Completed' },
  ],
};

export const about = {
  story:
    'I believe the best software is built at the intersection of robust engineering and intuitive design. As a student, I am constantly learning and applying new technologies to build tools that matter.',
  highlights: [
    'Full-stack ready: Comfortably traversing the stack from DB to UI.',
    'Quick learner: Adapting to new frameworks and languages rapidly.',
    'Detail-oriented: Writing clean, maintainable, and documented code.',
    'Collaborative: Experienced in agile workflows and team projects.',
  ],
};

export const education: Education[] = [
  {
    school: 'University of Technology', // Placeholder
    degree: 'B.Sc. Computer Science',
    year: 'Expected 2027',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Web Development',
      'Linear Algebra',
    ],
    activities: ['CS Club Member', 'Hackathon Participant'],
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['makeTypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libs',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind', 'Framer Motion'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'PostgreSQL', 'Figma', 'Vercel', 'VS Code'],
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
  note: 'Currently seeking software engineering internships for Summer 2025. I love talking about full-stack development and solving complex problems.',
  email: 'parthiv@example.com',
  socials: [
    { label: 'LinkedIn', url: '#' },
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
