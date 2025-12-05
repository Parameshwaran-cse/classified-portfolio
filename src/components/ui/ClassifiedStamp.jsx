import React from 'react';

const ClassifiedStamp = ({ text = 'CLASSIFIED', color = 'red' }) => {
  const colorClasses = {
    red: 'border-[#ff0040] text-[#ff0040]',
    green: 'border-[#00ff41] text-[#00ff41]',
    orange: 'border-[#ff6b00] text-[#ff6b00]',
    cyan: 'border-[#00d4ff] text-[#00d4ff]',
  };

  return (
    <div className={`absolute -top-3 -right-3 md:top-4 md:right-4 border-2 ${colorClasses[color]} px-3 py-1 rotate-12 font-mono text-xs font-bold bg-[#0a0a0a]`}>
      {text}
    </div>
  );
};

export default ClassifiedStamp;
