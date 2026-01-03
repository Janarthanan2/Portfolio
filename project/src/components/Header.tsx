import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, ArrowUp, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Basic active section detection
      const sections = ['about', 'education', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Floating Scroll to Top - kept separate for utility */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-8 right-8 z-50 cursor-pointer text-white bg-[var(--accent-color)] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            onClick={scrollToTop}
          >
            <ArrowUp size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centralized Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full transition-all duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-[#00251a]/80 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="px-6 py-3 flex justify-between items-center">

          {/* Logo / Name - Left */}
          <div
            className={`text-2xl font-extrabold cursor-pointer shrink-0 transition-all duration-300 hover:scale-105 ${isScrolled
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-color)] to-emerald-500'
              : 'text-white drop-shadow-md'
              }`}
            onClick={scrollToTop}
          >
            Janarthanan V K
          </div>

          {/* Desktop Nav - Center */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[var(--accent-color)]'
                    }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--accent-color)] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle - Right */}
          <div className="hidden md:block pl-2 border-l border-gray-200 dark:border-gray-700 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle (replaces everything else on mobile) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-[#00251a] rounded-b-3xl border-t border-gray-100 dark:border-gray-800"
            >
              <ul className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${activeSection === item.id
                        ? 'bg-[var(--accent-color)] text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;