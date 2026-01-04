import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
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
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
            impact={project.impact}
            tech={project.tech}
            link={project.link}
            imageUrl={project.imageUrl}
            videoUrl={project.videoUrl}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
