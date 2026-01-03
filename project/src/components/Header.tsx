import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </div>

      <div className="scroll-to-top" onClick={scrollToTop} title="Scroll to Top">
        <ArrowUp size={20} />
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Janarthanan V K</div>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            <li><button onClick={() => scrollToSection('education')}>Education</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;