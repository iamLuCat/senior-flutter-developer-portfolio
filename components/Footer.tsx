
import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const { github, linkedin, email } = portfolioData.contact;

  const socialLinks = [
    { icon: 'code', href: github, label: 'GitHub' },
    { icon: 'work', href: linkedin, label: 'LinkedIn' },
    { icon: 'alternate_email', href: `mailto:${email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-50">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">flutter_dash</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Pham Quang Vu</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Home', 'About Me', 'Skills', 'Projects', 'Experience'].map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '')}`} 
                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="size-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Pham Quang Vu. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
            <span>Built with</span>
            <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
            <span className="font-medium text-slate-600">Flutter</span>
            <span className="text-slate-300">|</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
