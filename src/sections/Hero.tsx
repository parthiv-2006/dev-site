import { motion } from 'framer-motion';
import ActionButton from '../components/ActionButton';

import { hero } from '../content/data';

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } as const },
  };

  return (
    <header className="hero" id="top" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 'clamp(60px, 12vh, 140px)' }}>
      <motion.div
        className="hero__content"
        style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="hero__badge"
          variants={item}
          style={{
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--accent-cyan)',
            padding: '8px 16px',
            borderRadius: '999px',
            background: 'var(--glass-light)',
            border: '1px solid var(--glass-border)'
          }}
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          className="hero__title"
          variants={item}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: '1',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(to bottom, #ffffff 0%, #e8e8e8 40%, #b8c6d6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          className="hero__lede"
          variants={item}
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}
        >
          {hero.lede}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={item}
          style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}
        >
          <ActionButton href="#projects" label="View work" />
          <ActionButton href="/resume.pdf" label="Download Resume" tone="ghost" download="Parthiv_Paul_Resume.pdf" />
        </motion.div>

        <motion.div
          className="hero__stats-orbit"
          variants={item}
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;
