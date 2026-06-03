import { motion } from 'framer-motion';

export default function LoadingScreen({ done }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.5, delay: done ? 0.1 : 0 }}
      onAnimationComplete={() => {}}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: '#050508',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1.5rem',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '48px', height: '48px', borderRadius: '50%',
          border: '2px solid transparent',
          borderTop: '2px solid #00d4ff',
          borderRight: '2px solid #7c3aed',
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.875rem', color: '#8888aa', letterSpacing: '0.2em' }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}
