import { Icon } from "../components/Icon";
import { SectionHeader } from "../components/SectionHeader";
import { education } from "../portfolio.config";

export const Education = () => (
  <section id="education" className="py-28 relative">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Education & Certification" title="Built on a" italic="strong foundation" />
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div
            key={e.title}
            className="glass rounded-2xl p-7 flex gap-5 hover:border-primary/40 transition-colors animate-fade-in"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name={e.icon} className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-sm text-primary font-medium">{e.period}</span>
              <h3 className="text-lg font-semibold mt-1">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
