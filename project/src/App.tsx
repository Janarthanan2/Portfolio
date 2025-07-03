import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;