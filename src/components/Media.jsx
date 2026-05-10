const mediaItems = [
  {
    outlet: 'Kompas TV',
    type: 'Video Feature',
    icon: '📺',
    year: '2024',
    color: '#E85D04',
    bgColor: '#FFF3E0',
    title: 'Liga Kompas Kacang Garuda – National Football Coverage',
    desc: 'Featured on Kompas TV national broadcast during the Liga Kompas Kacang Garuda U-14 competition, representing Buperta Cibubur.',
    badge: 'TV Feature',
  },
  {
    outlet: 'Kompas.id',
    type: 'News Article',
    icon: '📰',
    year: '2024',
    color: '#1B3A6B',
    bgColor: '#EBF0FF',
    title: 'Buperta Cibubur dan M-Private Menang Tipis Pada Pekan Kesepuluh Liga Kompas Kacang Garuda U-14',
    desc: 'Named in a Kompas.id article covering the Liga Kompas Kacang Garuda U-14 national football league.',
    badge: 'Article',
  },
  {
    outlet: 'Kompasiana',
    type: 'Feature Story',
    icon: '✍️',
    year: '2025',
    color: '#059669',
    bgColor: '#ECFDF5',
    title: '"Dulu Aku Korban Bullying" – Zahid, Duta SMA Jawa Barat 2025',
    desc: 'A personal story feature about Zahid\'s journey from bullying victim to West Java\'s top student ambassador — published on Kompasiana.',
    badge: 'Profile Feature',
  },
  {
    outlet: 'Sekolah Al-Jannah',
    type: 'School Article',
    icon: '🏫',
    year: '2024',
    color: '#6366F1',
    bgColor: '#EEF2FF',
    title: 'Finalis Astra Honda Motor Best Student 2024',
    desc: 'School article covering Zahid\'s participation and achievements in the Astra Honda Motor Best Student competition.',
    badge: 'School News',
  },
];

export default function Media() {
  return (
    <section id="media" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <span className="section-label">Liputan Media</span>
        <h2 className="section-title">Media Coverage</h2>
        <p className="section-subtitle">
          Featured in national and local media outlets for sports, academic, and social achievements.
        </p>

        <div className="grid-2">
          {mediaItems.map(m => (
            <div key={m.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: m.bgColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>
                    {m.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: m.color }}>{m.outlet}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.type} · {m.year}</div>
                  </div>
                </div>
                <span className="badge badge-navy">{m.badge}</span>
              </div>

              {/* Article title */}
              <div>
                <h3 style={{
                  fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)',
                  lineHeight: 1.5, marginBottom: 8,
                }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: '0.78rem', color: 'var(--text-muted)',
                  background: 'var(--bg-alt)', padding: '6px 12px',
                  borderRadius: 100, border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '0.85rem' }}>🔗</span>
                  {m.outlet} Archive
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social media accounts */}
        <div style={{
          marginTop: 56, background: 'var(--bg-alt)',
          border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          padding: '32px',
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 20 }}>
            Related Social & Org Accounts
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {[
              { handle: '@psf.academy',             label: 'PSF Football Academy' },
              { handle: '@sekolah_iasaljannah',      label: 'SMA IAS Al-Jannah' },
              { handle: '@ajssr_2025',               label: 'AJSSR 2025' },
              { handle: '@almuhtadun_rima',          label: 'Remaja Masjid Al-Muhtadun' },
              { handle: '@osis.smaaljannah',         label: 'OSIS SMA Al-Jannah' },
              { handle: '@jktfootballexpo',          label: 'Jakarta Football Expo' },
              { handle: '@ligakg.u14',               label: 'Liga Kompas Garuda U-14' },
              { handle: '@zahid.asshidqi',           label: 'Personal Profile' },
            ].map(a => (
              <div key={a.handle} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)', padding: '10px 14px',
              }}>
                <span style={{ fontSize: '1rem' }}>📱</span>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)' }}>{a.handle}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{a.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
