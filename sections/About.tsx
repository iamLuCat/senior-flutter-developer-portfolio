
import React from 'react';
import { PortfolioData } from '../types';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

interface AboutProps {
  data: PortfolioData['about'];
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-blue-50/50 blur-[80px] pointer-events-none animate-pulse"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary mb-6 border border-blue-100 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">person</span>
                About Me
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6 font-display">
                {data.title.split('Flutter').map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-primary">Flutter</span>}
                    {part}
                  </React.Fragment>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {data.subtitle}
              </p>
            </Reveal>
            
            <div className="space-y-6">
              {data.features.map((feature, idx) => (
                <Reveal key={idx} delay={0.1 * (idx + 4)}>
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 group">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={0.4} className="relative w-full max-w-sm">
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-200 border border-slate-100">
                <div className="h-28 bg-gradient-to-br from-primary via-blue-500 to-secondary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
                <div className="px-6 pb-8">
                  <div className="relative -top-12 mb-[-36px] flex justify-between items-end">
                    <div className="h-24 w-24 rounded-2xl bg-white p-1.5 shadow-md transform transition-transform hover:scale-105">
                      <div className="h-full w-full rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100">
                        <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
                      </div>
                    </div>
                    <div className="mb-10">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open to Work
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-slate-900">Flutter Developer</h3>
                    <p className="text-sm text-gray-500 font-medium">@MobileEngineer</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {data.stats.map((stat, idx) => (
                      <div key={idx} className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center transition-all hover:bg-white hover:shadow-md">
                        <div className="text-2xl font-black text-slate-900">
                          <Counter value={stat.value} />
                        </div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Flutter', 'Dart', 'Firebase', 'Bloc'].map(tag => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-100">{tag}</span>
                    ))}
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

export default About;
