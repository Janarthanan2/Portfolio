import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Award, Users } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const About: React.FC = () => {
  const achievements = [
    { text: 'Pursuing B.Tech in AI & Data Science at Saveetha Engineering College', icon: Brain },
    { text: 'Built ISL Translator with CNN', icon: Eye },
    { text: 'Object Detection using YOLOv8', icon: Award },
    { text: 'Hackathon & Tech Forum Contributor', icon: Users },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.85, lineHeight: 1.8, fontSize: '1.05rem' }}
      >
        A passionate AI & Data Science student with a knack for building intelligent solutions.
        I love exploring the intersection of deep learning, computer vision, and web development
        to create impactful real-world applications.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
            >
              <InteractiveCard
                className="about-card h-full"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.75rem',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--accent-color), #00C853)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', boxShadow: '0 4px 12px rgba(0,230,118,0.3)'
                }}>
                  <Icon size={22} />
                </div>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>{achievement.text}</p>
              </InteractiveCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default About;