import React, { useState, useEffect } from 'react';
import HackerCursor from './components/ui/HackerCursor';
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
import ScrollReveal from './components/ui/ScrollReveal';


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
      <HackerCursor />
      <ScanlineOverlay />
      <Navbar />
      <Hero accessGranted={accessGranted} setAccessGranted={setAccessGranted} />
      {accessGranted && (
  <>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Contact />
      </ScrollReveal>
    </>
  )}

    </div>
  );
}

export default App;
