import { useState, useEffect } from 'react';

const links = [
  { label: 'About',         href: '#about' },
  { label: 'Achievements',  href: '#achievements' },
  { label: 'Organizations', href: '#organizations' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Media',         href: '#media' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 64,
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontWeight: 900, fontSize: '1.1rem',
          color: scrolled ? 'var(--primary)' : 'white',
          letterSpacing: '-0.02em',
        }}>
          ZAS <span style={{ color: 'var(--accent)' }}>·</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link"
              style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => e.target.style.color = scrolled ? 'var(--primary)' : 'white'}
              onMouseLeave={e => e.target.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)'}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            Get in Touch
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            color: scrolled ? 'var(--primary)' : 'white',
            display: 'flex', alignItems: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {menuOpen
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid var(--border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
