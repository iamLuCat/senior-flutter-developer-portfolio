
import React from 'react';
import { Experience } from '../types';
import Reveal from '../components/Reveal';

interface ExperienceSelectionProps {
  experiences: Experience[];
}

const ExperienceSelection: React.FC<ExperienceSelectionProps> = ({ experiences }) => {
  return (
    <section className="py-24 bg-bg-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">Work Experience</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 text-lg">My professional journey building high-quality mobile applications.</p>
          </Reveal>
        </div>

        <div className="space-y-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[2px] bg-slate-200"></div>

          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={0.1 * idx} threshold={0.2} className="relative pb-12 last:pb-0">
              <div className="flex gap-8">
                <div className={`relative z-10 flex-shrink-0 size-12 rounded-full border-2 flex items-center justify-center transition-all ${exp.current ? 'bg-primary/5 border-primary text-primary' : 'bg-white border-slate-200 text-slate-400'
                  }`}>
                  <span className="material-symbols-outlined text-2xl">{exp.icon}</span>
                </div>

                <div className="flex-grow bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 group">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="font-bold text-primary">{exp.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${exp.current ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSelection;
