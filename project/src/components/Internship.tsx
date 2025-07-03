import React from 'react';

const Internship: React.FC = () => {
  const responsibilities = [
    'Worked on real-world AI and data science projects, collaborating with cross-functional teams.',
    'Developed and deployed machine learning models for data analysis and prediction.',
    'Gained hands-on experience in Python, TensorFlow, and data preprocessing techniques.',
    'Contributed to project documentation and presented findings to mentors and peers.'
  ];

  return (
    <section id="internship">
      <h2>Internship</h2>
      <p className="internship-role">AI & Data Science Intern</p>
      <p className="internship-company">Arjun Vision Tech Solutions</p>
      <p className="internship-duration">June 2024 - August 2024</p>
      <p className="internship-description">
        Gained hands-on experience in AI and data science, working on real-world projects.
      </p>
      <ul className="internship-list">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Internship;