import Section from '../components/Section';
import ProcessDiagram from '../components/ProcessDiagram';
import { process } from '../content/data';

function Process() {
  return (
    <Section
      id="process"
      eyebrow="How I work"
      title="Intentional, fast, iterative"
      description="A simple flow to keep momentum without losing clarity."
      className="reveal reveal--delay"
    >
      <ProcessDiagram steps={process} />
    </Section>
  );
}

export default Process;
