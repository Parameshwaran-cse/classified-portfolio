import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: '[PROFILE]', href: '#about' },
    { name: '[SKILLS]', href: '#skills' },
    { name: '[CASES]', href: '#projects' },
    { name: '[HISTORY]', href: '#experience' },
    { name: '[CONTACT]', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 border-b border-[#00ff41]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-[#00ff41] font-mono text-lg tracking-wider">
            <span className="text-[#ff0040]">[CLASSIFIED]</span> DOSSIER
          </span>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-[#00ff41] hover:text-[#00d4ff] px-3 py-2 text-sm font-mono transition-colors duration-300 hover:bg-[#00ff41]/10">
                {item.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#00ff41] font-mono">
            {isOpen ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block text-[#00ff41] hover:text-[#00d4ff] px-3 py-2 text-sm font-mono" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
