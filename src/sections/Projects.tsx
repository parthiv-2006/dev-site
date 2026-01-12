import { motion } from 'framer-motion';
import Button from '../components/ActionButton'; // Reusing ActionButton as Button
import { projects } from '../content/data';

function Projects() {
  return (
    <section id="projects" className="section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <span className="section__eyebrow">Selected Work</span>
        <h2 className="section__title" style={{ fontSize: '3rem', margin: '16px 0 0' }}>Featured Projects</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'wrap' // For mobile responsiveness
              }}
            >
              <div style={{ flex: 1, minWidth: '300px' }}>
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-medium)'
                  }}
                >
                  <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }} className="project-img-hover" />
                </a>
              </div>
              <div style={{ flex: 1, minWidth: '300px', textAlign: isEven ? 'left' : 'right' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                  {project.summary}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: isEven ? 'flex-start' : 'flex-end', marginBottom: '24px' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: 'var(--glass-light)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
                  {project.repoUrl && <Button href={project.repoUrl} label="Code" tone="ghost" external />}
                  {project.demoUrl && <Button href={project.demoUrl} label="Live Demo" external />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
