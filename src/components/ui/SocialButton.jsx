import React from 'react';
import { motion } from 'motion/react';

export const SocialButton = ({ 
  href, 
  icon, 
  label, 
  isExternal = true, 
  color,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Sync with 'lg' breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.a 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="h-16 rounded-2xl bg-skill-card-bg border border-outline-variant/30 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden cursor-pointer"
      aria-label={label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={{ 
        width: isMobile ? '100%' : '64px'
      }}
      whileHover={{ 
        width: isMobile ? '100%' : 'auto',
        scale: 1.02 
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        width: { duration: 0.3 }
      }}
    >
      <div className="min-w-[64px] h-16 flex items-center justify-center">
        {icon}
      </div>
      <motion.span 
        className="pr-6 font-bold text-lg whitespace-nowrap opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: color || 'inherit' }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
};
