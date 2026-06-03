import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/resume';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <div style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '0.25rem',
          }}>
            Prajwal Ravi Teli
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            Full Stack Developer · Bengaluru, India
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { icon: <FiGithub size={16} />, href: personal.github },
            { icon: <FiLinkedin size={16} />, href: personal.linkedin },
            { icon: <FiMail size={16} />, href: `mailto:${personal.email}` },
          ].map(({ icon, href }, i) => (
            <motion.a
              key={i} href={href} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#00d4ff' }}
              style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--glass)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Prajwal Ravi Teli
        </p>
      </div>
    </footer>
  );
}
