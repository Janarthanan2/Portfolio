import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

import InteractiveCard from './InteractiveCard';

const Internship: React.FC = () => {
  const responsibilities = [
    'Worked on real-world AI and data science projects, collaborating with cross-functional teams.',
    'Developed and deployed machine learning models for data analysis and prediction.',
    'Gained hands-on experience in Python, TensorFlow, and data preprocessing techniques.',
    'Contributed to project documentation and presented findings to mentors and peers.'
  ];

  return (
    <section id="internship">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Internship
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <InteractiveCard
          style={{
            padding: '2.5rem',
          }}
        >
          {/* Decorative gradient accent */}
        <div style={{
          position: 'absolute', top: '-2.5rem', left: '-2.5rem', right: '-2.5rem', height: '4px',
          background: 'linear-gradient(90deg, var(--accent-color), #00C853)',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--accent-color), #00C853)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', boxShadow: '0 4px 15px rgba(0,230,118,0.3)', flexShrink: 0,
          }}>
            <Briefcase size={24} />
          </div>
          <div>
            <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-color)', margin: 0 }}>
              AI & Data Science Intern
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: 500, margin: '0.2rem 0 0' }}>
              Arjun Vision Tech Solutions
            </p>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.25rem', marginTop: '0.25rem' }}>
          June 2024 - August 2024
        </p>

        <p style={{ fontStyle: 'italic', opacity: 0.8, marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Gained hands-on experience in AI and data science, working on real-world projects.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
            >
              <CheckCircle2 size={18} style={{ color: 'var(--accent-color)', marginTop: '3px', flexShrink: 0 }} />
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </motion.div>
          ))}
        </div>
        </InteractiveCard>
      </motion.div>
    </section>
  );
};

export default Internship;