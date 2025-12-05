import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import TypewriterText from '../ui/TypewriterText';
import useSound from '../../hooks/useSound';
import terminalBeep from '../../assets/sounds/terminal-beep.mp3';

const Hero = ({ accessGranted, setAccessGranted }) => {
  const [isHovered, setIsHovered] = useState(false);
  const playBeep = useSound(terminalBeep);

  const handleAccess = () => {
    playBeep();
    setAccessGranted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.2} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4">
        {!accessGranted ? (
          <div
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleAccess}
          >
            <div className={`bg-[#1a1a1a] border-2 ${isHovered ? 'border-[#00ff41]' : 'border-[#ff0040]'} p-8 md:p-12 max-w-lg mx-auto transition-all duration-500 transform ${isHovered ? 'scale-105' : ''}`}>
              <div className="border-b border-[#ff0040]/50 pb-4 mb-6">
                <h1 className="text-[#ff0040] text-3xl md:text-4xl font-bold font-mono tracking-widest glitch" data-text="TOP SECRET">
                  TOP SECRET
                </h1>
                <p className="text-[#ff6b00] text-sm mt-2 font-mono">
                  // CLASSIFICATION: LEVEL 5
                </p>
              </div>

              <div className="space-y-4 text-left font-mono">
                <div className="flex justify-between text-sm">
                  <span className="text-[#00ff41]/70">DOCUMENT ID:</span>
                  <span className="text-[#00ff41]">PP-2024-CSE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#00ff41]/70">SUBJECT:</span>
                  <span className="text-[#00ff41]">PARAMESHWARAN P</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#00ff41]/70">STATUS:</span>
                  <span className="text-[#ff6b00]">ENCRYPTED</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="h-3 bg-[#333] w-full"></div>
                <div className="h-3 bg-[#333] w-3/4"></div>
                <div className="h-3 bg-[#333] w-5/6"></div>
              </div>

              <div className="mt-8">
                <div className={`border ${isHovered ? 'border-[#00ff41] bg-[#00ff41]/10' : 'border-[#00ff41]/50'} py-3 px-6 transition-all duration-300`}>
                  <span className="text-[#00ff41] font-mono text-sm">
                    {isHovered ? '[ DECRYPTING... CLICK TO ACCESS ]' : '[ HOVER TO DECRYPT ]'}
                  </span>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#ff0040] text-white text-xs font-bold py-1 px-2 rotate-12 font-mono">
                CLASSIFIED
              </div>
            </div>

            <p className="text-[#ff6b00] mt-6 font-mono text-sm animate-pulse">
              ⚠ UNAUTHORIZED ACCESS WILL BE PROSECUTED
            </p>
          </div>
        ) : (
          <div className="animate-fade-in">
            <p className="text-[#00ff41] font-mono mb-2">ACCESS GRANTED // WELCOME TO</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 glitch" data-text="PARAMESHWARAN P">
              PARAMESHWARAN P
            </h1>
            <div className="text-xl md:text-2xl text-[#00d4ff] font-mono">
              <TypewriterText
                texts={[
                  'Computer Science Student',
                  'Full Stack Developer',
                  'Problem Solver',
                  'Code Operative'
                ]}
              />
            </div>
            <p className="text-[#c0c0c0] mt-6 max-w-xl mx-auto font-mono text-sm">
              // CLEARANCE LEVEL: FULL ACCESS GRANTED<br />
              // SCROLL DOWN TO VIEW CLASSIFIED INFORMATION
            </p>
            <div className="mt-12 animate-bounce">
              <span className="text-[#00ff41] font-mono text-2xl">↓</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
