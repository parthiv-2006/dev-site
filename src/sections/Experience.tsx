import { motion } from 'framer-motion';
import Section from '../components/Section';
import { experience } from '../content/data';

const typeLabels: Record<string, string> = {
  internship: 'Internship',
  'part-time': 'Part-Time',
  research: 'Research',
  volunteer: 'Volunteer',
  leadership: 'Leadership',
  other: 'Other',
};

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work & Experience"
      title="Professional Journey"
      className="reveal"
    >
      <div className="section__grid">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card card--soft"
            style={{
              padding: '32px',
              borderBottom: index < experience.length - 1 ? '1px solid var(--glass-border)' : 'none',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: 'var(--glass-light)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {typeLabels[exp.type] || exp.type}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}
                      className="nav__link"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: '500' }}>
                      {exp.company}
                    </p>
                  )}
                  <span style={{ color: 'var(--text-tertiary)' }}>·</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{exp.location}</span>
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    margin: 0,
                  }}
                >
                  {exp.startDate} — {exp.endDate}
                </p>
              </div>
            </div>

            <ul style={{ margin: '16px 0', paddingLeft: '20px', listStyle: 'none' }}>
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: '8px',
                    paddingLeft: '16px',
                    position: 'relative',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                    }}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            {exp.tech && exp.tech.length > 0 && (
              <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      background: 'var(--glass-light)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
