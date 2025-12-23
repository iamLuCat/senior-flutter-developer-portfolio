
import React, { useState } from 'react';
import { Project } from '../types';
import Reveal from '../components/Reveal';
import ProjectModal from '../components/ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-72 w-full overflow-hidden bg-slate-200 rounded-t-2xl" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      {/* Skeleton/Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out transform-gpu ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
        style={{ backfaceVisibility: 'hidden' }}
      />
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Mobile', 'Web', 'UI Kit'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (!url || url === '#' || url.trim() === '') {
      e.preventDefault();
      window.location.hash = '#404';
    }
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <Reveal delay={0.1} effect="fade">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Featured Projects</h2>
            </Reveal>
            <Reveal delay={0.2} effect="fade">
              <p className="text-slate-600 text-lg">
                A selection of mobile applications and web platforms I've built, demonstrating clean architecture and seamless user experiences.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3} effect="fade">
          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex h-10 items-center justify-center px-6 rounded-full transition-all duration-300 text-sm font-medium ${filter === cat
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <Reveal key={`${filter}-${p.id}`} delay={(idx % 3) * 0.15} effect="scale" threshold={0.05} className="h-full" contentClassName="h-full">
              <div
                className="group flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full cursor-pointer transform-gpu"
                onClick={() => openProjectDetails(p)}
                style={{
                  WebkitMaskImage: '-webkit-radial-gradient(white, white)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative">
                  <ProjectImage src={p.image} alt={p.title} />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">
                        {p.category === 'Mobile' ? 'smartphone' : p.category === 'Web' ? 'language' : 'palette'}
                      </span>
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(tag => (
                      <span key={tag} className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>

                  <div className="flex gap-3 pt-4 border-t border-slate-50 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(e, p.demoUrl);
                      }}
                      className="flex-grow flex h-10 items-center justify-center gap-2 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-blue-700 transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      View Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick(e, p.sourceUrl);
                      }}
                      className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={closeProjectDetails}
        onDemoClick={handleLinkClick}
      />
    </section>
  );
};

export default Projects;
