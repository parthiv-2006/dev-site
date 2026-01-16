import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ActionButton'; // Reusing ActionButton as Button
import { projects } from '../content/data';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get all unique technologies from projects
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search and tech filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.impact.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech = selectedTech === null || project.tech.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  const handleTechFilter = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  return (
    <section id="projects" className="section section--full-width">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '40px', textAlign: 'center' }}
      >
        <span className="section__eyebrow">Selected Work</span>
        <h2 className="section__title" style={{ fontSize: '3rem', margin: '16px 0 0' }}>Featured Projects</h2>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto 40px auto',
        }}
      >
        {/* Search Input */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 40px',
              fontSize: '1rem',
              background: 'var(--glass-light)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.2rem',
              color: 'var(--text-tertiary)',
            }}
            aria-hidden
          >
            🔍
          </span>
        </div>

        {/* Tech Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTechFilter(tech)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                background: selectedTech === tech ? 'var(--accent-cyan)' : 'var(--glass-light)',
                border: `1px solid ${selectedTech === tech ? 'var(--accent-cyan)' : 'var(--glass-border)'}`,
                color: selectedTech === tech ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontWeight: selectedTech === tech ? '600' : '400',
              }}
              className={selectedTech === tech ? '' : 'button'}
            >
              {tech}
            </button>
          ))}
          {selectedTech && (
            <button
              onClick={() => setSelectedTech(null)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                background: 'transparent',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Results count */}
        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </motion.div>

      <div className="projects__container">
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No projects found</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="project__row"
              style={{
                flexDirection: isEven ? 'row' : 'row-reverse',
              }}
            >
              <div className="project__image-wrapper">
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
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                    className="project-img-hover"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
              <div className="project__content" style={{ textAlign: isEven ? 'left' : 'right' }}>
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
          })
        )}
      </div>
    </section>
  );
}

export default Projects;
