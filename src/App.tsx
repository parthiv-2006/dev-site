import { useState } from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Contact from './sections/Contact';
import './styles/app.css';
import './styles/stat-counter.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const isNarrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches;

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className="nav" aria-label="Primary">
        <div className="nav__top">
          <div className="nav__left">
            <div className="nav__brand">Your Name — Developer</div>
            <span className="badge-pill">Available for select work</span>
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
          <a className="nav__link" href="#projects" onClick={closeMenu}>
            Work
          </a>
          <a className="nav__link" href="#process" onClick={closeMenu}>
            Process
          </a>
          <a className="nav__link" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>

      <footer className="footer">
        <span>Portfolio concept · Dummy data</span>
        <a className="nav__link" href="#top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
