import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  date: string;
  institution: string;
  description: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      date: '2019-2020',
      institution: 'Velammal Matriculation Higher Secondary School',
      description: 'Secured 80% in SSLC (Class 10). Participated in inter-school quiz and mathematics Olympiad.'
    },
    {
      date: '2021-2022',
      institution: 'Velammal Matriculation Higher Secondary School',
      description: 'Completed my HSC (Class 12) with 85.83%.'
    },
    {
      date: '2022–2026',
      institution: 'Saveetha Engineering College',
      description: 'Pursuing B.Tech in Artificial Intelligence and Data Science (CGPA: 9.05). Participated in Smart India Hackathon 2024, built projects using Python, TensorFlow & React. Member of Tech society club and technical event organizer.'
    }
  ];

  return (
    <section id="education" className="education">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div className="timeline-items">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;