import React from 'react';
import ClassifiedStamp from '../ui/ClassifiedStamp';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] font-mono">
            &gt; AGENT PROFILE
          </h2>
          <p className="text-[#00ff41]/50 font-mono text-sm mt-2">// PERSONNEL DOSSIER</p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#00ff41]/30 p-6 md:p-8 relative">
          <ClassifiedStamp text="VERIFIED" color="green" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-40 h-48 border-2 border-[#00ff41]/50 bg-[#0d0d0d] flex items-center justify-center mb-4">
                <span className="text-[#00ff41] font-mono text-6xl">PP</span>
              </div>
              <div className="text-center font-mono">
                <p className="text-[#ff0040] text-xs">AGENT ID: PP-2024</p>
                <p className="text-[#00ff41] text-xs mt-1">STATUS: ACTIVE</p>
              </div>
            </div>

            <div className="md:col-span-2 font-mono space-y-4">
              <div className="border-b border-[#00ff41]/20 pb-4">
                <h3 className="text-2xl text-white font-bold">PARAMESHWARAN P</h3>
                <p className="text-[#00d4ff]">CODENAME: Full Stack Operative</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#00ff41]/50">DESIGNATION:</span>
                  <p className="text-white">Computer Science Student</p>
                </div>
                <div>
                  <span className="text-[#00ff41]/50">YEAR:</span>
                  <p className="text-white">2nd Year (2025)</p>
                </div>
                <div>
                  <span className="text-[#00ff41]/50">BASE:</span>
                  <p className="text-white">Sri Eshwar College of Engineering</p>
                </div>
                <div>
                  <span className="text-[#00ff41]/50">CLEARANCE:</span>
                  <p className="text-[#ff6b00]">LEVEL 5 - FULL ACCESS</p>
                </div>
              </div>

              <div className="pt-4">
                <span className="text-[#00ff41]/50">MISSION BRIEF:</span>
                <p className="text-[#c0c0c0] mt-2 leading-relaxed">
                  A dedicated operative specializing in full-stack development and AI-powered solutions.
                  Known for executing complex missions involving web applications, machine learning systems,
                  and scalable backend architectures. Currently training at SECE headquarters while
                  completing high-priority academic objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
