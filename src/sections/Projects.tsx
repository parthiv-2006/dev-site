import Section from '../components/Section';
import Tag from '../components/Tag';
import { projects } from '../content/data';

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects with crisp outcomes"
      description="Each project pairs a short narrative with measurable impact so recruiters can see the through-line."
      className="reveal"
    >
      <div className="section__grid section__grid--two">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="card__title">{project.title}</div>
            <div className="card__meta">{project.summary}</div>
            <p style={{ marginTop: 12 }}>{project.impact}</p>
            <div className="tags">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                className="nav__link"
                style={{ display: 'inline-flex', marginTop: 12 }}
              >
                View details →
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
