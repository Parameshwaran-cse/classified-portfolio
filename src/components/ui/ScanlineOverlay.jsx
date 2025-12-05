import React from 'react';

const ScanlineOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)'
    }} />
  </div>
);

export default ScanlineOverlay;
