
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 100,
  baseHue = 200, // Sky blueish
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "transparent",
}: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const particlePropsLength = 9;
  const baseTTL = 50;
  const rangeTTL = 150;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColorRef = useRef(backgroundColor);

  useEffect(() => {
    backgroundColorRef.current = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;
    let particleProps = new Float32Array(particleCount * particlePropsLength);
    let center = [0, 0];

    const resize = () => {
        if (!canvas || !container) return;
        const { innerWidth, innerHeight } = window;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        center = [0.5 * canvas.width, 0.5 * canvas.height];
    };

    const initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particleCount * particlePropsLength);
      for (let i = 0; i < particleProps.length; i += particlePropsLength) {
        initParticle(i);
      }
    };

    const initParticle = (i: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      let x, y, vx, vy, life, ttl, speed, radius, hue;

      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      vx = 0;
      vy = 0;
      life = 0;
      ttl = baseTTL + Math.random() * rangeTTL;
      speed = baseSpeed + Math.random() * rangeSpeed;
      radius = baseRadius + Math.random() * rangeRadius;
      hue = baseHue + Math.random() * 50; // Variation

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      
      tick++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Optional: Fade effect instead of clearRect for trails
      // ctx.fillStyle = backgroundColorRef.current;
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1;
      ctx.lineCap = "round"; // "butt" or "round"

      const renderParticle = (i: number) => {
        let x = particleProps[i];
        let y = particleProps[i + 1];
        let n = noise3D(x * xOff, y * yOff, tick * zOff) * 0.5 + 0.5; // Normalized 0-1
        let vx = Math.cos(n * Math.PI * 4) * particleProps[i + 6]; // 4 rotations
        let vy = Math.sin(n * Math.PI * 4) * particleProps[i + 6];
        let life = particleProps[i + 4];
        let ttl = particleProps[i + 5];
        let speed = particleProps[i + 6];
        let x2 = x + vx;
        let y2 = y + vy;
        let radius = particleProps[i + 7];
        let hue = particleProps[i + 8];

        drawParticle(x, y, x2, y2, life, ttl, radius, hue);

        life++;

        particleProps[i] = x2;
        particleProps[i + 1] = y2;
        particleProps[i + 2] = vx;
        particleProps[i + 3] = vy;
        particleProps[i + 4] = life;

        (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
      };

      const drawParticle = (
        x: number,
        y: number,
        x2: number,
        y2: number,
        life: number,
        ttl: number,
        radius: number,
        hue: number
      ) => {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineWidth = radius;
        // Alpha based on life
        const alpha = 1 - life / ttl; 
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      };

      const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
      };

      for (let i = 0; i < particlePropsLength * particleCount; i += particlePropsLength) {
        renderParticle(i);
      }

      requestAnimationFrame(draw);
    };
    
    // A simple pseudo-noise 3D function
    const noise3D = (x: number, y: number, z: number) => {
        // Simple superposition of sine waves to create chaotic flow
        return Math.sin(x) * Math.cos(y) * Math.sin(z) + 
               Math.cos(x * 0.5) * Math.sin(y * 0.5) * Math.cos(z * 0.5) +
               Math.sin(x * 2 + z) * 0.2;
    };

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", resize);
    return () => {
        window.removeEventListener("resize", resize);
    };
  }, [particleCount, baseHue]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${containerClassName}`} ref={containerRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
         <canvas ref={canvasRef} className="block w-full h-full" />
      </motion.div>
      
      <div className={`relative z-10 h-full ${className}`}>
        {children}
      </div>
    </div>
  );
};
