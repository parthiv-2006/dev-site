import ActionButton from '../components/ActionButton';
import Tag from '../components/Tag';
import { hero } from '../content/data';

function Hero() {
  return (
    <header className="hero reveal" id="top">
      <div>
        <span className="hero__badge">{hero.badge}</span>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__lede">{hero.lede}</p>
        <div className="hero__actions">
          <ActionButton href="#projects" label="View projects" />
          <ActionButton href="#contact" label="Get in touch" tone="ghost" />
        </div>
      </div>
      <div className="hero__card" aria-label="Highlights">
        <div className="hero__stat">
          <Tag tone="light">Recent wins</Tag>
          <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>
            Launch notes and performance lifts from the last few builds.
          </span>
        </div>
        <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
          {hero.stats.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 12,
                padding: '10px 12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>
                <div style={{ fontSize: '1rem', opacity: 0.72 }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>{item.note}</div>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
