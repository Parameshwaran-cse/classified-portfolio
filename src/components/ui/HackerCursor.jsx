import React, { useEffect, useState } from 'react';

const HackerCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full bg-[#00ff41] shadow-[0_0_10px_#00ff41]"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
          transition: 'transform 0.03s linear',
        }}
      />
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border border-[#00ff41]/60"
        style={{
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
          transition: 'transform 0.08s ease-out',
        }}
      />
    </>
  );
};

export default HackerCursor;
