import useInView from '../hooks/useInView';

const profileInfo = [
  { label: 'Full Name',    value: 'Muhammad Zahid As Shidqi' },
  { label: 'Date of Birth', value: 'Niigata, 23 February 2009' },
  { label: 'Location',     value: 'Cibubur, Depok, West Java' },
  { label: 'School',       value: 'SMA IAS Al-Jannah (Class 11 IPS)' },
  { label: 'Email',        value: 'zahid23022009@gmail.com' },
  { label: 'Phone',        value: '+62 813-2208-5884' },
  { label: 'Instagram',    value: '@zahid.asshidqi' },
];

const languages = [
  { lang: 'Bahasa Indonesia', level: 'Native',      pct: 100 },
  { lang: 'English',          level: 'Fluent',       pct: 85  },
  { lang: 'Japanese',         level: 'Elementary',   pct: 25  },
];

const interests = [
  { icon: '⚽', label: 'Football & Futsal' },
  { icon: '🍳', label: 'Cooking' },
  { icon: '🏆', label: 'Competitions' },
  { icon: '✈️', label: 'Traveling' },
  { icon: '💼', label: 'Entrepreneurship' },
];

const scholarships = [
  { icon: '🎓', text: 'Full Scholarship – SMA IAS Al-Jannah' },
  { icon: '⚽', text: 'Merit Scholarship – PSF Football Academy (Pancoran Soccer Field)' },
  { icon: '🌏', text: 'ASEAN Scholarship Batch 3 – Schoters / Ruang Guru' },
];

export default function About() {
  const [langRef, langIn] = useInView();
  return (
    <section id="about" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <span className="section-label">Profile</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A driven 16-year-old from West Java — leader, athlete, and aspiring entrepreneur with a clear vision
          to study abroad and build multiple businesses.
        </p>

        <div className="grid-2">
          {/* Left column: personal info + interests */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 18 }}>
              Personal Information
            </h3>
            <div>
              {profileInfo.map((item, i) => (
                <div key={item.label} style={{
                  display: 'grid', gridTemplateColumns: '148px 1fr',
                  padding: '11px 0',
                  borderBottom: '1px solid var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.83rem', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ color: 'var(--text)', fontSize: '0.87rem', fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginTop: 32, marginBottom: 16 }}>
              Interests & Hobbies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {interests.map(i => (
                <span key={i.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '7px 14px', borderRadius: 100,
                  background: 'var(--bg-alt)', border: '1px solid var(--border)',
                  fontSize: '0.83rem', fontWeight: 500, color: 'var(--text-secondary)',
                }}>
                  <span aria-hidden="true">{i.icon}</span> {i.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: languages + career + scholarships */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 18 }}>
              Languages
            </h3>
            <div ref={langRef} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {languages.map(l => (
                <div key={l.lang}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{l.lang}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{l.level}</span>
                  </div>
                  <div className="progress-bar"
                    role="progressbar" aria-label={`${l.lang} proficiency`}
                    aria-valuenow={l.pct} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-fill" style={{ width: langIn ? `${l.pct}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 14 }}>
              Career Vision
            </h3>
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-light) 0%, #FFFBEB 100%)',
              border: '1px solid #F0CA6A', borderRadius: 'var(--radius)',
              padding: '18px 20px', marginBottom: 28,
            }}>
              <p style={{ color: '#7A5C10', lineHeight: 1.75, fontSize: '0.88rem' }}>
                Aspiring to own multiple businesses with passive income streams while pursuing study abroad.
                Interested in global trade, entrepreneurship, and community development.
                Career interest type: <strong>RSE (Realistic · Social · Enterprising)</strong>.
              </p>
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 14 }}>
              Scholarships
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {scholarships.map(s => (
                <div key={s.text} style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  background: 'var(--bg-alt)', borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px', border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '1.15rem', flexShrink: 0 }} aria-hidden="true">{s.icon}</span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.5 }}>
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
