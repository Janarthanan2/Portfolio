import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg">
      {/* Floating gradient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="bg-orb bg-orb-4" />

      {/* Subtle grid overlay */}
      <div className="bg-grid" />
    </div>
  );
};

export default AnimatedBackground;
