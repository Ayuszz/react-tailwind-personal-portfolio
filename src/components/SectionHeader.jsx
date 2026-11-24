export const SectionHeader = ({ eyebrow, title, italic, subtitle, center = false }) => (
  <div className={`mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
      {eyebrow}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100">
      {title} <span className="font-serif italic font-normal text-primary">{italic}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground animate-fade-in animation-delay-200">{subtitle}</p>
    )}
  </div>
);
