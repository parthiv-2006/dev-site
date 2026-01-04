import Section from '../components/Section';
import { process } from '../content/data';

function Process() {
  return (
    <Section
      id="process"
      eyebrow="How I work"
      title="Intentional, fast, iterative"
      description="A simple flow to keep momentum without losing clarity."
    >
      <div className="section__grid section__grid--two">
        {process.map((step) => (
          <article key={step.title} className="card card--soft">
            <div className="card__title" style={{ color: 'var(--text)' }}>
              {step.title}
            </div>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Process;
