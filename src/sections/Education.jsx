import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <SectionTitle label="Education" title="Academic Background" />

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: '22px', top: '8px', bottom: '8px', width: '1px',
          background: 'linear-gradient(180deg, #00d4ff, #7c3aed, transparent)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {education.map((ed, i) => (
            <motion.div
              key={ed.institution + ed.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
            >
              {/* Dot */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: ed.highlight
                    ? 'linear-gradient(135deg, #00d4ff22, #7c3aed22)'
                    : 'var(--bg-card)',
                  border: ed.highlight
                    ? '2px solid #00d4ff'
                    : '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>
                  🎓
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01, borderColor: ed.highlight ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.12)' }}
                style={{
                  flex: 1, padding: '1.5rem 1.75rem',
                  background: 'var(--bg-card)',
                  border: ed.highlight ? '1px solid rgba(0,212,255,0.2)' : '1px solid var(--border)',
                  borderRadius: '14px',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.3s',
                }}
              >
                {ed.highlight && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  }} />
                )}

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                  }}>
                    {ed.institution}
                  </h3>
                  <span style={{
                    padding: '0.25rem 0.75rem', borderRadius: '100px',
                    background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                    fontSize: '0.78rem', color: '#00d4ff', fontWeight: 600,
                  }}>
                    {ed.score}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {ed.degree}
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>📍 {ed.location}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>📅 {ed.period}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
