export type Project = {
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  link?: string;
  imageUrl?: string;
  videoUrl?: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export const hero = {
  badge: 'Engineer + Story-first builder',
  title: 'Building lean, clear experiences for the web.',
  lede:
    'Full-stack leaning frontend engineer crafting interfaces that stay memorable without drowning out the substance. I blend fast iterations with thoughtful systems to ship work that feels intentional.',
  stats: [
    { label: 'Shipped launches', value: '24', note: 'From greenfield to refactors' },
    { label: 'Latency wins', value: '-38%', note: 'Average perf uplift on key pages' },
  ],
};

export const about = {
  story:
    'I enjoy translating ambiguous ideas into confident interfaces. My work pairs calm aesthetics with crisp copy, so teams and users can orient quickly.',
  highlights: [
    'Design/dev bridge: comfortable in Figma, opinionated in React.',
    'Systems thinker: tokens, patterns, and guardrails to scale calmly.',
    'Delivery focused: bias for shipping small, learning fast, and polishing after.',
  ],
};

export const projects: Project[] = [
  {
    title: 'Signalboard',
    summary: 'Realtime ops console that surfaces incidents before they spike.',
    impact: 'Cut mean-time-to-detect by 19% via clearer alert groupings and fast drilldowns.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Vite'],
    link: '#',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3ESignalboard Demo%3C/text%3E%3C/svg%3E',
    videoUrl: undefined,
  },
  {
    title: 'Atlas Docs',
    summary: 'Docs revamp with guided discovery and runnable snippets.',
    impact: 'Increased task completion by 27% for new developers in usability studies.',
    tech: ['MDX', 'Next.js', 'Search'],
    link: '#',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%2306b6d4" text-anchor="middle" dominant-baseline="middle"%3EAtlas Docs Demo%3C/text%3E%3C/svg%3E',
    videoUrl: undefined,
  },
  {
    title: 'Cirrus Design Kit',
    summary: 'Composable design system with guardrails for product teams.',
    impact: 'Reduced net-new component requests by 42% and improved UI consistency.',
    tech: ['Tokens', 'Storybook', 'Theming'],
    link: '#',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231a2332" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23f59e0b" text-anchor="middle" dominant-baseline="middle"%3ECircus Design Kit Demo%3C/text%3E%3C/svg%3E',
    videoUrl: undefined,
  },
  
];

export const process: ProcessStep[] = [
  {
    title: 'Frame the win',
    detail: 'Clarify constraints, success signals, and the shortest path to learning.',
  },
  {
    title: 'Design the spine',
    detail: 'Build the minimum durable skeleton: nav, spacing, and data shapes.',
  },
  {
    title: 'Ship, measure, refine',
    detail: 'Release small, validate with data and demos, iterate with polish.',
  },
];

export const contact = {
  note: 'Curious about collaborating, refactoring a product surface, or exploring a new role? I love talking shop about fast UI and calm design systems.',
  email: 'you@example.com',
  socials: [
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: '#' },
    { label: 'Dribbble', url: '#' },
  ],
};
