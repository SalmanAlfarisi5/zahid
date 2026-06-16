import { ChevronDown } from './Icons';

// Distinct from the StatsBar below (which covers IDR 95M / 1,300+ / 1.6M+ etc.)
const quickStats = [
  { value: '5+',    label: 'Gold Medals' },
  { value: '7',     label: 'Corporate Sponsors' },
  { value: '100+',  label: 'Schools Reached' },
  { value: '12',    label: 'Ambassadors Led' },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0F1F3D 0%, #1B3A6B 55%, #2E5BA0 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 64,
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-80px',
        width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-160px', left: '-100px',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(46,91,160,0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'center' }}
        >
          {/* Left content */}
          <div>
            {/* Badges */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {[
                { icon: '🏅', text: 'Duta SMA Jawa Barat 2025' },
                { icon: '⚽', text: 'PSF Academy Scholar' },
                { icon: '🇯🇵', text: 'Tokyo Global Delegate' },
              ].map(b => (
                <span key={b.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 14px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.78rem', fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                }}>
                  <span aria-hidden="true">{b.icon}</span> {b.text}
                </span>
              ))}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.12,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              Muhammad Zahid<br />
              <span style={{ color: 'var(--accent)' }}>As Shidqi</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 500, marginBottom: 36,
              lineHeight: 1.75,
            }}>
              Student leader, social entrepreneur, and national champion from West Java —
              passionate about community impact, entrepreneurship, and studying abroad.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#achievements" className="btn btn-accent">
                View Achievements
              </a>
              <a href="#contact" className="btn" style={{
                background: 'transparent', color: 'white',
                border: '2px solid rgba(255,255,255,0.35)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div style={{
              display: 'flex', gap: 0, marginTop: 52, flexWrap: 'wrap',
              borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28,
            }}>
              {quickStats.map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: i < quickStats.length - 1 ? 32 : 0,
                  marginRight: i < quickStats.length - 1 ? 32 : 0,
                  borderRight: i < quickStats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="hero-avatar-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            {/* Photo ring */}
            <div style={{ position: 'relative' }}>
              {/* Outer glow ring */}
              <div className="hero-photo-ring" style={{
                width: 284, height: 284, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent) 0%, rgba(201,162,39,0.3) 100%)',
                padding: 4,
                boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              }}>
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'var(--primary)',
                }}>
                  <img
                    src="/foto.jpeg"
                    alt="Portrait of Muhammad Zahid As Shidqi"
                    width="284"
                    height="284"
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
              {/* Badge pin */}
              <div style={{
                position: 'absolute', bottom: 12, right: 8,
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, #C9A227, #F5D070)',
                border: '3px solid white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }} aria-hidden="true">
                🏆
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 600 }}>
                Class 11 IPS · SMA IAS Al-Jannah
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', marginTop: 4 }}>
                Born in Niigata, Japan · Feb 23, 2009
              </div>
            </div>

            {/* Info chips */}
            <div className="hero-info-chips" style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
              {[
                { icon: '📧', text: 'zahid23022009@gmail.com' },
                { icon: '📍', text: 'Depok, Jawa Barat' },
              ].map(c => (
                <div key={c.text} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 14px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)',
                }}>
                  <span aria-hidden="true">{c.icon}</span> {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" aria-label="Scroll to content" style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem', letterSpacing: '0.1em',
      }}>
        <span style={{ textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
