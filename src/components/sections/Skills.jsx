import React from 'react';
import { motion } from 'motion/react';
import { DICTIONARY } from '../../constants';
import { GithubIcon } from '../SocialIcons';

export const Skills = ({ lang, isDark }) => {
  const t = DICTIONARY[lang];

  return (
    <section id="skills" className="py-section-gap px-6 md:px-[64px] bg-surface-container-lowest dark:bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-headline-md text-primary text-center mb-16 uppercase font-bold"
        >
          {t.skills.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
          {t.skills.list.map((skill, index) => {
            const isGitHub = skill.name.toLowerCase() === 'github';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div 
                  className="w-20 h-20 bg-skill-card-bg border border-skill-card-border rounded-2xl flex items-center justify-center p-4 shadow-sm group-hover:shadow-md transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${skill.color}, transparent 85%)`;
                    e.currentTarget.style.borderColor = skill.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  {isGitHub ? (
                    <GithubIcon isDark={isDark} className="w-full h-full object-contain transition-all duration-300" />
                  ) : (
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`} 
                      alt={skill.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  )}
                </div>
                <span className="text-label-sm text-on-surface-variant font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {t.skills.methodologies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-headline-sm text-primary uppercase font-bold mb-8 opacity-70">
              {t.skills.methodologies.title}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-[800px] text-center">
              {t.skills.methodologies.items.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-display-xs text-on-surface-variant font-medium">
                    {item}
                  </span>
                  {index < t.skills.methodologies.items.length - 1 && (
                    <span className="text-primary/30 font-light text-2xl hidden md:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
