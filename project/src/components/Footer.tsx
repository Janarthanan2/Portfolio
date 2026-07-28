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
    { icon: Github, href: 'https://github.com/Janarthanan2', label: 'GitHub', color: '#ffffff' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/janarthananvk-57b9b3256/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Mail, href: 'mailto:janartanan47@gmail.com', label: 'Email', color: '#EA4335' },
  ];

  return (
    <footer style={{
      position: 'relative',
      color: 'white',
      padding: '3rem 2rem 1.5rem',
      marginTop: '2rem',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image flipped horizontally */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/backgrounds/bg-footer.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'scaleY(1)',
        zIndex: 0,
      }} />
      {/* Dark overlay for readability - toned down for brighter image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,20,15,0.85), rgba(0,35,25,0.75))',
        zIndex: 0,
      }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Name */}
        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
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
                padding: '0.5rem 0.75rem', minHeight: '44px', minWidth: '44px', transition: 'color 0.3s',
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
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: 'white',
                  transition: 'all 0.3s', textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; 
                  e.currentTarget.style.transform = 'translateY(-3px)'; 
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                }}
              >
                <Icon size={20} color={social.color} />
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