// Brand colors for technology skills
// Used for hover tint effects on skill chips

export const skillBrandColors: Record<string, string> = {
    // Languages
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'Java': '#ED8B00',
    'SQL': '#4479A1',
    'HTML/CSS': '#E34F26',
    'makeTypeScript': '#3178C6',

    // Frameworks & Libraries
    'React': '#61DAFB',
    'Next.js': '#FFFFFF',
    'Node.js': '#339933',
    'Express': '#FFFFFF',
    'Tailwind': '#06B6D4',
    'Framer Motion': '#BB4B96',

    // Tools & DevOps
    'Git': '#F05032',
    'Docker': '#2496ED',
    'PostgreSQL': '#4169E1',
    'Figma': '#F24E1E',
    'Vercel': '#FFFFFF',
    'VS Code': '#007ACC',
};

// Get brand color with fallback
export function getSkillColor(skill: string): string {
    return skillBrandColors[skill] || '#67e8f9';
}
