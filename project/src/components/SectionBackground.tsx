import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// Background images mapped to sections
const sectionBackgrounds = [
  { id: 'hero', image: '/backgrounds/bg-hero.jpg', overlay: 'linear-gradient(135deg, rgba(0,77,64,0.4), rgba(0,176,155,0.25))' },
  { id: 'about', image: '/giphy.gif', overlay: 'linear-gradient(135deg, rgba(10,10,30,0.45), rgba(60,20,80,0.3))' },
  { id: 'education', image: '/backgrounds/bg-galaxy.jpg', overlay: 'linear-gradient(135deg, rgba(10,10,30,0.7), rgba(30,20,60,0.55))' },
  { id: 'skills', image: '/backgrounds/bg-laptop.jpg', overlay: 'linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,40,40,0.6))' },
  { id: 'projects', image: '/backgrounds/bg-stars.jpg', overlay: 'linear-gradient(135deg, rgba(10,15,40,0.65), rgba(40,20,60,0.5))' },
  { id: 'internship', image: '/backgrounds/bg-laptop.jpg', overlay: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,30,30,0.55))' },
  { id: 'contact', image: '/backgrounds/bg-contact.jpg', overlay: 'linear-gradient(135deg, rgba(10,20,50,0.65), rgba(20,10,40,0.5))' },
];

// Transition variants for different morphing effects
const transitionVariants: Record<string, any> = {
  // Smooth scale + fade
  scaleIn: {
    initial: { opacity: 0, scale: 1.15 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  // Blur dissolve
  blurDissolve: {
    initial: { opacity: 0, filter: 'blur(30px) brightness(1.3)', scale: 1.05 },
    animate: { opacity: 1, filter: 'blur(0px) brightness(1)', scale: 1 },
    exit: { opacity: 0, filter: 'blur(20px) brightness(0.7)', scale: 1.02 },
  },
  // Radial reveal
  radialReveal: {
    initial: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
    animate: { opacity: 1, clipPath: 'circle(150% at 50% 50%)' },
    exit: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
  },
  // Diagonal wipe
  diagonalWipe: {
    initial: { opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    animate: { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    exit: { opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
  },
  // Zoom blur
  zoomBlur: {
    initial: { opacity: 0, scale: 1.4, filter: 'blur(15px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
  },
  // Iris reveal
  irisReveal: {
    initial: { opacity: 0, clipPath: 'inset(50% 50% 50% 50% round 50%)' },
    animate: { opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 0%)' },
    exit: { opacity: 0, clipPath: 'inset(50% 50% 50% 50% round 50%)' },
  },
  // Vertical curtain
  verticalCurtain: {
    initial: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0%)' },
    exit: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
  },
};

// Cycle through transition types based on section index
const transitionKeys = Object.keys(transitionVariants);
const getTransitionForIndex = (index: number) => {
  const key = transitionKeys[index % transitionKeys.length];
  return transitionVariants[key];
};

const SectionBackground: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll progress for subtle zoom
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const sectionIds = sectionBackgrounds.map(s => s.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      // Special case: hero doesn't have an id, it's the first section
      let element: HTMLElement | null = null;
      if (id === 'hero') {
        element = document.querySelector('.hero');
      } else {
        element = document.getElementById(id);
      }

      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: '-10% 0px -10% 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const currentBg = sectionBackgrounds[activeIndex];
  const variant = getTransitionForIndex(activeIndex);

  // Parallax offset based on mouse position
  const parallaxX = mousePos.x * 15;
  const parallaxY = mousePos.y * 15;
  const dynamicScale = 1.05 + scrollProgress * 0.05;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg.id + currentBg.image}
          initial={variant.initial}
          animate={{
            ...variant.animate,
            x: parallaxX,
            y: parallaxY,
          }}
          exit={variant.exit}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            clipPath: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.4, ease: 'easeOut' },
          }}
          style={{
            position: 'absolute',
            inset: '-40px',
            backgroundImage: `url(${currentBg.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `scale(${dynamicScale})`,
            willChange: 'transform, opacity, filter, clip-path',
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: currentBg.overlay,
              transition: 'background 1s ease',
            }}
          />

          {/* Noise texture overlay for depth */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.03,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: '128px 128px',
            }}
          />

          {/* Vignette effect */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating light particles that react to mouse */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i * 1.2) * 100, 0],
              y: [0, Math.cos(i * 0.8) * 80, 0],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            style={{
              position: 'absolute',
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(0,230,118,${0.08 + i * 0.02}), transparent 70%)`,
              top: `${15 + i * 13}%`,
              left: `${10 + i * 15}%`,
              filter: 'blur(40px)',
              transform: `translate(${mousePos.x * (5 + i * 3)}px, ${mousePos.y * (5 + i * 3)}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Section transition indicator (glowing line at bottom) */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, var(--accent-color), transparent)`,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default SectionBackground;
