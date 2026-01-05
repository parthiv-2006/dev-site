import ActionButton from '../components/ActionButton';
import StatCounter from '../components/StatCounter';
import NowWidget from '../components/NowWidget';
import { hero } from '../content/data';

function Hero() {
  return (
    <header className="hero reveal" id="top">
      <div className="hero__content">
        <span className="hero__badge">{hero.badge}</span>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__lede">{hero.lede}</p>
        <div className="hero__actions">
          <ActionButton href="#projects" label="View projects" />
          <ActionButton href="#contact" label="Get in touch" tone="ghost" />
        </div>
      </div>

      <div className="hero__stats-orbit" aria-label="Key metrics">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="hero__stat-chip">
            <StatCounter value={stat.value} label={stat.label} note={stat.note} />
          </div>
        ))}
        <NowWidget />
      </div>
    </header>
  );
}

export default Hero;
