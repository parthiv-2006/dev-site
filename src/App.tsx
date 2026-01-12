

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ThemePlayground from './components/ThemePlayground';
import useMagnetCursor from './hooks/useMagnetCursor';
import useScrollStagger from './hooks/useScrollStagger';
import './styles/app.css';
import './styles/stat-counter.css';
import './styles/project-card.css';

function App() {
  // Initialize interaction hooks
  useMagnetCursor({ selector: '.button, .nav__link, .project-card__link, .project-card__action-btn', distance: 100 });
  useScrollStagger();

  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className="nav-dock" aria-label="Primary">
        <a className="nav-dock__item" href="#top">Home</a>
        <a className="nav-dock__item" href="#about">About</a>
        <a className="nav-dock__item" href="#skills">Skills</a>
        <a className="nav-dock__item" href="#projects">Work</a>
        <a className="nav-dock__item" href="#education">Education</a>
        <a className="nav-dock__item" href="#contact">Contact</a>
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
