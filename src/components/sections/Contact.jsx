import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LinkedInIcon, GithubIcon, GmailIcon, WhatsAppIcon } from '../SocialIcons';
import { SocialButton } from '../ui/SocialButton';
import { DICTIONARY } from '../../constants';
import { Language } from '../../types';

export const Contact = ({ lang, isDark }) => {
  const t = DICTIONARY[lang];
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  return (
    <section id="contact" className="py-section-gap px-6 md:px-[64px]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-display-lg uppercase text-primary mb-12 tracking-tighter text-center md:text-left">
          {t.contact.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:items-end items-start text-left">
          <div className="flex flex-col">
            <p className="text-headline-sm text-on-surface-variant mb-12 leading-relaxed max-w-[540px] text-left">
              {lang === Language.BR 
                ? "Vamos construir algo impactante juntos — seja sua marca, seu site ou sua próxima grande ideia."
                : "Let's build something impactful together — whether it's your brand, your website, or your next big idea."}
            </p>
            <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full group/socials">
              <div className="order-2 lg:order-1 flex flex-col gap-4 w-full lg:w-fit shrink-0">
                <SocialButton 
                  href="https://www.linkedin.com/in/lucas-santos387/"
                  icon={<LinkedInIcon className="w-12 h-12" />}
                  label="lucas-santos387"
                  color="#0288D1"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                />
                <SocialButton 
                  href="https://github.com/luscaBr2"
                  icon={<GithubIcon isDark={isDark} className="w-12 h-12" />}
                  label="luscaBr2"
                  color="var(--text-on-surface)"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                />
                <SocialButton 
                  href="mailto:lucas.ifsp387@gmail.com"
                  icon={<GmailIcon className="w-12 h-12" />}
                  label="lucas.ifsp387@gmail.com"
                  isExternal={false}
                  color="#ea4335"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                />
                <SocialButton 
                  href="https://wa.me/5512997422947"
                  icon={
                    <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-xl">
                      <WhatsAppIcon className="w-8 h-8" />
                    </div>
                  }
                  label="(12) 99742-2947"
                  color="#25D366"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                />
              </div>

              <div className="order-1 lg:order-2 flex-1 relative lg:min-h-[300px]">
                {/* Mobile version: Always visible */}
                <div className="lg:hidden w-full h-full">
                  <div className="bg-surface-container h-full p-8 rounded-2xl border border-outline-variant/30 shadow-sm relative flex flex-col items-center justify-center text-center px-6">
                    <div className="text-display-md font-bold uppercase text-primary leading-tight">
                      {lang === Language.BR ? (
                        <div className="flex flex-col gap-4">
                          <span>Curtiu meu trabalho?</span>
                          <span>Tem alguma ideia de projeto?</span>
                          <span>Entre em contato :)</span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          <span>Did you like my work?</span>
                          <span>Do you have any project ideas?</span>
                          <span>Get in Touch :)</span>
                        </div>
                      )}
                    </div>
                    {/* Waving Hand Component */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 shadow-inner overflow-hidden">
                        <motion.img
                          src="https://cdn-icons-png.flaticon.com/512/3898/3898671.png"
                          alt="Waving Hand"
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 object-contain invert transition-all"
                          animate={{ 
                            rotate: [0, 30, -30, 30, -30, 30, -30, 30, -30, 30, 0],
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop version: Animated with hover */}
                <div className="hidden lg:block h-full w-full">
                  <AnimatePresence mode="wait">
                    {!isHoveringContact && (
                      <motion.div
                        key="contact-card"
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-surface-container h-full p-10 rounded-2xl border border-outline-variant/30 shadow-sm relative flex flex-col items-center justify-center text-center px-12"
                      >
                        <div className="absolute -left-2 top-8 border-y-[8px] border-y-transparent border-r-[8px] border-r-surface-container" />
                        <div className="text-display-md font-bold uppercase text-primary leading-tight max-w-[400px]">
                          {lang === Language.BR ? (
                            <div className="flex flex-col gap-6">
                              <span>Curtiu meu trabalho?</span>
                              <span>Tem alguma ideia de projeto?</span>
                              <span>Entre em contato :)</span>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-6">
                              <span>Did you like my work?</span>
                              <span>Do you have any project ideas?</span>
                              <span>Get in Touch :)</span>
                            </div>
                          )}
                        </div>

                        {/* Waving Hand Component */}
                        <div className="absolute bottom-6 right-6">
                          <motion.div 
                            className="w-18 h-18 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/5 shadow-inner overflow-hidden"
                          >
                            <motion.img
                              src="https://cdn-icons-png.flaticon.com/512/3898/3898671.png"
                              alt="Waving Hand"
                              referrerPolicy="no-referrer"
                              className="w-10 h-10 object-contain invert transition-all"
                              animate={{ 
                                rotate: [0, 30, -30, 30, -30, 30, -30, 30, -30, 30, 0],
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-skill-card-bg p-8 rounded-xl border border-outline-variant/30 shadow-sm">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-sm font-bold uppercase text-on-surface-variant/60">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-body-md"
                  placeholder="name@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-sm font-bold uppercase text-on-surface-variant/60">{t.contact.form.subject}</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-body-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label-sm font-bold uppercase text-on-surface-variant/60">{t.contact.form.message}</label>
                <textarea 
                  className="bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-body-md resize-none h-32"
                />
              </div>
              <button className="bg-primary text-on-primary py-4 rounded-full text-label-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-4">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
