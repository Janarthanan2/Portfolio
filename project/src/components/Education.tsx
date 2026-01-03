import React from 'react';

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
      description: 'Pursuing B.Tech in Artificial Intelligence and Data Science (current CGPA: 8.53). Participated in Smart India Hackathon 2024, built projects using Python, TensorFlow & React. Member of Tech society club and technical event organizer.'
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="education-heading">Education</h2>
      <div className="timeline-items">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;