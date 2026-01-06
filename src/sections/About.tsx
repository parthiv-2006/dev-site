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
          <p className="about__story">{about.story}</p>
        </div>
        <ul className="list about__highlights">
          {about.highlights.map((item) => {
            const [lead, ...rest] = item.split(':');
            const tail = rest.join(':');
            return (
              <li key={item} className="list__item">
                <span className="list__bullet" aria-hidden />
                <p>
                  <span className="text-highlight">{lead.trim()}</span>
                  {tail ? <span className="text-muted">: {tail.trim()}</span> : null}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default About;
