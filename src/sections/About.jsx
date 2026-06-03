import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { personal, stats } from '../data/resume';
import { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const num = parseFloat(target);
    if (isNaN(num)) { setCount(target); return; }
    const duration = 1500;
    const steps = 60;
    const step = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setCount(Number.isInteger(num) ? Math.round(current) : current.toFixed(2));
      if (current >= num) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const interests = [
  { icon: '🛡️', label: 'AI Security' },
  { icon: '📈', label: 'Stock Trading' },
  { icon: '🌐', label: 'Full Stack Dev' },
  { icon: '🧠', label: 'DSA & Problem Solving' },
  { icon: '🐳', label: 'DevOps & Docker' },
  { icon: '🤾', label: 'Sports & Athletics' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle label="About Me" title="Who I Am" subtitle="A driven CS student building things that matter — from secure AI tools to real-time trading systems." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            gridColumn: 'span 2', padding: '2rem',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '16px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
          }} />
          <p style={{
            color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem',
          }}>
            {personal.summary}
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['Bengaluru, India', 'NMIT — CSE', 'CGPA: 8.62', 'Class of 2027'].map(tag => (
              <span key={tag} style={{
                padding: '0.3rem 0.8rem', borderRadius: '100px',
                background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)',
                fontSize: '0.8rem', color: '#00d4ff', fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            padding: '2rem',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '16px',
          }}
        >
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Interests</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {interests.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 0.8rem', borderRadius: '10px',
                background: 'var(--glass)', border: '1px solid var(--border)',
                fontSize: '0.85rem', color: 'var(--text-secondary)',
              }}>
                <span style={{ fontSize: '1rem' }}>{icon}</span> {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(0,212,255,0.3)' }}
            style={{
              padding: '1.5rem', borderRadius: '14px', textAlign: 'center',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              transition: 'border-color 0.3s',
            }}
          >
            <div style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem',
            }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
