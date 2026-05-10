export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'rgba(255,255,255,0.7)',
      padding: '32px 0',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '1rem', marginBottom: 4 }}>
            Muhammad Zahid As Shidqi
            <span style={{ color: 'var(--accent)', marginLeft: 8 }}>·</span>
          </div>
          <div style={{ fontSize: '0.8rem' }}>
            SMA IAS Al-Jannah · Class 11 IPS · Depok, West Java
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'About',         href: '#about' },
            { label: 'Achievements',  href: '#achievements' },
            { label: 'Organizations', href: '#organizations' },
            { label: 'Contact',       href: '#contact' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ fontSize: '0.78rem' }}>
          © {year} Muhammad Zahid As Shidqi
        </div>
      </div>
    </footer>
  );
}
