import { motion } from 'framer-motion';
import { skills } from '../content/data';
import SkillChip from '../components/SkillChip';
import GitHubContributions from '../components/GitHubContributions';

function Skills() {
    const allSkills = skills.flatMap(s => s.items);

    return (
        <section id="skills" className="section section--full-width">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 className="section__title" style={{ fontSize: '2rem' }}>Technical Arsenal</h2>
            </div>

            <div style={{ position: 'relative', display: 'flex', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <motion.div
                    style={{ display: 'flex', gap: '40px', padding: '0 20px', whiteSpace: 'nowrap' }}
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((item, i) => (
                        <span key={`${item}-${i}`} style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-secondary)', opacity: 0.5 }}>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="skills__grid">
                {skills.map(group => (
                    <div
                        key={group.category}
                        className="card card--interactive"
                        style={{ padding: '24px' }}
                    >
                        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '16px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {group.items.map(item => (
                                <SkillChip key={item} skill={item} />
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* GitHub Contributions Widget */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <GitHubContributions />
                </div>
            </div>
        </section>
    );
}

export default Skills;

