import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personal } from '../data/resume';

const roles = personal.roles;

function AnimatedRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -8 }}
      transition={{ duration: 0.4 }}
      style={{
        background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
    >
      {roles[idx]}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '8rem 2rem 4rem',
    }}>
      {/* Animated background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '15%', left: '10%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', top: '40%', right: '10%',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute', bottom: '20%', left: '40%',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.4rem 1rem', borderRadius: '100px',
            border: '1px solid rgba(0,212,255,0.2)',
            background: 'rgba(0,212,255,0.05)',
            fontSize: '0.8rem', color: '#00d4ff',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 500, letterSpacing: '0.05em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00d4ff',
              animation: 'pulse 2s infinite', display: 'inline-block' }} />
            Open to Internships & Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.05, marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}
        >
          {personal.name}
        </motion.h1>

        {/* Dynamic Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)',
            marginBottom: '1.5rem', minHeight: '3rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          }}
        >
          <AnimatedRole />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 2.5rem',
          }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,212,255,0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.8rem 1.8rem', borderRadius: '10px', cursor: 'pointer',
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              border: 'none', color: '#fff',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem',
              letterSpacing: '0.02em',
            }}
          >
            View Projects
          </motion.button>

          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.8rem 1.8rem', borderRadius: '10px', cursor: 'pointer',
              background: 'var(--glass)', border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            <FiMail size={16} /> Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          {[
            { icon: <FiGithub size={20} />, href: personal.github, label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: personal.linkedin, label: 'LinkedIn' },
            { icon: <FiMail size={20} />, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label} href={href} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#00d4ff' }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'var(--glass)', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
