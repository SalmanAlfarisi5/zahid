const skills = [
  { icon: '🎤', label: 'Public Speaking',            level: 95, note: 'Debate champion, professional MC' },
  { icon: '🧠', label: 'Critical Thinking & Debate', level: 90, note: 'National-level academic competitions' },
  { icon: '👥', label: 'Leadership & Teamwork',       level: 95, note: 'Multi-org chairman & representative' },
  { icon: '💼', label: 'Entrepreneurship & Biz Plan', level: 85, note: '1st Place Citibank Biz Plan 2025' },
  { icon: '💰', label: 'Financial Literacy',          level: 80, note: '2nd Place HSBC Finance Comp. 2024' },
  { icon: '🌐', label: 'Cross-Cultural Communication',level: 85, note: 'Tokyo exchange, ASEAN scholar' },
  { icon: '📋', label: 'Project Management',          level: 88, note: 'IDR 95M project, 7 sponsors' },
  { icon: '⚽', label: 'Football & Futsal',           level: 92, note: 'PSF Academy scholar, national player' },
];

const softSkills = [
  { icon: '💪', label: 'High Work Ethic' },
  { icon: '🎯', label: 'Confident & Bold' },
  { icon: '🤝', label: 'Community Driven' },
  { icon: '📈', label: 'Growth Mindset' },
  { icon: '🔥', label: 'Competitive Spirit' },
  { icon: '🌱', label: 'Adaptability' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <span className="section-label">Keahlian</span>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A unique combination of athletic, academic, and leadership competencies proven at national level.
        </p>

        <div className="grid-2">
          {/* Skill bars */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 24 }}>
              Core Competencies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {skills.map(s => (
                <div key={s.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: '0.87rem' }}>
                      {s.icon} {s.label}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${s.level}%` }} />
                  </div>
                  <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills + career type */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 24 }}>
              Personal Attributes
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36 }}>
              {softSkills.map(s => (
                <div key={s.label} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: 'white', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)', padding: '14px 16px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                }}>
                  <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                  <span style={{ fontSize: '0.83rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Career interest chart */}
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 16 }}>
              Career Interest (RIASEC)
            </h3>
            <div style={{
              background: 'white', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '20px',
            }}>
              {[
                { label: 'Social (S)',       pct: 100, color: '#1B3A6B' },
                { label: 'Enterprising (E)', pct: 100, color: '#C9A227' },
                { label: 'Realistic (R)',    pct: 56,  color: '#2E5BA0' },
                { label: 'Conventional (C)', pct: 56,  color: '#6366F1' },
                { label: 'Artistic (A)',     pct: 44,  color: '#EC4899' },
                { label: 'Investigative (I)',pct: 33,  color: '#10B981' },
              ].map(r => (
                <div key={r.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{r.label}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div style={{ height: '100%', width: `${r.pct}%`, background: r.color, borderRadius: 100 }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.5 }}>
                Based on interest assessment by SiapKuliah. Dominant type: <strong>RSE</strong> — suited for business, management, law, communications, and social sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
