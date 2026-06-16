const stats = [
  { icon: '💰', value: 'IDR 95M',  label: 'Raised for social programs',     color: '#C9A227' },
  { icon: '📚', value: '1,300+',   label: 'Students reached via literacy',   color: '#1B3A6B' },
  { icon: '🌏', value: '5 Nations', label: 'Tokyo international exchange',    color: '#10B981' },
  { icon: '🎖️', value: '1.6M+',   label: 'West Java students represented',  color: '#E85D04' },
];

export default function StatsBar() {
  return (
    <div style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="grid-4 stats-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stats-item-border"
              style={{
                padding: '36px 24px', textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: 10 }} aria-hidden="true">{s.icon}</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
