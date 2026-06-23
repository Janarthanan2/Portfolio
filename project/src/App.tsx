import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import ParticleBackground from './components/ParticleBackground';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="app">
          <AnimatedBackground />
          <ParticleBackground colorTheme="green" isFixed={true} />
          <Header />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Internship />
          <Contact />
          <Footer />
        </main>
      )}
    </ThemeProvider>
  );
}

export default App;