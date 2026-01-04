import { ReactNode } from 'react';

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const sectionClass = className ? `section ${className}` : 'section';
  return (
    <section id={id} className={sectionClass}>
      <div>
        {eyebrow ? <div className="section__eyebrow">{eyebrow}</div> : null}
        <h2 className="section__title">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default Section;
