import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setActive(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 2rem',
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', cursor: 'pointer',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PRT
        </motion.div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <motion.button
              key={l}
              onClick={() => scrollTo(l)}
              whileHover={{ color: '#00d4ff' }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 500,
                color: active === l ? '#00d4ff' : 'var(--text-secondary)',
                transition: 'color 0.2s', letterSpacing: '0.02em',
              }}
            >
              {l}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{
              background: 'var(--glass)', border: '1px solid var(--border)',
              borderRadius: '8px', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--text-secondary)',
            }}
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </motion.button>
        </div>

        {/* Mobile */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }} className="flex md:hidden">
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(o => !o)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 600,
                  color: 'var(--text-primary)', padding: '0.5rem 0' }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
