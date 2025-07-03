import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'Java Programming', level: 75, category: 'Programming' },
    { name: 'C-Programming', level: 80, category: 'Programming' },
    { name: 'TensorFlow', level: 85, category: 'AI/ML' },
    { name: 'Keras', level: 80, category: 'AI/ML' },
    { name: 'MongoDB', level: 75, category: 'Database' },
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

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Expertise</h2>
      
      <div className="skills-container">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          if (categorySkills.length === 0) return null;
          type Category = typeof categories[number];
          const typedCategory = category as Category;
          return (
            <div key={category} className="skill-category">
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
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <div className="summary-number">8+</div>
          <div className="summary-label">Technologies</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">3+</div>
          <div className="summary-label">Years Learning</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">10+</div>
          <div className="summary-label">Projects Built</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;