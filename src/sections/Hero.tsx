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
    <header className="hero hero--centered" id="top">
      <motion.div
        className="hero__content hero__content--centered"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="hero__badge hero__badge--pill"
          variants={item}
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          className="hero__title hero__title--gradient"
          variants={item}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          className="hero__lede hero__lede--centered"
          variants={item}
        >
          {hero.lede}
        </motion.p>

        <motion.div
          className="hero__actions hero__actions--centered"
          variants={item}
        >
          <ActionButton href="#projects" label="View work" />
          <ActionButton href="/resume.pdf" label="Download Resume" tone="ghost" download="Parthiv_Paul_Resume.pdf" />
        </motion.div>

        <motion.div
          className="hero__stats-orbit hero__stats-orbit--centered"
          variants={item}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="hero__stat-item">
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;
