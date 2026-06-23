import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'Java Programming', level: 75, category: 'Programming' },
    { name: 'C-Programming', level: 80, category: 'Programming' },
    { name: 'TensorFlow', level: 85, category: 'AI/ML' },
    { name: 'Keras', level: 80, category: 'AI/ML' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'MYSQL', level: 76, category: 'Database' },
    { name: 'Spring Boot', level: 70, category: 'Backend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'OpenCV', level: 80, category: 'Computer Vision' },
    { name: 'scikit-learn', level: 85, category: 'AI/ML' }
  ];

  const categories = ['Programming', 'AI/ML', 'Frontend', 'Backend', 'Database', 'Computer Vision'] as const;
  const categoryColors: Record<typeof categories[number], string> = {
    'Programming': 'from-blue-500 to-blue-600',
    'AI/ML': 'from-purple-500 to-purple-600',
    'Frontend': 'from-green-500 to-green-600',
    'Backend': 'from-orange-500 to-orange-600',
    'Database': 'from-red-500 to-red-600',
    'Computer Vision': 'from-cyan-500 to-cyan-600'
  };

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="skills-container">
        {categories.map((category, catIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          if (categorySkills.length === 0) return null;
          type Category = typeof categories[number];
          const typedCategory = category as Category;
          return (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item-new">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress bg-gradient-to-r ${categoryColors[typedCategory]}`}
                        style={{ width: isInView ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="skills-summary">
        {[
          { number: 8, suffix: '+', label: 'Technologies' },
          { number: 3, suffix: '+', label: 'Years Learning' },
          { number: 10, suffix: '+', label: 'Projects Built' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="summary-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <CountUp target={item.number} suffix={item.suffix} isInView={isInView} />
            <div className="summary-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CountUp: React.FC<{ target: number; suffix: string; isInView: boolean }> = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const duration = 1500;
    const step = duration / target;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <div className="summary-number">{count}{suffix}</div>;
};

export default Skills;