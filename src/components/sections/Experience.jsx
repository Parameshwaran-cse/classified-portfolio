import React from 'react';

const Experience = () => {
  const timeline = [
    {
      year: '2025 - Present',
      title: 'Sri Eshwar College of Engineering',
      subtitle: 'B.E. Computer Science & Engineering',
      description: '2nd Year - Currently pursuing degree with focus on full-stack development and AI/ML.',
      status: 'IN PROGRESS'
    },
    {
      year: '2023 - 2024',
      title: 'Punitha Arockia Annai HSS',
      subtitle: 'Higher Secondary (12th)',
      description: 'Completed higher secondary education with focus on science stream.',
      status: 'COMPLETED'
    },
    {
      year: '2021 - 2022',
      title: 'St. John de Britto High School',
      subtitle: 'Secondary Education (10th)',
      description: 'Completed secondary education, discovered passion for technology.',
      status: 'COMPLETED'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] font-mono">
            &gt; INVESTIGATION TIMELINE
          </h2>
          <p className="text-[#00ff41]/50 font-mono text-sm mt-2">// EVIDENCE BOARD</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#00ff41]/30"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00ff41] rounded-full border-4 border-[#0d0d0d] z-10"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#1a1a1a] border border-[#00ff41]/30 p-4 relative hover:border-[#00ff41] transition-all">
                  <span
                    className={`absolute -top-2 right-4 text-xs font-mono px-2 py-0.5 ${
                      item.status === 'IN PROGRESS'
                        ? 'bg-[#ff6b00] text-black'
                        : 'bg-[#00ff41] text-black'
                    }`}
                  >
                    {item.status}
                  </span>

                  <span className="text-[#00d4ff] font-mono text-sm">{item.year}</span>
                  <h3 className="text-white font-bold mt-1">{item.title}</h3>
                  <p className="text-[#ff6b00] font-mono text-sm">{item.subtitle}</p>
                  <p className="text-[#c0c0c0] text-sm mt-2">{item.description}</p>

                  <div
                    className={`hidden md:block absolute top-1/2 ${
                      index % 2 === 0 ? '-left-8' : '-right-8'
                    } w-8 h-0.5 bg-[#ff0040]/50`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
