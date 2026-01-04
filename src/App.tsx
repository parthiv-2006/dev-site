import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Contact from './sections/Contact';
import './styles/app.css';

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <nav className="nav" aria-label="Primary">
        <div className="nav__left">
          <div className="nav__brand">Your Name — Developer</div>
          <span className="badge-pill">Available for select work</span>
        </div>
        <div className="nav__links">
          <a className="nav__link" href="#projects">
            Work
          </a>
          <a className="nav__link" href="#process">
            Process
          </a>
          <a className="nav__link" href="#contact">
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
