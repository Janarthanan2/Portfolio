import React from 'react';
import ParticleBackground from './ParticleBackground';
import TypewriterText from './TypewriterText';
import janarthananImage from '../assets/Janarthanan.jpg';
import janarthananResume from '../assets/Janarthanan_Resume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <ParticleBackground />
      <div className="hero-container">
        <div className="hero-image">
          <img
            src={janarthananImage}
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
            <a href={janarthananResume} className="btn" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;