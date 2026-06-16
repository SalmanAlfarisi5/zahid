import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';

const links = [
  { label: 'About',         href: '#about' },
  { label: 'Achievements',  href: '#achievements' },
  { label: 'Organizations', href: '#organizations' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Media',         href: '#media' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy: highlight the nav link for whichever section is in view
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
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
        <a href="#hero" aria-label="Back to top" style={{
          fontWeight: 900, fontSize: '1.1rem',
          color: scrolled ? 'var(--primary)' : 'white',
          letterSpacing: '-0.02em',
        }}>
          ZAS <span style={{ color: 'var(--accent)' }} aria-hidden="true">·</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(l => {
            const isActive = active === l.href;
            return (
              <a key={l.href} href={l.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                style={{ color: isActive
                  ? 'var(--accent)'
                  : scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)' }}
                onMouseEnter={e => { if (!isActive) e.target.style.color = scrolled ? 'var(--primary)' : 'white'; }}
                onMouseLeave={e => { if (!isActive) e.target.style.color = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)'; }}
              >
                {l.label}
              </a>
            );
          })}
          <a href="#contact" className="btn btn-accent" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            Get in Touch
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            color: scrolled ? 'var(--primary)' : 'white',
            display: 'flex', alignItems: 'center',
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" style={{
          background: 'white', borderTop: '1px solid var(--border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              aria-current={active === l.href ? 'true' : undefined}
              style={{
                color: active === l.href ? 'var(--primary)' : 'var(--text)',
                fontWeight: active === l.href ? 700 : 500, fontSize: '0.95rem',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
