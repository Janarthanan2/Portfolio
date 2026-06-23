import React, { useEffect, useRef } from 'react';

interface Props {
  colorTheme?: 'green' | 'white';
  isFixed?: boolean;
}

const ParticleBackground: React.FC<Props> = ({ colorTheme = 'green', isFixed = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (isFixed) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        canvas.width = parent ? parent.clientWidth : window.innerWidth;
        canvas.height = parent ? parent.clientHeight : window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (isFixed) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      }
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    if (isFixed) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('mouseout', handleMouseLeave);

    // Initialize particles
    const maxParticles = 60; // Moderate amount
    particlesRef.current = [];

    for (let i = 0; i < maxParticles; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.2, // Very slow initial speed
        dy: (Math.random() - 0.5) * 0.2,
      });
    }

    const connectionDistance = 150;
    const mouseRadius = 180;
    
    const rgb = colorTheme === 'white' ? '255, 255, 255' : '0, 200, 83';

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * (colorTheme === 'white' ? 0.25 : 0.35);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(particle => {
        // Mouse interaction (repel)
        const dxMouse = mouse.x - particle.x;
        const dyMouse = mouse.y - particle.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          const forceDirectionX = dxMouse / distMouse;
          const forceDirectionY = dyMouse / distMouse;
          const force = (mouseRadius - distMouse) / mouseRadius;
          const repelStrength = 1.5; // Very calm repel

          particle.dx -= forceDirectionX * force * repelStrength * 0.05;
          particle.dy -= forceDirectionY * force * repelStrength * 0.05;
        }

        // Apply velocity limit
        const speed = Math.sqrt(particle.dx * particle.dx + particle.dy * particle.dy);
        if (speed > 0.5) { // Very slow speed limit
          particle.dx = (particle.dx / speed) * 0.5;
          particle.dy = (particle.dy / speed) * 0.5;
        }

        // Add slight friction
        particle.dx *= 0.98;
        particle.dy *= 0.98;

        // Restore natural movement if too slow
        if (speed < 0.1) { // Very slow baseline movement
          particle.dx += (Math.random() - 0.5) * 0.05;
          particle.dy += (Math.random() - 0.5) * 0.05;
        }

        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${colorTheme === 'white' ? 0.5 : 0.7})`;
        ctx.fill();
      });

      // Draw mouse interactive lines
      particles.forEach(particle => {
        const dxMouse = mouse.x - particle.x;
        const dyMouse = mouse.y - particle.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          const opacity = (1 - distMouse / mouseRadius) * (colorTheme === 'white' ? 0.4 : 0.6);
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (isFixed) {
        window.removeEventListener('mousemove', handleMouseMove);
      } else {
        canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [colorTheme, isFixed]);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
      style={{
        position: isFixed ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
