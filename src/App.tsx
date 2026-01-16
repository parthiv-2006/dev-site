

import { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ThemePlayground from './components/ThemePlayground';
import ThemeToggle from './components/ThemeToggle';
import SocialShare from './components/SocialShare';
import useMagnetCursor from './hooks/useMagnetCursor';
import useScrollStagger from './hooks/useScrollStagger';
import { trackPageView } from './utils/analytics';
import './styles/app.css';
import './styles/stat-counter.css';
import './styles/project-card.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize interaction hooks
  useMagnetCursor({ selector: '.button, .nav__link, .project-card__link, .project-card__action-btn', distance: 100 });
  useScrollStagger();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track page view on mount
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className={`nav-dock ${isScrolled ? 'nav-dock--scrolled' : ''}`} aria-label="Primary">
        <a className="nav-dock__item" href="#top" aria-label="Go to top">Home</a>
        <a className="nav-dock__item" href="#about" aria-label="Go to about section">About</a>
        <a className="nav-dock__item" href="#skills" aria-label="Go to skills section">Skills</a>
        <a className="nav-dock__item" href="#projects" aria-label="Go to projects section">Work</a>
        <a className="nav-dock__item" href="#experience" aria-label="Go to experience section">Experience</a>
        <a className="nav-dock__item" href="#education" aria-label="Go to education section">Education</a>
        <a className="nav-dock__item" href="#achievements" aria-label="Go to achievements section">Achievements</a>
        <a className="nav-dock__item" href="#contact" aria-label="Go to contact section">Contact</a>
        <div style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
          <ThemeToggle />
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="footer">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <span>Portfolio concept · Dummy data</span>
          <SocialShare />
          <a className="nav__link" href="#top" aria-label="Back to top">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* Live Theme Playground */}
      <ThemePlayground />

      {/* Grain texture overlay */}
      <div aria-hidden className="grain-overlay" />
    </div>
  );
}

export default App;
