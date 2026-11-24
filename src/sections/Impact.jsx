import { impactStats } from "../portfolio.config";

export const Impact = () => (
  <section id="impact" className="py-16 relative">
    <div className="container mx-auto px-6">
      <div className="glass rounded-3xl glow-border grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
        {impactStats.map((s, i) => (
          <div key={s.label} className={`p-8 text-center animate-fade-in ${i < 2 ? "" : ""}`} style={{ animationDelay: `${i * 100}ms` }}>
            <div className="text-4xl md:text-5xl font-bold text-primary glow-text">{s.value}</div>
            <div className="mt-2 font-semibold">{s.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
