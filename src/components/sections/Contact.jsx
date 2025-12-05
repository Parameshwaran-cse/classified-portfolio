import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'EMAIL',
      value: 'parameshwaran.p2024cse@sece.ac.in',
      href: 'mailto:parameshwaran.p2024cse@sece.ac.in',
      icon: '📧'
    },
    {
      name: 'GITHUB',
      value: 'ParameshwaranP',
      href: 'https://github.com/ParameshwaranP',
      icon: '💻'
    },
    {
      name: 'LINKEDIN',
      value: 'ParameshwaranP',
      href: 'https://linkedin.com/in/ParameshwaranP',
      icon: '🔗'
    },
    {
      name: 'LEETCODE',
      value: 'PARAMESHWARAN_P',
      href: 'https://leetcode.com/u/PARAMESHWARAN_P/',
      icon: '⚡'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] font-mono">
            &gt; SECURE TRANSMISSION
          </h2>
          <p className="text-[#00ff41]/50 font-mono text-sm mt-2">// ESTABLISH CONTACT</p>
        </div>

        <div className="bg-[#0d0d0d] border border-[#00ff41]/50 rounded-lg overflow-hidden">
          <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[#00ff41]/30">
            <div className="w-3 h-3 rounded-full bg-[#ff0040]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ff6b00]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00ff41]"></div>
            <span className="text-[#00ff41]/70 text-sm ml-2 font-mono">secure_channel@parameshwaran</span>
          </div>

          <div className="p-6 font-mono">
            <div className="text-[#00ff41] mb-4">
              <span className="text-[#00d4ff]">root@classified</span>
              <span className="text-white">:</span>
              <span className="text-[#00ff41]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#c0c0c0]">cat contact_info.txt</span>
            </div>

            <div className="border border-[#00ff41]/20 p-4 mb-6">
              <p className="text-[#ff6b00] mb-4">// AVAILABLE COMMUNICATION CHANNELS:</p>

              <div className="grid md:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-[#00ff41]/30 hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <p className="text-[#00ff41] text-xs">[{link.name}]</p>
                      <p className="text-[#c0c0c0] text-sm group-hover:text-white transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-[#00ff41]">
              <span className="text-[#00d4ff]">root@classified</span>
              <span className="text-white">:</span>
              <span className="text-[#00ff41]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#c0c0c0]">echo "Thanks for visiting!"</span>
            </div>
            <p className="text-white mt-2">Thanks for visiting!</p>

            <div className="text-[#00ff41] mt-4">
              <span className="text-[#00d4ff]">root@classified</span>
              <span className="text-white">:</span>
              <span className="text-[#00ff41]">~</span>
              <span className="text-white">$ </span>
              <span className="animate-pulse">▊</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 font-mono">
          <p className="text-[#00ff41]/50 text-sm">
            [ TRANSMISSION SECURED WITH 256-BIT ENCRYPTION ]
          </p>
          <p className="text-[#c0c0c0] text-xs mt-2">
            © 2025 PARAMESHWARAN P | ALL RIGHTS CLASSIFIED
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
