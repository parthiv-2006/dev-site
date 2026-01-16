import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { about } from '../content/data';

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A calm approach to building"
      className="reveal reveal--delay"
    >
      <div className="section__grid section__grid--two">
        <div className="card card--soft" style={{ position: 'relative' }}>
          {about.profilePicture && !imageError && (
            <div
              style={{
                marginBottom: '24px',
                position: 'relative',
                width: '200px',
                height: '200px',
                margin: '0 auto 24px auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--glass-border)',
                background: 'var(--glass-light)',
              }}
            >
              {!imageLoaded && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--glass-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  <span>Loading...</span>
                </div>
              )}
              <img
                src={about.profilePicture}
                alt="Parthiv Paul"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
                loading="lazy"
              />
            </div>
          )}
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
