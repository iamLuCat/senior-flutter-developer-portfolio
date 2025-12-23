
import React, { useEffect, useRef, useState } from 'react';
import { PortfolioData, Proficiency } from '../types';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

interface SkillsProps {
  data: PortfolioData['skills'];
}

const ProgressBar: React.FC<{ proficiency: Proficiency; delay: number }> = ({ proficiency, delay }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay based on the index to create a staggered sequence
          setTimeout(() => {
            setWidth(proficiency.percentage);
          }, delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [proficiency.percentage, delay]);

  return (
    <div className="group" ref={barRef}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">
            {proficiency.icon}
          </span>
          <p className="text-slate-700 text-sm font-bold tracking-tight">{proficiency.label}</p>
        </div>
        <span className="text-primary font-black text-sm">
          <Counter value={proficiency.percentage} duration={1500} />%
        </span>
      </div>
      
      <div className="relative w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
        <div 
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-blue-400 shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ width: `${width}%` }}
        >
          {/* Subtle pulse effect on the tip of the bar */}
          <div className="absolute right-0 top-0 h-full w-4 bg-white/20 blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="py-24 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Core Competencies
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Technical Expertise
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specializing in high-performance cross-platform applications with clean code, robust architecture, and modern DevOps practices.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {data.categories.map((cat, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600 border border-transparent hover:border-primary/20 hover:text-primary transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} threshold={0.05}>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-symbols-outlined text-[120px] text-primary rotate-12">trending_up</span>
            </div>
            
            <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">
              Proficiency Breakdown
            </h3>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {data.proficiencies.map((p, idx) => (
                <ProgressBar key={idx} proficiency={p} delay={0.1 * idx} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal delay={0.1}>
            <h3 className="text-xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">Technologies & Libraries</h3>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {data.techAndLibraries.map((tech, idx) => (
              <Reveal key={tech} delay={0.02 * idx} className="inline-block">
                <div className="flex h-11 items-center gap-x-2 rounded-lg border border-slate-200 bg-white px-5 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all group">
                  <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">bolt</span>
                  <p className="text-slate-800 text-sm font-semibold group-hover:text-primary transition-colors">{tech}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
