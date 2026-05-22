import { motion } from 'motion/react';
import { Language } from '../../types';

export const Hero = ({ lang }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-[64px] pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:-translate-y-12"
        >
          <h1 className="text-display-lg uppercase text-primary leading-[1.1]">
            <span className="block relative whitespace-nowrap">
              {lang === Language.BR ? 'ENGENHEIRO DE' : 'SOFTWARE'}
            </span>
            <span className="block relative">
              {lang === Language.BR ? 'SOFTWARE' : 'ENGINEER'}
            </span>
          </h1>
        </motion.div>

        <div className="relative flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-fit flex flex-col items-center md:items-end"
          >
            <div className="w-[320px] aspect-[3/4] bg-surface-container rounded-[50px] overflow-hidden shadow-2xl transition-colors duration-300">
              <img 
                src="src/assets/img/eu.png" 
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="md:absolute md:bottom-16 md:-left-[420px] relative mt-6 md:mt-0 bg-name-tag-bg py-4 pl-12 md:pl-32 pr-12 z-10 md:z-[-1] shadow-xl w-fit"
              style={{ 
                clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 0 100%)' 
              }}
            >
              <span className="text-name-tag-text font-medium text-2xl md:text-3xl uppercase tracking-wider whitespace-nowrap">
                Lucas Santos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
