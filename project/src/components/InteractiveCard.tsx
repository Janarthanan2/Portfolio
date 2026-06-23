import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const InteractiveCard: React.FC<Props> = ({ children, className = '', style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(useSpring(y, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(useSpring(x, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Spotlight position
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Tilt position (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    
    x.set(mouseXRel / width - 0.5);
    y.set(mouseYRel / height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const spotlightStyle = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 230, 118, 0.15), transparent 40%)`;
  const reflectionStyle = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 40%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        position: 'relative',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        overflow: 'hidden',
        background: 'var(--card-bg)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 20px 60px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
      className={className}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Dynamic Glow Spotlight inside the card */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: spotlightStyle,
        }}
      />
      
      {/* Glass border reflection */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[20px] transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: reflectionStyle,
        }}
      />

      <div style={{ transform: 'translateZ(20px)', height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default InteractiveCard;
