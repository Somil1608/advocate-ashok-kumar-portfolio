import React, { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    let mouse = { x: 0, y: 0 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      // Create multiple particles on move for dense trail
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    });

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5; // Smaller particles
        this.alpha = 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.015; // Smooth fade
      }
      draw() {
        ctx.shadowColor = 'rgba(195, 166, 90, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(195, 166, 90, ${this.alpha})`; // Gold color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
    />
  );
};

export default CursorParticles;
