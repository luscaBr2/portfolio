import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LinkedInIcon, GithubIcon, GmailIcon, WhatsAppIcon } from '../SocialIcons';
import { SocialButton } from '../ui/SocialButton';
import { DICTIONARY } from '../../constants';
import { Language } from '../../types';
import handshakeBranco from '../../assets/img/aperto-de-mao_branco.png';
import handshakePreto from '../../assets/img/aperto-de-mao_preto.png';

export const Contact = ({ lang, isDark }) => {
  const t = DICTIONARY[lang];
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const handshakeIcon = isDark ? handshakePreto : handshakeBranco;

  return (
    <section id="contact" className="py-section-gap px-6 md:px-[64px]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-display-lg uppercase text-primary mb-12 tracking-tighter text-center md:text-left">
          {t.contact.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:items-stretch items-start text-left">
          <div className="flex flex-col h-full justify-between gap-12">
            <div>
              <p className="text-headline-md max-md:text-2xl text-on-surface-variant leading-relaxed max-w-[540px] text-left font-medium">
                {lang === Language.BR 
                  ? "Curtiu meu trabalho? Tem alguma ideia de projeto? Entre em contato :)"
                  : "Did you like my work? Have any project ideas? Get in touch :)"}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-14 xl:gap-16 w-full group/socials mt-auto">
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

              <div className="order-1 lg:order-2 flex-1 relative lg:min-h-[320px] flex items-center justify-center">
                {/* Mobile version: Always visible - no background */}
                <div className="lg:hidden w-full h-full flex items-center justify-center">
                  <div className="h-full relative flex items-center justify-center text-center px-6 min-h-[220px]">
                    <img 
                      src={handshakeIcon} 
                      alt="Contact visual"
                      className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-2xl select-none" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Desktop version: Animated with hover - no background */}
                <div className="hidden lg:block h-full w-full">
                  <AnimatePresence mode="wait">
                    {!isHoveringContact && (
                      <motion.div
                        key="contact-card"
                        initial={{ opacity: 0, x: -25, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -15, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="h-full relative flex flex-col items-center justify-center text-center px-6"
                      >
                        <img 
                          src={handshakeIcon} 
                          alt="Contact visual"
                          className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain rounded-2xl select-none transition-transform duration-300 hover:scale-[1.03]" 
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-skill-card-bg p-8 rounded-xl border border-outline-variant/30 shadow-sm h-full flex flex-col justify-between">
            <form className="flex flex-col gap-6 h-full justify-between">
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
              <div className="flex flex-col gap-2 flex-grow min-h-[140px]">
                <label className="text-label-sm font-bold uppercase text-on-surface-variant/60">{t.contact.form.message}</label>
                <textarea 
                  className="bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-body-md resize-none h-full flex-grow"
                />
              </div>
              <button className="bg-primary text-on-primary py-4 rounded-full text-label-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-4 w-full">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
