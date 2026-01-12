import { motion } from 'framer-motion';
import { skills } from '../content/data';

function Skills() {
    const allSkills = skills.flatMap(s => s.items);

    return (
        <section id="skills" className="section" style={{ overflow: 'hidden', padding: '100px 0' }}>
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

            <div style={{ marginTop: '60px', maxWidth: '1000px', margin: '60px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', padding: '0 20px' }}>
                {skills.map(group => (
                    <div key={group.category} style={{ padding: '24px', border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'var(--glass-light)' }}>
                        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '16px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {group.items.map(item => (
                                <span key={item} style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
