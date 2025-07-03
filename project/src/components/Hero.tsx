import React from 'react';
import ParticleBackground from './ParticleBackground';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <ParticleBackground />
      <div className="hero-container">
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Janarthanan V K" 
            className="hero-main-image"
          />
        </div>
        <div className="hero-text">
          <TypewriterText 
            text="Hi, I'm Janarthanan V K" 
            className="hero-title"
          />
          <p>AI & Data Science Enthusiast | Software Developer</p>
          <div className="hero-buttons">
            <a href="mailto:janartanan47@gmail.com" className="btn">Hire Me</a>
            <a href="#" className="btn" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;