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
        className="projects__header"
      >
        <span className="section__eyebrow">Selected Work</span>
        <h2 className="section__title projects__title">Featured Projects</h2>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="projects__filters"
      >
        {/* Search Input */}
        <div className="projects__search">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="projects__search-input"
          />
          <span
            className="projects__search-icon"
            aria-hidden
          >
            🔍
          </span>
        </div>

        {/* Tech Filter Buttons */}
        <div className="projects__filter-buttons">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTechFilter(tech)}
              className={`projects__filter-button${selectedTech === tech ? ' projects__filter-button--active' : ''}`}
            >
              {tech}
            </button>
          ))}
          {selectedTech && (
            <button
              onClick={() => setSelectedTech(null)}
              className="projects__filter-clear"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Results count */}
        <div className="projects__results">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </motion.div>

      <div className="projects__container">
        {filteredProjects.length === 0 ? (
          <div className="projects__empty">
            <p className="projects__empty-title">No projects found</p>
            <p className="projects__empty-sub">
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
              className={`project__row ${isEven ? 'project__row--even' : 'project__row--odd'}`}
            >
              <div className="project__image-wrapper">
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="project__media-link"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-img-hover project__media-image"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
              <div className={`project__content ${isEven ? 'project__content--left' : 'project__content--right'}`}>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__summary">
                  {project.summary}
                </p>
                <div className={`project__tech ${isEven ? 'project__tech--left' : 'project__tech--right'}`}>
                  {project.tech.map(t => (
                    <span key={t} className="project__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className={`project__actions ${isEven ? 'project__actions--left' : 'project__actions--right'}`}>
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
