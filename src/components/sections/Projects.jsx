import { motion } from 'motion/react';
import { Code, ChevronRight } from 'lucide-react';
import { DICTIONARY } from '../../constants';
import { TechBadge } from '../ui/TechBadge';

export const Projects = ({ lang }) => {
  const t = DICTIONARY[lang];

  return (
    <section id="projects" className="py-section-gap px-6 md:px-[64px]">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-headline-md text-primary text-center mb-16 uppercase"
        >
          {t.projects.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-skill-card-bg p-6 rounded-xl group hover:shadow-lg transition-all duration-300 border border-outline-variant/30 hover:border-outline-variant flex flex-col h-full"
            >
              <div className="aspect-video bg-surface-container rounded-lg mb-6 overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-bold"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-surface-dim to-surface-container flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                    <Code size={48} className="text-outline" />
                  </div>
                )}
              </div>
              <h3 className="text-headline-md text-[20px] mb-3">{project.title}</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tag, i) => (
                    <TechBadge key={i} name={tag.name} icon={tag.icon} color={tag.color} />
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-label-sm font-bold uppercase tracking-wider group/link hover:text-primary transition-colors"
                    >
                      {t.projects.action}
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-label-sm font-bold uppercase tracking-wider group/link hover:text-primary transition-colors opacity-70 hover:opacity-100"
                  >
                    {t.projects.repoAction}
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
