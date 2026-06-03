import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/resume';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg, ${project.accent}, ${project.accent}44)`,
      }} />

      <div style={{ padding: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{project.icon}</span>
              {project.featured && (
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
                  color: project.accent, border: `1px solid ${project.accent}40`,
                  background: `${project.accent}10`,
                  padding: '0.2rem 0.6rem', borderRadius: '100px',
                }}>
                  FEATURED
                </span>
              )}
            </div>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem',
              color: 'var(--text-primary)', marginBottom: '0.2rem',
            }}>
              {project.title}
            </h3>
            <p style={{ color: project.accent, fontSize: '0.85rem', fontWeight: 600 }}>
              {project.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <motion.a
              href={project.github} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: project.accent }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--glass)', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              <FiGithub size={16} />
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.1, color: project.accent }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--glass)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s',
                }}
              >
                <FiExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '0.25rem 0.7rem', borderRadius: '100px',
              background: `${project.accent}0d`,
              border: `1px solid ${project.accent}30`,
              fontSize: '0.78rem', fontWeight: 500,
              color: project.accent,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <motion.button
          onClick={() => setExpanded(e => !e)}
          whileHover={{ color: project.accent }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '0.83rem', fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
          {expanded ? 'Show less' : 'View details'}
        </motion.button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border)', marginTop: '1.25rem' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--text-muted)', marginBottom: '0.6rem',
                  }}>
                    Problem Solved
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.8rem',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: 'var(--text-muted)', marginBottom: '0.75rem',
                  }}>
                    Key Features
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none' }}>
                    {project.features.map(f => (
                      <li key={f} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                        color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6,
                      }}>
                        <span style={{ color: project.accent, marginTop: '0.35rem', flexShrink: 0 }}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <SectionTitle label="Projects" title="What I've Built" subtitle="Full-stack systems, AI security tools, and civic platforms — built with care." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}
