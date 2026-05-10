const contactItems = [
  { icon: '📧', label: 'Email',     value: 'zahid23022009@gmail.com',  href: 'mailto:zahid23022009@gmail.com' },
  { icon: '📱', label: 'Phone',     value: '+62 813-2208-5884',        href: 'tel:+6281322085884' },
  { icon: '📸', label: 'Instagram', value: '@zahid.asshidqi',          href: 'https://www.instagram.com/zahid.asshidqi' },
  { icon: '🔗', label: 'Bio.site',  value: 'bio.site/zahidasshidqi',   href: 'https://bio.site/zahidasshidqi' },
  { icon: '📍', label: 'Location',  value: 'Cibubur, Depok, West Java', href: null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <span className="section-label">Kontak</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Open to collaborations, speaking opportunities, sponsorships, or just a friendly message.
        </p>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactItems.map(c => (
              <div key={c.label} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '16px 20px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,58,107,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'var(--bg-alt)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', border: '1px solid var(--border)',
                  flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 2 }}>
                    {c.label}
                  </div>
                  {c.href ? (
                    <a href={c.href} style={{
                      fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => e.target.style.color = 'var(--primary-light)'}
                      onMouseLeave={e => e.target.style.color = 'var(--primary)'}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: 'var(--radius-lg)', padding: '40px 36px', color: 'white',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
              }} />
              <div style={{
                position: 'absolute', bottom: -60, left: -20,
                width: 180, height: 180, borderRadius: '50%',
                background: 'rgba(201,162,39,0.15)',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>👋</div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: 12 }}>
                  Let's Connect!
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 28 }}>
                  Whether you're a school, organization, sponsor, or fellow student — Zahid is always open
                  to new opportunities, collaborations, and meaningful conversations.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    '🤝 Sponsorship & Partnership',
                    '🎤 Speaking & MC Opportunities',
                    '📚 Mentorship & Collaboration',
                    '⚽ Football Scouting & Trials',
                  ].map(item => (
                    <div key={item} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500,
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
                <a href="mailto:zahid23022009@gmail.com" className="btn btn-accent" style={{ marginTop: 28, alignSelf: 'flex-start' }}>
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
