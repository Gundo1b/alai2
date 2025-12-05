import React, { useState, useEffect } from 'react';

interface WaveTextProps {
  amplitude: number;
  speed: number;
  children: string;
}

const WaveText: React.FC<WaveTextProps> = ({ amplitude, speed, children }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const animate = () => {
      setTime(prev => prev + 0.01);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <span>
      {children.split('').map((char, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transform: `translateY(${Math.sin(time * speed + index * 0.5) * amplitude}px)`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default WaveText;
