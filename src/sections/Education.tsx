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
                    <div key={index} className="card">
                        <div className="card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                            <h3 className="card__title" style={{ fontSize: '1.4rem' }}>{edu.school}</h3>
                            <span className="card__meta" style={{ color: 'var(--accent-copper)' }}>{edu.year}</span>
                        </div>
                        <p className="card__meta" style={{ fontSize: '1.1rem', marginTop: '4px', color: 'var(--text-primary)' }}>{edu.degree}</p>

                        {edu.coursework && (
                            <div style={{ marginTop: '16px' }}>
                                <p className="card__meta" style={{ marginBottom: '8px' }}>Relevant Coursework</p>
                                <div className="tags">
                                    {edu.coursework.map((course) => (
                                        <span key={course} className="tag tag--light">{course}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {edu.activities && (
                            <div style={{ marginTop: '16px' }}>
                                <p className="card__meta">Activities: {edu.activities.join(', ')}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Education;
