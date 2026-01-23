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
          <p className="contact__note">
            {contact.note}
          </p>
          <div className="contact__actions">
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
          <form onSubmit={handleSubmit} className="contact__form">
            <div>
              <label
                htmlFor="contact-name"
                className="contact__label"
              >
                Name <span className="contact__required">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                disabled={loading}
                className="contact__field"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="contact__label"
              >
                Email <span className="contact__required">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                disabled={loading}
                className="contact__field"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="contact__label"
              >
                Subject <span className="contact__required">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => updateField('subject', e.target.value)}
                required
                disabled={loading}
                className="contact__field"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="contact__label"
              >
                Message <span className="contact__required">*</span>
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                required
                disabled={loading}
                rows={6}
                className="contact__textarea"
              />
            </div>

            {error && (
              <div
                className="contact__alert contact__alert--error"
              >
                {error}
              </div>
            )}

            {success && (
              <div
                className="contact__alert contact__alert--success"
              >
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`button button--primary contact__submit${loading ? ' contact__submit--loading' : ''}`}
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
