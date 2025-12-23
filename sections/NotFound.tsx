
import React from 'react';
import Reveal from '../components/Reveal';

interface NotFoundProps {
  onGoHome: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-white">
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-100/30 blur-[80px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          
          {/* Animated Icon Card */}
          <Reveal delay={0.1} effect="scale">
            <div className="mb-12 relative animate-float">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 blur-2xl"></div>
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
                <span className="material-symbols-outlined text-8xl text-primary opacity-90 select-none">
                  flutter_dash
                </span>
                <div className="absolute -top-1 -right-1 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-black border-4 border-white shadow-lg text-lg">
                  ?
                </div>
              </div>
            </div>
          </Reveal>

          {/* Large 404 Text */}
          <Reveal delay={0.2} effect="slide-up">
            <h1 className="font-display text-8xl font-black tracking-tighter text-slate-900 sm:text-[12rem] leading-none mb-4 select-none">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </Reveal>

          {/* Titles & Description */}
          <div className="max-w-md mx-auto">
            <Reveal delay={0.3} effect="slide-up">
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl mb-4">
                Oops! Widget Not Found
              </h2>
            </Reveal>
            
            <Reveal delay={0.4} effect="slide-up">
              <p className="text-sm sm:text-base text-slate-500 mb-12 leading-relaxed font-mono bg-slate-50 p-4 rounded-xl border border-slate-100">
                The route you are looking for is not defined in the widget tree. It might have been disposed or never existed.
              </p>
            </Reveal>
          </div>

          {/* Action Buttons */}
          <Reveal delay={0.5} effect="slide-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onGoHome}
                className="w-full sm:w-auto flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-10 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl active:scale-95 group"
              >
                <span className="material-symbols-outlined text-[22px]">home</span>
                <span>Back to Home</span>
              </button>
              
              <button className="w-full sm:w-auto flex h-14 items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 active:scale-95">
                <span>Report Issue</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
