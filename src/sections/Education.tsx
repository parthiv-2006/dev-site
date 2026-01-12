import Section from '../components/Section';
import { education } from '../content/data';

function Education() {
    return (
        <Section
            id="education"
            eyebrow="Academic Background"
            title="Education"
            className="reveal"
        >
            <div className="section__grid">
                {education.map((edu, index) => (
                    <div key={index} style={{
                        padding: '24px 0',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '16px'
                    }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: '600' }}>{edu.school}</h3>
                            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{edu.year}</span>
                        </div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{edu.degree}</p>

                        {edu.coursework && (
                            <div style={{ marginTop: '8px' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Relevant Coursework</p>
                                <div className="tags">
                                    {edu.coursework.map((course) => (
                                        <span key={course} className="tag" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {edu.activities && (
                            <div style={{ marginTop: '8px' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Activities</p>
                                <p style={{ color: 'var(--text-secondary)' }}>{edu.activities.join(' • ')}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Education;
