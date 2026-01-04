import Section from '../components/Section';
import { about } from '../content/data';

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A calm approach to building"
      className="reveal reveal--delay"
    >
      <div className="section__grid section__grid--two">
        <div className="card card--soft">
          <p>{about.story}</p>
        </div>
        <ul className="list">
          {about.highlights.map((item) => (
            <li key={item} className="list__item">
              <span className="list__bullet" aria-hidden />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default About;
