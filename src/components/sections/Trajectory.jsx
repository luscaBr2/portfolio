import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { DICTIONARY } from '../../constants';

export const Trajectory = ({ lang }) => {
  const containerRef = useRef(null);
  const t = DICTIONARY[lang];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="career" className="py-section-gap px-6 md:px-[64px] bg-surface-container-lowest dark:bg-surface relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-headline-md text-primary text-center mb-24 uppercase"
        >
          {t.career.title}
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-surface-container-highest" />
          
          <motion.div 
            className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-[4px] bg-primary rounded-full origin-top z-10"
            style={{ 
              scaleY,
              height: '100%',
              top: 0 
            }}
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-20">
            {t.career.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-end relative`}
              >
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-md z-30 top-4" />

                <div className={`w-[calc(100%-60px)] md:w-[45%] bg-skill-card-bg p-6 md:p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300`}>
                  <span className="text-label-sm font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    {item.type === 'work' ? (
                      <Briefcase size={20} className="text-on-surface-variant shrink-0" />
                    ) : (
                      <GraduationCap size={20} className="text-on-surface-variant shrink-0" />
                    )}
                    <h3 className="text-headline-md text-[20px] font-bold leading-tight text-on-surface">{item.title}</h3>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden mb-4 border border-outline-variant/20 shadow-sm relative group">
                    <img 
                      src={item.image || 'https://placehold.co/600x400'} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => {
                        // Fallback image in case the Unsplash URL changes or fails to load
                        e.currentTarget.src = 'https://placehold.co/600x400';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex items-center gap-3 mb-6 bg-surface-container-low dark:bg-surface-container-high/20 p-3 rounded-xl border border-outline-variant/15">
                     <img 
                      src={item.companyLogo} 
                      alt={item.company}
                      className="w-10 h-10 rounded-lg object-contain bg-white dark:bg-white/90 p-1.5 shadow-sm border border-outline-variant/10 shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-body-sm font-semibold text-on-surface">{item.company}</span>
                    </div>
                  </div>

                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
