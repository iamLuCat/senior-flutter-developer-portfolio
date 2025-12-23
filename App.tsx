
import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ExperienceSelection from './sections/ExperienceSelection';
import Contact from './sections/Contact';
import NotFound from './sections/NotFound';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Kiểm tra hash khi load trang đầu tiên
    handleHashChange();

    const handleScroll = () => {
      if (is404) return;

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [is404]);

  const handleGoHome = () => {
    setIs404(false);
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      <Navbar activeSection={is404 ? '' : activeSection} />

      <main className="flex-grow">
        {is404 ? (
          <NotFound onGoHome={handleGoHome} />
        ) : (
          <>
            <section id="home"><Hero data={portfolioData.hero} /></section>
            <section id="about"><About data={portfolioData.about} /></section>
            <section id="skills"><Skills data={portfolioData.skills} /></section>
            <section id="projects"><Projects projects={portfolioData.projects} /></section>
            <section id="experience"><ExperienceSelection experiences={portfolioData.experiences} /></section>
            <section id="contact"><Contact /></section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
