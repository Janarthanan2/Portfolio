import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ISL Translator',
      description: 'An Automatic Indian Sign Language translator built using a Custom Convolutional Neural Network (CNN). Translates ISL gestures into text and speech in real-time.',
      link: 'https://github.com/Janarthanan2/Automatic-Indian-Sign-Language-Translator-ISL',
      tags: ['CNN', 'Python', 'Computer Vision']
    },
    {
      title: 'Real-Time Object Detection & Alert System',
      description: 'Advanced object detection system utilizing YOLO architecture for high-accuracy, real-time object tracking and boundary alerts.',
      link: 'https://github.com/Janarthanan2/Real-Time-Object-Detection-and-Alert-System',
      tags: ['YOLOv8', 'Deep Learning', 'OpenCV']
    },
    {
      title: 'Movie Ticket Booking System',
      description: 'Comprehensive movie ticket booking platform with seat selection, database integration, and admin management.',
      link: 'https://github.com/Janarthanan2/Movie-Ticket-Booking',
      tags: ['Java', 'Spring Boot', 'Full Stack']
    },
    {
      title: 'AIMMS Project',
      description: 'AI-Enhanced Money Monitoring System for intelligent financial tracking and predictive analytics.',
      link: 'https://github.com/Janarthanan2/aimms_project',
      tags: ['AI/ML', 'Python', 'Data Science']
    }
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            style={{ height: '100%' }}
          >
            <InteractiveCard className="project-card h-full" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginTop: 0 }}>{project.title}</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>{project.description}</p>
              
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'
              }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px',
                    background: 'rgba(0,230,118,0.1)', color: 'var(--accent-color)', fontWeight: 600
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ 
                  zIndex: 10, position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600
              }}>
                View Project <ExternalLink size={16} />
              </a>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
