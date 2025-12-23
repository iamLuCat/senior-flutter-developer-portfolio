
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Me', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // h-16 = 64px
      const extraPadding = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraPadding;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-white shadow-md shadow-primary/20 transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-xl">flutter_dash</span>
          </div>
          <a 
            className="text-xl font-bold tracking-tight text-slate-900 font-display" 
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Pham Quang Vu
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                activeSection === link.id
                  ? 'text-primary bg-primary/5'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50'
              }`}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span>CV</span>
          </a>
          <button 
            className="md:hidden flex p-2 text-slate-600 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-slide-up">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
