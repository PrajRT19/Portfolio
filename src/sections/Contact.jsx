import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { personal } from '../data/resume';

const contactLinks = [
  { icon: <FiMail size={20} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, accent: '#00d4ff' },
  { icon: <FiGithub size={20} />, label: 'GitHub', value: 'prajwalteli', href: personal.github, accent: '#7c3aed' },
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'prajwalteli', href: personal.linkedin, accent: '#0a66c2' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, accent: '#10b981' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: personal.location, href: null, accent: '#f59e0b' },
];

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '7rem 2rem',
      background: 'var(--bg-secondary)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <SectionTitle
          label="Contact"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and interesting conversations."
        />

        {/* Big CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: '2.5rem',
            background: 'var(--bg-card)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #f43f5e)',
          }} />

          <h3 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: 'var(--text-primary)', marginBottom: '0.75rem',
          }}>
            Ready to build something great?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
            Whether it's an internship, collaboration, or just a chat about tech — my inbox is always open.
          </p>

          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              padding: '0.85rem 2.2rem', borderRadius: '12px',
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              color: '#fff',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', letterSpacing: '0.02em',
            }}
          >
            Send me an email →
          </motion.a>
        </motion.div>

        {/* Links grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {contactLinks.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {c.href ? (
                <motion.a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, borderColor: `${c.accent}50` }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    padding: '1.1rem 1.3rem', borderRadius: '12px',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: `${c.accent}12`, border: `1px solid ${c.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.accent,
                  }}>
                    {c.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '0.15rem' }}>{c.value}</div>
                  </div>
                </motion.a>
              ) : (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  padding: '1.1rem 1.3rem', borderRadius: '12px',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                }}>
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: `${c.accent}12`, border: `1px solid ${c.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.accent,
                  }}>
                    {c.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '0.15rem' }}>{c.value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
