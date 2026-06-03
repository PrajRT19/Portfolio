import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <span style={{
        display: 'inline-block',
        fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem',
        fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#00d4ff', marginBottom: '0.75rem',
        padding: '0.35rem 0.9rem',
        border: '1px solid rgba(0,212,255,0.25)',
        borderRadius: '100px',
        background: 'rgba(0,212,255,0.05)',
      }}>
        {label}
      </span>
      <h2 style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800,
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '0.75rem',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
