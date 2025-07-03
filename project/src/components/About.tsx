import React from 'react';

const About: React.FC = () => {
  const achievements = [
    'Pursuing B.Tech in AI & Data Science in Saveetha Engineering College',
    'Built ISL Translator with CNN',
    'Object Detection using YOLOv8',
    'Hackathon & Tech Forum Contributor'
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="timeline">
        {achievements.map((achievement, index) => (
          <div key={index} className="event">
            {achievement}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;