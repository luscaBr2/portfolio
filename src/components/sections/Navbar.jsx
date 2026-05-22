import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { Language } from '../../types';
import { DICTIONARY } from '../../constants';

export const Navbar = ({ lang, setLang, isDark, setIsDark, activeSection }) => {
  const t = DICTIONARY[lang];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-4 py-2 flex items-center gap-2 md:gap-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)] bg-nav-bg transition-colors duration-300">
      <div className="flex items-center gap-1">
        {t.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-1.5 text-label-sm relative transition-colors duration-300 ${
              activeSection === item.id 
                ? 'text-nav-text-active font-bold' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="active-nav"
                className="absolute inset-0 bg-nav-dot rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.label}
          </a>
        ))}
      </div>

      <div className="h-6 w-[1px] bg-outline-variant mx-2" />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant flex items-center justify-center border border-outline-variant/20 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={() => setLang(lang === Language.BR ? Language.EN : Language.BR)}
          className="relative flex items-center bg-surface-container-highest dark:bg-surface-container-high rounded-full w-[68px] h-8 p-1 overflow-hidden transition-colors cursor-pointer"
        >
          <div className="flex justify-between w-full px-2 z-0 font-bold text-[10px] text-on-surface-variant pointer-events-none">
            <span>BR</span>
            <span>EN</span>
          </div>
          <motion.div
            className="absolute w-7 h-6 bg-primary rounded-full z-10 flex items-center justify-center shadow-sm"
            initial={false}
            animate={{ 
              left: lang === Language.BR ? '36px' : '4px',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
      </div>
    </nav>
  );
};
