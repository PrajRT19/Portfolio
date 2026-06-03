import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/resume';

export default function Achievements() {
  return (
    <section id="achievements" style={{
      padding: '7rem 2rem',
      background: 'var(--bg-secondary)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle label="Achievements" title="Certifications & Recognition" subtitle="Hackathon wins, certifications, and athletic achievements." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 8px 40px ${a.accent}15`,
                borderColor: `${a.accent}40`,
              }}
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
            >
              {/* Glow corner */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                background: `radial-gradient(circle at top right, ${a.accent}12, transparent 70%)`,
              }} />

              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem',
                color: 'var(--text-primary)', marginBottom: '0.3rem',
              }}>
                {a.title}
              </h3>
              <p style={{
                fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em',
                color: a.accent, marginBottom: '0.75rem', textTransform: 'uppercase',
              }}>
                {a.subtitle}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
