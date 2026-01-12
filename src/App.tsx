import { useState } from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ThemePlayground from './components/ThemePlayground';
import NowInline from './components/NowInline';
import useMagnetCursor from './hooks/useMagnetCursor';
import useScrollStagger from './hooks/useScrollStagger';
import './styles/app.css';
import './styles/stat-counter.css';
import './styles/project-card.css'; // Ensure project-card styles are loaded if not already via index.css common practice to align imports

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const isNarrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches;

  // Initialize interaction hooks
  useMagnetCursor({ selector: '.button, .nav__link, .project-card__link, .project-card__action-btn', distance: 100 });
  useScrollStagger();

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className="nav" aria-label="Primary">
        <div className="nav__top">
          <div className="nav__left">
            <div className="nav__brand">Parthiv Paul</div>
            <span className="badge-pill">CS Student @ UofT</span>
          </div>
          <div className="nav__right">
            <NowInline />
          </div>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close menu' : 'Open menu'}
          </button>
        </div>
        <div
          id="nav-links"
          className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}
          aria-hidden={!menuOpen && isNarrow ? true : undefined}
        >
          <a className="nav__link" href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav__link" href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a className="nav__link" href="#projects" onClick={closeMenu}>
            Work
          </a>
          <a className="nav__link" href="#education" onClick={closeMenu}>
            Education
          </a>
          <a className="nav__link" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <span>Portfolio concept · Dummy data</span>
        <a className="nav__link" href="#top">
          Back to top ↑
        </a>
      </footer>

      {/* Live Theme Playground */}
      <ThemePlayground />

      {/* Grain texture overlay */}
      <div aria-hidden className="grain-overlay" />
    </div>
  );
}

export default App;
