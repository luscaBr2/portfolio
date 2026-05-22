import { useEffect, useState } from 'react';
import { DICTIONARY } from './constants';
import { Language } from './types';

// Components
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Trajectory } from './components/sections/Trajectory';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved && Object.values(Language).includes(saved)) {
        return saved;
      }
      // Detect browser language
      const browserLang = window.navigator.language || (window.navigator.languages && window.navigator.languages[0]) || '';
      if (browserLang.toLowerCase().startsWith('pt')) {
        return Language.BR;
      }
    }
    return Language.EN;
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('home');
  const t = DICTIONARY[lang];

  // Theme Management with synchronous transition disable to change colors instantly and simultaneously
  useEffect(() => {
    // Disable CSS transitions on all elements
    const css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(
      document.createTextNode(
        `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);

    // Apply theme
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Force a browser reflow to flush layout changes instantly
    const _ = window.getComputedStyle(css).opacity;

    // Remove the style block in next frame so transitions function normally for user interactions
    const raf = requestAnimationFrame(() => {
      document.head.removeChild(css);
    });

    return () => cancelAnimationFrame(raf);
  }, [isDark]);

  // Save selected language to local storage
  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  // Active Section Detection (Scroll listener approach for perfect precision)
  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      if (sections.length === 0) return;

      // Check if we are near the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // 35% from the top of the viewport is the sweet spot for main section focus
      const targetY = window.innerHeight * 0.35;
      let detectedSection = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= targetY && rect.bottom >= targetY) {
          detectedSection = section.id;
          break;
        }
      }

      if (detectedSection) {
        setActiveSection(detectedSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute immediately to set initial position on load/render
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark} 
        setIsDark={setIsDark} 
        activeSection={activeSection} 
      />

      <main>
        <Hero lang={lang} />
        <Skills lang={lang} isDark={isDark} />
        <Projects lang={lang} />
        <Trajectory lang={lang} />
        <Contact lang={lang} isDark={isDark} />
      </main>
    </div>
  );
}
