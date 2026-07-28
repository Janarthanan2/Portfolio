import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import SectionBackground from './components/SectionBackground';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Internship = lazy(() => import('./components/Internship'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
          <SectionBackground />
          <Header />
          <Hero />
          <Suspense fallback={<div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
            <About />
            <Education />
            <Skills />
            <Projects />
            <Internship />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      )}
    </ThemeProvider>
  );
}

export default App;