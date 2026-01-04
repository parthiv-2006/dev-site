import { ReactNode } from 'react';

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
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
