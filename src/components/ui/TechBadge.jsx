export const TechBadge = ({ name, icon, color }) => {
  return (
    <div 
      className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant/20 transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${color}, transparent 85%)`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.borderColor = '';
      }}
    >
      <img 
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} 
        alt={name}
        className="w-4 h-4 object-contain"
      />
      <span className="text-[11px] font-bold uppercase tracking-tight text-on-surface-variant">
        {name}
      </span>
    </div>
  );
};
