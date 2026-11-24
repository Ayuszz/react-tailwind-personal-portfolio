import { Icon } from "../components/Icon";
import { about } from "../portfolio.config";

export const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              About me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              {about.title}
              <span className="font-serif italic font-normal text-primary"> {about.titleItalic}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">“{about.quote}”</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {about.highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/40 transition-colors group"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <Icon name={item.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="animate-fade-in animation-delay-400">
              <p className="text-sm text-muted-foreground mb-3">How I work</p>
              <div className="flex flex-wrap gap-2">
                {about.softSkills.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-surface text-xs rounded-full text-muted-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
