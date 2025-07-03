import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'ISL Translator',
      description: 'Real-time gesture detection using CNN.',
      link: 'https://github.com/yourusername/isl-translator'
    },
    {
      title: 'REAL TIME OBJECT DETECTION AND ALERT SYSTEM',
      description: 'Object detection with boundary alerts.',
      link: 'https://github.com/Janarthanan2/Real-Time-Object-Detection-and-Alert-System.git'
    },
    {
      title: 'Movie Recommender',
      description: 'Content + collaborative filtering recommender.',
      link: 'https://github.com/yourusername/movie-recommender'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const { title, description, link } = project;
          return (
            <div 
              key={index} 
              className="project-card"
              title={description}
            >
              <h3>{title}</h3>
              <p>{description}</p>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
