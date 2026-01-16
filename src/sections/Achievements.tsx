import { motion } from 'framer-motion';
import Section from '../components/Section';
import { achievements } from '../content/data';
import ActionButton from '../components/ActionButton';

const categoryLabels: Record<string, string> = {
  award: 'Award',
  certification: 'Certification',
  hackathon: 'Hackathon',
  honor: 'Honor',
  publication: 'Publication',
  other: 'Other',
};

const categoryColors: Record<string, string> = {
  award: 'var(--accent-amber)',
  certification: 'var(--accent-cyan)',
  hackathon: 'var(--accent-purple)',
  honor: 'var(--accent-green)',
  publication: 'var(--accent-blue)',
  other: 'var(--text-secondary)',
};

function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Accomplishments"
      title="Awards & Recognition"
      className="reveal"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={`${achievement.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card card--interactive"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>
                    {achievement.title}
                  </h3>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '10px',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: `color-mix(in srgb, ${categoryColors[achievement.category]} 20%, transparent)`,
                      border: `1px solid ${categoryColors[achievement.category]}`,
                      color: categoryColors[achievement.category],
                    }}
                  >
                    {categoryLabels[achievement.category] || achievement.category}
                  </span>
                </div>
                {achievement.issuer && (
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '0 0 8px 0' }}>
                    {achievement.issuer}
                  </p>
                )}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    margin: 0,
                  }}
                >
                  {achievement.date}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              {achievement.description}
            </p>

            {achievement.link && (
              <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                <ActionButton href={achievement.link} label="View Details" tone="ghost" external />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Achievements;
