import { useState } from 'react';

const tabs = [
  { id: 'academic',  label: '🎓 Academic'  },
  { id: 'sports',    label: '⚽ Sports'    },
  { id: 'debate',    label: '🎤 Debate'    },
  { id: 'religious', label: '📖 Religious' },
  { id: 'leadership',label: '🌟 Leadership'},
];

const data = {
  academic: [
    { icon: '🥇', title: 'Gold Medal – National Economics Olympiad', body: 'Kompetisi Sains Nasional (KSN) / Puspresnas · National Level', badge: 'Gold', badgeClass: 'badge-gold' },
    { icon: '🥇', title: 'Gold Medal – Bahasa Indonesia', body: 'PESONA (Prestasi Maju Indonesia) · National Level', badge: 'Gold', badgeClass: 'badge-gold' },
    { icon: '🥇', title: 'Gold Medal – English', body: 'OSAINS.ID National Olympiad · National Level', badge: 'Gold', badgeClass: 'badge-gold' },
    { icon: '🥈', title: 'Silver Medal – National Science & English', body: 'Lembaga Prestasi Pelajar (LPP) · National Level', badge: 'Silver', badgeClass: 'badge-navy' },
    { icon: '🏆', title: '1st Place – National Business Plan Competition', body: 'Organized by Citibank Indonesia · 2025', badge: '1st Place', badgeClass: 'badge-gold' },
    { icon: '🥈', title: '2nd Place – National Finance Competition', body: 'Organized by HSBC · 2024', badge: '2nd Place', badgeClass: 'badge-navy' },
    { icon: '🌏', title: 'ASEAN Scholarship Awardee – Batch 3', body: 'Schoters / Ruang Guru · Fully Funded', badge: 'Scholarship', badgeClass: 'badge-green' },
    { icon: '🗾', title: 'Fully Funded Delegate – Tokyo Global Friendship', body: 'Japan · 5-Country International Exchange Program', badge: 'International', badgeClass: 'badge-green' },
    { icon: '🏝️', title: 'Educational Volunteer – Sebesi Island, Lampung', body: 'Only high school participant among university delegates · Fully Funded', badge: 'Selected', badgeClass: 'badge-navy' },
  ],
  sports: [
    { icon: '🥇', title: 'Juara 1 – Jakarta Football Expo 2024', body: 'PSF Academy U-15 · Jakarta International Stadium Complex', badge: '1st Place', badgeClass: 'badge-gold' },
    { icon: '🥇', title: 'Juara 1 – Glory Cup (Gloricup Esperanza 2024)', body: 'Minisoccer Tournament', badge: '1st Place', badgeClass: 'badge-gold' },
    { icon: '🥇', title: 'Juara 1 – MSM Darussalam League 2023', body: 'Futsal Tournament · Antar SMP Se-Jabodetabek', badge: '1st Place', badgeClass: 'badge-gold' },
    { icon: '🥇', title: 'Juara 1 – Liga AAFI Depok', body: 'Futsal · Regional Kota Depok Kategori U-16 · 2023', badge: '1st Place', badgeClass: 'badge-gold' },
    { icon: '🥈', title: 'Juara 2 – Piala Panglima TNI', body: 'Open Tournament Sepak Bola U-16 · HUT TNI ke-79, 2024', badge: '2nd Place', badgeClass: 'badge-navy' },
    { icon: '🏟️', title: 'Peserta – Liga Kompas Kacang Garuda Nasional', body: 'Featured in Kompas TV & Kompas.id coverage', badge: 'National', badgeClass: 'badge-navy' },
    { icon: '⚽', title: 'Peserta – Indonesia Junior Soccer League (IJSL)', body: 'National Level Participation', badge: 'National', badgeClass: 'badge-navy' },
    { icon: '🏅', title: 'Peserta – Liga AAFI Nasional', body: 'Grand Champion · Akademi Futsal Indonesia', badge: 'National', badgeClass: 'badge-navy' },
    { icon: '🇮🇩', title: 'Mewakili DKI Jakarta – RRI CUP Nasional', body: 'Jakarta Series · September 2024', badge: 'DKI Rep.', badgeClass: 'badge-red' },
    { icon: '🎓', title: 'Merit Scholarship – PSF Academy', body: 'Pancoran Soccer Field Academy · Full Football Scholarship', badge: 'Scholarship', badgeClass: 'badge-gold' },
  ],
  debate: [
    { icon: '🏆', title: 'Juara – Lomba Debat FELISA', body: 'First Place at FELISA Debate Competition', badge: 'Champion', badgeClass: 'badge-gold' },
    { icon: '🎯', title: 'Top 16 – Communiverse Vol. 2 (LSPR)', body: 'Debate Communiverse · LSPR Transpark Bekasi · Aug 28–30, 2024', badge: 'Top 16', badgeClass: 'badge-navy' },
    { icon: '🎤', title: 'MC – School Events', body: 'Master of Ceremonies at various SMA IAS Al-Jannah school events', badge: 'MC', badgeClass: 'badge-green' },
    { icon: '🎤', title: 'MC – Ciputra Mall Event', body: 'Public Master of Ceremonies at Ciputra Mall', badge: 'MC', badgeClass: 'badge-green' },
  ],
  religious: [
    { icon: '📗', title: 'Wisuda Qur\'an Juz 28 – 2022', body: 'Khatmul Qur\'an · SMP IAS Al-Jannah', badge: 'Juz 28', badgeClass: 'badge-green' },
    { icon: '📗', title: 'Wisuda Qur\'an Juz 29 – 2023', body: 'Khatmul Qur\'an Angkatan VII · SMP IAS Al-Jannah', badge: 'Juz 29', badgeClass: 'badge-green' },
    { icon: '📗', title: 'Wisuda Qur\'an Juz 30 – 2024', body: 'Khatmul Qur\'an · SMP IAS Al-Jannah', badge: 'Juz 30', badgeClass: 'badge-green' },
    { icon: '⭐', title: 'Peserta Terbaik – Wisuda Qur\'an 2025', body: 'Best Participant Award · SMA IAS Al-Jannah', badge: 'Best', badgeClass: 'badge-gold' },
  ],
  leadership: [
    { icon: '🌟', title: 'Duta SMA Jawa Barat 2025', body: 'Appointed by Directorate of Senior High Schools · Representing 1.6M+ students', badge: 'Provincial Ambassador', badgeClass: 'badge-gold' },
    { icon: '🏛️', title: 'Regional Chairman – Duta SMA Java Island', body: 'Leading 12 elite student ambassadors across Java Island', badge: 'Regional Chair', badgeClass: 'badge-gold' },
    { icon: '📝', title: 'Founder – Smaksi Menulis Literacy Program', body: 'Impacting 1,300+ students from 100+ schools · 32 high-profile volunteers', badge: 'Founder', badgeClass: 'badge-navy' },
    { icon: '💰', title: 'Project Leader – AJSSR Fundraiser', body: 'Raised IDR 95M · 7 national corporate sponsors including Indosat', badge: 'Leader', badgeClass: 'badge-navy' },
  ],
};

function AchItem({ icon, title, body, badge, badgeClass }) {
  return (
    <div className="ach-item">
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'white', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem', flexShrink: 0,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
          <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.4 }}>{title}</span>
          <span className={`badge ${badgeClass}`} style={{ flexShrink: 0 }}>{badge}</span>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{body}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [active, setActive] = useState('academic');
  const items = data[active];

  return (
    <section id="achievements" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <span className="section-label">Prestasi</span>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          National-level recognition across academics, sports, public speaking, and religious studies.
        </p>

        {/* Tab row */}
        <div className="tab-row" style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${active === t.id ? 'active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Achievement grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12 }}>
          {items.map((item, i) => (
            <AchItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
