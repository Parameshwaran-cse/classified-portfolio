import React from 'react';
import ClassifiedStamp from '../ui/ClassifiedStamp';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND OPS',
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS'],
      stamp: 'VERIFIED',
      color: 'green'
    },
    {
      title: 'BACKEND OPS',
      skills: ['Node JS', 'Express JS', 'Spring Boot', 'REST APIs'],
      stamp: 'APPROVED',
      color: 'cyan'
    },
    {
      title: 'DATABASE OPS',
      skills: ['MongoDB', 'MySQL', 'SQLite'],
      stamp: 'SECURED',
      color: 'orange'
    },
    {
      title: 'LANGUAGES',
      skills: ['Python', 'Java', 'C', 'C++'],
      stamp: 'CLASSIFIED',
      color: 'red'
    },
    {
      title: 'TOOLS & OTHER',
      skills: ['Git & GitHub', 'UI/UX Basics', 'VS Code', 'Django'],
      stamp: 'ACTIVE',
      color: 'green'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] font-mono">
            &gt; SKILL ARSENAL
          </h2>
          <p className="text-[#00ff41]/50 font-mono text-sm mt-2">// CLASSIFIED CAPABILITIES</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#00ff41]/30 p-6 relative hover:border-[#00ff41] transition-all duration-300 group"
            >
              <ClassifiedStamp text={category.stamp} color={category.color} />
              <h3 className="text-[#00d4ff] font-mono font-bold mb-4 text-lg">
                [{category.title}]
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-[#00ff41]">▸</span>
                    <span className="text-[#c0c0c0] group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-1 bg-[#333] overflow-hidden">
                <div
                  className="h-full bg-[#00ff41] transition-all duration-1000 group-hover:w-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
