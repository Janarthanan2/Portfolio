import React from 'react';

interface Project {
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ISL Translator',
      description: 'Real-time gesture detection using CNN.'
    },
    {
      title: 'YOLOv8 Detection',
      description: 'Object detection with boundary alerts.'
    },
    {
      title: 'Movie Recommender',
      description: 'Content + collaborative filtering recommender.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            title={project.description}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;