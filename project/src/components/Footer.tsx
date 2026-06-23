import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Janarthanan2', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/janarthananvk-57b9b3256/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:janartanan47@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--nav-bg), #00352a)',
      color: 'white',
      padding: '3rem 2rem 1.5rem',
      marginTop: '2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Name */}
        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>
          Janarthanan V K
        </div>

        {/* Quick Nav */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem 1.5rem', marginBottom: '1.5rem' }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 500,
                padding: '0.25rem 0', transition: 'color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-color)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: 'white',
                  transition: 'all 0.3s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem' }} />

        {/* Copyright */}
        <p style={{ fontSize: '0.85rem', opacity: 0.6, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
          &copy; 2025 Janarthanan V K — Made with <Heart size={14} style={{ color: 'var(--accent-color)' }} /> in Chennai
        </p>
      </div>
    </footer>
  );
};

export default Footer;