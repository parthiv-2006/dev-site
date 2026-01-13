import { useState } from 'react';
import { IconType } from 'react-icons';
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiFramer,
    SiGit,
    SiDocker,
    SiPostgresql,
    SiFigma,
    SiVercel,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { getSkillColor } from '../content/skillColors';

// Icon lookup map
const skillIcons: Record<string, IconType> = {
    'TypeScript': SiTypescript,
    'makeTypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'Java': FaJava,
    'SQL': FaDatabase,
    'HTML/CSS': FaCode,
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'Tailwind': SiTailwindcss,
    'Framer Motion': SiFramer,
    'Git': SiGit,
    'Docker': SiDocker,
    'PostgreSQL': SiPostgresql,
    'Figma': SiFigma,
    'Vercel': SiVercel,
    'VS Code': VscCode,
};

type SkillChipProps = {
    skill: string;
};

export default function SkillChip({ skill }: SkillChipProps) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skillIcons[skill];
    const brandColor = getSkillColor(skill);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: isHovered
                    ? `color-mix(in srgb, ${brandColor} 15%, rgba(255,255,255,0.05))`
                    : 'rgba(255,255,255,0.05)',
                border: isHovered
                    ? `1px solid color-mix(in srgb, ${brandColor} 50%, transparent)`
                    : '1px solid transparent',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                cursor: 'default',
            }}
        >
            {Icon && (
                <Icon
                    size={16}
                    style={{
                        color: isHovered ? brandColor : 'var(--text-tertiary)',
                        transition: 'color 0.2s ease',
                    }}
                />
            )}
            <span style={{ color: isHovered ? 'var(--text-primary)' : 'inherit' }}>
                {skill}
            </span>
        </span>
    );
}
