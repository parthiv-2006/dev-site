import { motion } from 'framer-motion';
import ActionButton from '../components/ActionButton';
import CopyEmailButton from '../components/CopyEmailButton';
import Section from '../components/Section';
import { contact } from '../content/data';
import useContactForm from '../hooks/useContactForm';

function Contact() {
  const { formData, loading, success, error, updateField, handleSubmit } = useContactForm();

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk shop" className="reveal">
      <div className="section__grid section__grid--two">
        <div className="card card--soft">
          <p style={{ marginBottom: '24px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            {contact.note}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <CopyEmailButton />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card card--soft"
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px',
                  fontWeight: '500',
                }}
              >
                Name <span style={{ color: 'var(--accent-red)' }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px',
                  fontWeight: '500',
                }}
              >
                Email <span style={{ color: 'var(--accent-red)' }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px',
                  fontWeight: '500',
                }}
              >
                Subject <span style={{ color: 'var(--accent-red)' }}>*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => updateField('subject', e.target.value)}
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px',
                  fontWeight: '500',
                }}
              >
                Message <span style={{ color: 'var(--accent-red)' }}>*</span>
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                required
                disabled={loading}
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '1rem',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'color-mix(in srgb, var(--accent-red) 10%, transparent)',
                  border: '1px solid var(--accent-red)',
                  borderRadius: '8px',
                  color: 'var(--accent-red)',
                  fontSize: '0.9rem',
                }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'color-mix(in srgb, var(--accent-green) 10%, transparent)',
                  border: '1px solid var(--accent-green)',
                  borderRadius: '8px',
                  color: 'var(--accent-green)',
                  fontSize: '0.9rem',
                }}
              >
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="button button--primary"
              style={{
                marginTop: '8px',
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

export default Contact;
