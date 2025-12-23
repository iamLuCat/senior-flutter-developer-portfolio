
import React, { useEffect } from 'react';
import { Project } from '../types';
import Counter from './Counter';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDemoClick: (e: React.MouseEvent, url: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onDemoClick }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-duration-300 transition-all border border-slate-100">
        {/* Sticky Header Actions */}
        <div className="sticky top-0 z-20 flex justify-end p-4 pointer-events-none">
          <button 
            onClick={onClose}
            className="pointer-events-auto size-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 hover:scale-110 transition-all border border-slate-100"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="-mt-14">
          {/* Hero Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                  {project.category}
                </span>
                {project.date && (
                  <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                    {project.date}
                  </span>
                )}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                {project.title}
              </h2>
              {project.role && (
                <p className="text-primary font-bold text-sm mt-1 uppercase tracking-wider">{project.role}</p>
              )}
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column: Description & Challenges/Responsibilities */}
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">subject</span>
                    Project Overview
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {project.longDescription || project.description}
                  </p>
                </section>

                {project.responsibilities && project.responsibilities.length > 0 && (
                  <section>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600">
                          <span className="material-symbols-outlined text-green-500 text-[18px] flex-shrink-0 mt-1">check_circle</span>
                          <span className="text-sm sm:text-base leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <section>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                      Technical Challenges
                    </h3>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600">
                          <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0 mt-0.5 italic">done_all</span>
                          <span className="text-sm sm:text-base leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Right Column: Meta Info & Actions */}
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.teamSize && (
                    <div className="mt-6 flex items-center gap-2 text-slate-500 border-t border-slate-200 pt-4">
                      <span className="material-symbols-outlined text-[18px]">groups</span>
                      <span className="text-xs font-bold">
                        Team Size: <Counter value={project.teamSize} /> Members
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                   <button 
                    onClick={(e) => onDemoClick(e, project.demoUrl)}
                    className="w-full flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:bg-blue-700 hover:-translate-y-1 transition-all"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                    Live Preview
                  </button>
                  <button 
                    onClick={(e) => onDemoClick(e, project.sourceUrl)}
                    className="w-full flex h-14 items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-base hover:border-primary hover:text-primary hover:-translate-y-1 transition-all"
                  >
                    <span className="material-symbols-outlined">code</span>
                    Source Code
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Pro Tip</h4>
                  <p className="text-xs text-blue-700 leading-relaxed font-medium">
                    This project demonstrates my proficiency in scalable Flutter architecture and complex state management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
