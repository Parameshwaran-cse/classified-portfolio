import React from 'react';
import ClassifiedStamp from '../ui/ClassifiedStamp';

const Projects = () => {
  const projects = [
    {
      caseNumber: '001',
      title: 'Indian Sign Language Translator',
      codename: 'PROJECT GESTURE',
      description:
        'A real-time AI-powered system that converts Indian Sign Language gestures into readable text and natural speech. Built to improve accessibility for speech- and hearing-impaired users.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Express', 'MongoDB'],
      highlights: [
        'Trained dataset with gesture preprocessing & classification',
        'Real-time translation using camera input',
        'Dual output: text display + text-to-speech audio'
      ],
      status: 'COMPLETED',
      stampColor: 'green'
    },
    {
      caseNumber: '002',
      title: 'Skill Horizon',
      codename: 'PROJECT LEARN',
      description:
        'An online learning platform that allows users to register, enroll in courses, watch video lectures, attempt quizzes and submit assignments with full performance tracking.',
      tech: ['Python', 'Django', 'MySQL', 'Bootstrap', 'HTML/CSS/JS'],
      highlights: [
        'Complete course management system',
        'Quiz & assignment submission',
        'Discussion forums & messaging'
      ],
      status: 'COMPLETED',
      stampColor: 'green'
    },
    {
      caseNumber: '003',
      title: 'Wishlist Notification System',
      codename: 'PROJECT ALERT',
      description:
        'A hybrid e-commerce system with event-driven notifications for price drops, restocks, and updates. Features both web interface and RESTful API.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'REST API'],
      highlights: [
        'Event-driven notification system',
        'RESTful API for scalable integration',
        'Real-time price drop alerts'
      ],
      status: 'COMPLETED',
      stampColor: 'green'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] font-mono">
            &gt; CASE FILES
          </h2>
          <p className="text-[#00ff41]/50 font-mono text-sm mt-2">// COMPLETED OPERATIONS</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#00ff41]/30 relative hover:border-[#00ff41] transition-all duration-300 group"
            >
              <ClassifiedStamp text={project.status} color={project.stampColor} />

              <div className="bg-[#0d0d0d] border-b border-[#00ff41]/30 p-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff0040] font-mono font-bold">
                    CASE #{project.caseNumber}
                  </span>
                  <span className="text-[#00d4ff] font-mono text-sm">
                    {project.codename}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-mono bg-[#00ff41]/10 text-[#00ff41] px-2 py-1">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-mono bg-[#00ff41]/10 text-[#00ff41] px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl text-white font-bold mb-3 font-mono group-hover:text-[#00ff41] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#c0c0c0] font-mono text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="border-t border-[#00ff41]/20 pt-4 mt-4">
                  <p className="text-[#ff6b00] font-mono text-xs mb-2">KEY EVIDENCE:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-[#c0c0c0] font-mono text-sm flex items-start gap-2">
                        <span className="text-[#00ff41]">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
