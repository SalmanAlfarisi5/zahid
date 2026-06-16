const orgs = [
  {
    icon: '🌟',
    name: 'Duta SMA Jawa Barat 2025',
    role: 'Regional Chairman – Java Island',
    period: '2025 – Present',
    color: '#C9A227',
    bgColor: '#FEF3C7',
    desc: 'Selected as West Java SMA Ambassador representing 1.6M+ students. Regional Chairman overseeing 12 elite student ambassadors across Java for youth-focused programs.',
    highlights: ['1.6M+ students represented', '12 elite ambassadors managed', 'Directorate of Senior High Schools'],
  },
  {
    icon: '💪',
    name: 'AJSSR – Al Jannah Student Social Responsibility',
    role: 'Ketua (Chairman)',
    period: '2025',
    color: '#1B3A6B',
    bgColor: '#EBF0FF',
    desc: 'Led all grade 11 students in planning and executing a social fundraising program. Built PAUD and renovated a Musala in Kp. Cipicung, Kab. Bogor, West Java.',
    highlights: ['IDR 95M fundraised', '7 national sponsors (incl. Indosat)', 'Exceeded IDR 80M initial target'],
  },
  {
    icon: '📝',
    name: 'Smaksi Menulis Literacy Program',
    role: 'Founder & Program Lead',
    period: '2024 – Present',
    color: '#10B981',
    bgColor: '#ECFDF5',
    desc: 'Spearheaded a national literacy movement reaching students across Indonesia, coordinating volunteers including youth influencers and parliament members.',
    highlights: ['1,300+ students impacted', '100+ schools involved', '32 high-profile volunteers'],
  },
  {
    icon: '🏫',
    name: 'OSIS SMA IAS Al-Jannah',
    role: 'Anggota – Divisi Alam',
    period: '2024 – Present',
    color: '#6366F1',
    bgColor: '#EEF2FF',
    desc: 'Active OSIS member in the nature division. Led multiple events including Culture Day, Sports League, and Class Meeting.',
    highlights: ['Ketua Culture Day', 'Ketua Liga Olahraga', 'Ketua Class Meeting'],
  },
  {
    icon: '🕌',
    name: 'Remaja Masjid Al-Muhtadun',
    role: 'Wakil Ketua (Vice Chairman)',
    period: '2023 – Present',
    color: '#059669',
    bgColor: '#D1FAE5',
    desc: 'Vice Chairman of the youth mosque organization. Led Islamic events including Mabit, Maulid Nabi, and Pesantren Kilat (Islamic boarding school program).',
    highlights: ['Ketua Mabit', 'Ketua Maulid Nabi', 'Ketua Pesantren Kilat'],
  },
  {
    icon: '🏴',
    name: 'Laskar Al-Jannah (Paskibra)',
    role: 'Bendahara (Treasurer)',
    period: '2022 – 2024',
    color: '#DC2626',
    bgColor: '#FEF2F2',
    desc: 'Treasurer of the school\'s flag ceremony organization (Paskibra equivalent). Managed finances and supported ceremonial activities.',
    highlights: ['Bendahara Putra (Jagabaya)', 'Masa Bakti 2022/2023', 'Gugus Depan 10.209 – 10.210'],
  },
];

export default function Organizations() {
  return (
    <section id="organizations" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <span className="section-label">Organisasi</span>
        <h2 className="section-title">Organizations</h2>
        <p className="section-subtitle">
          Leadership experience spanning school, community, and national-level organizations.
        </p>

        <div className="grid-3">
          {orgs.map(o => (
            <div key={o.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Header */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: o.bgColor, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
                }} aria-hidden="true">
                  {o.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.35, marginBottom: 3 }}>
                    {o.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: o.color, fontWeight: 600 }}>{o.role}</div>
                  <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: 2 }}>{o.period}</div>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1 }}>
                {o.desc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                {o.highlights.map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: o.color, flexShrink: 0 }} />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
