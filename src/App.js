import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/ui/Navbar';
import ScanlineOverlay from './components/ui/ScanlineOverlay';
import TerminalLoader from './components/ui/TerminalLoader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './styles/glitch.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TerminalLoader />;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#c0c0c0] overflow-x-hidden">
      <ScanlineOverlay />
      <Navbar />
      <Hero accessGranted={accessGranted} setAccessGranted={setAccessGranted} />
      {accessGranted && (
        <>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
