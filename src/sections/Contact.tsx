import ActionButton from '../components/ActionButton';
import Section from '../components/Section';
import { contact } from '../content/data';

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk shop">
      <div className="section__grid">
        <p>{contact.note}</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <ActionButton href={`mailto:${contact.email}`} label="Email" />
          {contact.socials.map((item) => (
            <ActionButton
              key={item.label}
              href={item.url}
              label={item.label}
              tone="ghost"
              external
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
