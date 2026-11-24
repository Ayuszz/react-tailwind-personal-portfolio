import { Icon } from "../components/Icon";
import { SectionHeader } from "../components/SectionHeader";
import { skillGroups } from "../portfolio.config";

export const Skills = () => (
  <section id="skills" className="py-28 relative overflow-hidden">
    <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader
        eyebrow="Toolkit"
        title="Skills I bring"
        italic="to the table"
        subtitle="From LLM integration and backend APIs to databases, DevOps and the frontend."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <div
            key={g.title}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors animate-fade-in group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Icon name={g.icon} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="px-3 py-1.5 bg-surface text-xs rounded-full text-muted-foreground border border-border group-hover:text-foreground transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
