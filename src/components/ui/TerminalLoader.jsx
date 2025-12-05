import React, { useState, useEffect } from 'react';

const TerminalLoader = () => {
  const [lines, setLines] = useState([]);
  const loadingLines = [
    '> Initializing secure connection...',
    '> Bypassing firewall [████████████] 100%',
    '> Accessing classified database...',
    '> Decrypting personnel files...',
    '> Agent profile located: PARAMESHWARAN P',
    '> Clearance level: TOP SECRET',
    '> Loading dossier...',
    '> ACCESS GRANTED',
  ];

  useEffect(() => {
    loadingLines.forEach((line, index) => {
      setTimeout(() => setLines(prev => [...prev, line]), index * 350);
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0d0d0d] border border-[#00ff41]/50 rounded-lg p-6 font-mono">
        <div className="flex items-center gap-2 mb-4 border-b border-[#00ff41]/30 pb-2">
          <div className="w-3 h-3 rounded-full bg-[#ff0040]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ff6b00]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00ff41]"></div>
          <span className="text-[#00ff41]/70 text-sm ml-2">terminal@classified</span>
        </div>
        <div className="space-y-2">
          {lines.map((line, index) => (
            <div key={index} className={`text-sm ${line.includes('ACCESS GRANTED') ? 'text-[#00ff41] font-bold text-lg' : 'text-[#00ff41]/80'}`}>
              {line}
            </div>
          ))}
          <span className="inline-block w-2 h-4 bg-[#00ff41] animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
