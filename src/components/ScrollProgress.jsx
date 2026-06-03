import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '2px', zIndex: 200,
        scaleX, transformOrigin: '0%',
        background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #f43f5e)',
      }}
    />
  );
}
