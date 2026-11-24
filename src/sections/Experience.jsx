import { MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { experience } from "../portfolio.config";

export const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Career Journey"
          title="Experience that"
          italic="ships"
          subtitle="Building production backends, integrations and automation for enterprise workflows."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="timeline-glow absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-14">
            {experience.map((exp, idx) => {
              const left = idx % 2 === 0;
              return (
                <div key={exp.company} className="relative md:grid md:grid-cols-2 md:gap-16 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                  {/* dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                  </div>

                  <div className={`pl-10 md:pl-0 ${left ? "" : "md:col-start-2"}`}>
                    <div className="glass p-6 md:p-8 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mt-2">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-muted-foreground">
                        <span className="font-medium text-foreground/80">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">{exp.summary}</p>
                      <ul className="mt-4 space-y-2.5">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
