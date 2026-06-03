import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/resume';

const categoryIcons = {
  'Languages': '⚡',
  'Web Development': '🌐',
  'APIs & Auth': '🔐',
  'Databases': '🗄️',
  'CS Fundamentals': '🧠',
  'Tools': '🛠️',
};

const categoryAccents = {
  'Languages': '#f59e0b',
  'Web Development': '#00d4ff',
  'APIs & Auth': '#f43f5e',
  'Databases': '#10b981',
  'CS Fundamentals': '#7c3aed',
  'Tools': '#8888aa',
};

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" style={{
      padding: '7rem 2rem',
      background: 'var(--bg-secondary)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <SectionTitle label="Technical Skills" title="My Tech Stack" subtitle="Technologies and tools I work with across the full stack." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '3px', height: '100%',
                background: categoryAccents[category] || '#00d4ff',
                borderRadius: '0 2px 2px 0',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.1rem' }}>{categoryIcons[category] || '📦'}</span>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                  color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  {category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + si * 0.04 }}
                    whileHover={{ scale: 1.06, background: `${categoryAccents[category]}15`, borderColor: categoryAccents[category] }}
                    onMouseEnter={() => setHovered(`${category}-${skill}`)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'inline-block',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '100px',
                      background: hovered === `${category}-${skill}` ? `${categoryAccents[category]}12` : 'var(--glass)',
                      border: `1px solid ${hovered === `${category}-${skill}` ? categoryAccents[category] + '50' : 'var(--border)'}`,
                      fontSize: '0.82rem', fontWeight: 500,
                      color: 'var(--text-secondary)',
                      cursor: 'default', transition: 'all 0.2s',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
