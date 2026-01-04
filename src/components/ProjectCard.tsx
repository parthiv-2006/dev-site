import { useRef, useState } from 'react';

type ProjectCardProps = {
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  link?: string;
  imageUrl?: string;
  videoUrl?: string;
};

function ProjectCard({ title, summary, impact, tech, link, imageUrl, videoUrl }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      className={`project-card ${isHovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      } as React.CSSProperties & { '--mouse-x': string; '--mouse-y': string }}
    >
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <div className="project-card__meta">{summary}</div>
        </div>

        <p className="project-card__impact">{impact}</p>

        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t} className="project-card__tech-tag">
              {t}
            </span>
          ))}
        </div>

        {link && (
          <a href={link} className="project-card__link">
            View details →
          </a>
        )}
      </div>

      {(imageUrl || videoUrl) && (
        <div className="project-card__media">
          {isHovered && videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              className="project-card__video"
              aria-label={`${title} demo video`}
            />
          ) : (
            <img
              src={imageUrl || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3C/svg%3E'}
              alt={title}
              className="project-card__image"
            />
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
