import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import TypewriterText from './TypewriterText';
import ParticleBackground from './ParticleBackground';
import janarthananResume from '../assets/Janarthanan_Resume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ position: 'relative' }}>
      <ParticleBackground colorTheme="white" isFixed={false} />
      <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/Janarthanan.jpg"
            alt="Janarthanan V K"
            className="hero-main-image"
            fetchPriority="high"
            width="500"
            height="500"
          />
        </motion.div>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TypewriterText
            text="Hi, I'm Janarthanan V K"
            className="hero-title"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            AI & Data Science Enthusiast | Software Developer
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="mailto:janartanan47@gmail.com" className="btn">Hire Me</a>
            <a href={janarthananResume} className="btn" download>Download Resume</a>
          </motion.div>
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}
          >
            <a href="https://github.com/Janarthanan2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
              style={{ color: 'white', opacity: 0.8, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            >
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/janarthananvk-57b9b3256/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
              style={{ color: 'white', opacity: 0.8, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, cursor: 'pointer', color: 'white', opacity: 0.7 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;