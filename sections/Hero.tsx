
import React from 'react';
import { PortfolioData } from '../types';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

interface HeroProps {
  data: PortfolioData['hero'];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  // Hàm xử lý cuộn mượt mà với offset của Navbar
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
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] h-[400px] w-[400px] rounded-full bg-purple-400/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <Reveal delay={0.1} effect="fade">
              <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-white px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-slate-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for freelance work
              </div>
            </Reveal>
            
            <div className="space-y-4">
              <Reveal delay={0.2} effect="slide-up">
                <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                  <span className="block">Flutter</span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Developer</span>
                </h1>
              </Reveal>
              <Reveal delay={0.3} effect="slide-up">
                <p className="mx-auto lg:mx-0 max-w-2xl text-lg font-mono text-gray-600 md:text-xl leading-relaxed">
                  {data.role}
                </p>
              </Reveal>
              <Reveal delay={0.4} effect="slide-up">
                <p className="mx-auto lg:mx-0 max-w-lg text-base text-gray-500">
                  {data.description}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5} effect="slide-up">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-blue-700 active:scale-95" 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  <span>View Projects</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
                
                <a 
                  className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-gray-50 active:scale-95" 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.6} effect="fade">
              <div className="pt-8 flex flex-col items-center lg:items-start gap-3">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Tech Stack</span>
                <div className="flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                  {data.techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-1 group cursor-default" title={tech.name}>
                      <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <Reveal delay={0.4} effect="scale" className="animate-float">
              <div className="relative h-[400px] w-[320px] sm:h-[500px] sm:w-[380px] perspective-1000">
                <div className="absolute top-12 -left-4 sm:-left-12 h-full w-full rotate-[-6deg] rounded-3xl bg-white border border-slate-200 shadow-xl opacity-60 scale-90"></div>
                <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-900/10 overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/50 backdrop-blur-md z-20 flex items-center justify-center">
                    <div className="h-1.5 w-16 rounded-full bg-slate-600/50"></div>
                  </div>
                  <div 
                    className="h-full w-full bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFqwt0Qm-nNoe2sEWyL_vVyEb4XnOOsFc9R9Fg7ROVXG3980I-r15uLNrHW5Jcs-_BLjXOV_LiFm0mFYU46G6whlIhdDRI9Lo8dLB8aiuytP9vN_KPIzw_aUBNV66m3nRqCa98Bif1aubnq6LsXD09p50wWhjmxyLofp9Ln84FVwCtjFu4MNf1xscu-CbvdVRPEMecQyMxxm1vl32btm7g4x4FOYfNsiUIy9ZlsmGSnIMrRQZW5Ta7WgIvdIVwtktRPwE3byHtY6c')" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-6 right-6 p-4 rounded-xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">code_blocks</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Clean Code</div>
                          <div className="text-xs text-slate-400">Scalable Architecture</div>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 top-20 animate-bounce [animation-duration:3s]">
                  <div className="flex items-center gap-2 rounded-lg bg-white border border-gray-100 p-3 shadow-xl backdrop-blur-md">
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full ring-2 ring-white bg-blue-500"></div>
                      <div className="h-6 w-6 rounded-full ring-2 ring-white bg-purple-500"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-800">
                        <Counter value="50+" /> Projects
                      </span>
                      <span className="text-[10px] text-gray-500">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
