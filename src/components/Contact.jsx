import { useState } from 'react';
import { Mail, Phone, Instagram, ExternalLink, MapPin, Send, Check } from './Icons';

const contactItems = [
  { Icon: Mail,         label: 'Email',     value: 'zahid23022009@gmail.com',  href: 'mailto:zahid23022009@gmail.com' },
  { Icon: Phone,        label: 'Phone',     value: '+62 813-2208-5884',        href: 'tel:+6281322085884' },
  { Icon: Instagram,    label: 'Instagram', value: '@zahid.asshidqi',          href: 'https://www.instagram.com/zahid.asshidqi' },
  { Icon: ExternalLink, label: 'Bio.site',  value: 'bio.site/zahidasshidqi',   href: 'https://bio.site/zahidasshidqi' },
  { Icon: MapPin,       label: 'Location',  value: 'Cibubur, Depok, West Java', href: null },
];

const openTo = [
  { icon: '🤝', text: 'Sponsorship & Partnership' },
  { icon: '🎤', text: 'Speaking & MC Opportunities' },
  { icon: '📚', text: 'Mentorship & Collaboration' },
  { icon: '⚽', text: 'Football Scouting & Trials' },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // FormSubmit needs no account; the first message triggers a one-time
      // activation email to the address below before delivery begins.
      const res = await fetch('https://formsubmit.co/ajax/zahid23022009@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const fieldStyle = {
    width: '100%', padding: '11px 14px', fontSize: '0.88rem',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
    background: 'white', color: 'var(--text)', fontFamily: 'inherit',
  };
  const labelStyle = {
    display: 'block', fontSize: '0.78rem', fontWeight: 600,
    color: 'var(--text-secondary)', marginBottom: 6,
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <span className="section-label">Kontak</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Open to collaborations, speaking opportunities, sponsorships, or just a friendly message.
        </p>

        {/* What Zahid is open to */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 40 }}>
          {openTo.map(item => (
            <span key={item.text} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 100,
              background: 'white', border: '1px solid var(--border)',
              fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-secondary)',
            }}>
              <span aria-hidden="true">{item.icon}</span> {item.text}
            </span>
          ))}
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Contact methods */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactItems.map(c => {
              const Inner = (
                <>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'var(--bg-alt)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', border: '1px solid var(--border)',
                    flexShrink: 0,
                  }}>
                    <c.Icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 2 }}>
                      {c.label}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: c.href ? 'var(--primary)' : 'var(--text)' }}>
                      {c.value}
                    </span>
                  </div>
                </>
              );
              const baseStyle = {
                display: 'flex', alignItems: 'center', gap: 14,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '16px 20px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              };
              const hoverIn = e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,58,107,0.10)';
              };
              const hoverOut = e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              };
              return c.href ? (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={baseStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {Inner}
                </a>
              ) : (
                <div key={c.label} style={baseStyle}>{Inner}</div>
              );
            })}
          </div>

          {/* Contact form */}
          <div style={{
            background: 'white', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '32px',
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>
              Send a message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
              Whether you are a school, organization, sponsor, or fellow student — I would love to hear from you.
            </p>

            {status === 'success' ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', gap: 12, padding: '24px 0',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#ECFDF5', color: '#047857',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Check size={28} />
                </div>
                <div style={{ fontWeight: 700, color: 'var(--text)' }}>Thank you!</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: 320, lineHeight: 1.6 }}>
                  Your message has been sent. Zahid will get back to you soon.
                </p>
                <button type="button" className="btn btn-outline"
                  onClick={() => setStatus('idle')} style={{ marginTop: 4 }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label htmlFor="cf-name" style={labelStyle}>Name</label>
                  <input id="cf-name" name="name" type="text" required
                    value={form.name} onChange={update}
                    placeholder="Your name" style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="cf-email" style={labelStyle}>Email</label>
                  <input id="cf-email" name="email" type="email" required
                    value={form.email} onChange={update}
                    placeholder="you@example.com" style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="cf-message" style={labelStyle}>Message</label>
                  <textarea id="cf-message" name="message" required rows={4}
                    value={form.message} onChange={update}
                    placeholder="Write your message…"
                    style={{ ...fieldStyle, resize: 'vertical' }} />
                </div>

                {status === 'error' && (
                  <p role="alert" style={{ fontSize: '0.82rem', color: '#B91C1C' }}>
                    Something went wrong. Please try again, or email{' '}
                    <a href="mailto:zahid23022009@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      zahid23022009@gmail.com
                    </a>.
                  </p>
                )}

                <button type="submit" className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
