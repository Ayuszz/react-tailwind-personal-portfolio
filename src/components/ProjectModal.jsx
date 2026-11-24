import { useEffect, useRef } from "react";
import {
  X, Github, ExternalLink, Lock,
} from "lucide-react";
import { Icon } from "./Icon";

const Block = ({ icon, title, children }) => (
  <section className="space-y-3">
    <h3 className="flex items-center gap-2 text-lg font-semibold">
      <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
        <Icon name={icon} className="w-4 h-4 text-primary" />
      </span>
      {title}
    </h3>
    {children}
  </section>
);

export const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null);
  const d = project.details;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 bg-black/75 backdrop-blur-sm animate-modal-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="relative w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-card md:rounded-3xl border border-border shadow-2xl shadow-black/70"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 hero-bg opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/85 to-card/40" />
          <div className="relative p-6 md:p-10 pr-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-2xl bg-background/70 border border-primary/40 flex items-center justify-center glow-border">
                <Icon name={project.icon} className="w-6 h-6 text-primary" />
              </span>
              <span className="text-xs text-secondary-foreground font-medium">{project.context}</span>
            </div>
            <h2 id="project-title" className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm bg-surface border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-4 h-4" /> View code & README
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  <ExternalLink className="w-4 h-4" /> Try the live app
                </a>
              )}
              {d.note && (
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs bg-surface text-muted-foreground">
                  <Lock className="w-3.5 h-3.5" /> {d.note}
                </span>
              )}
            </div>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background/70 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* metrics */}
          <div className={`grid grid-cols-2 ${d.metrics.length > 3 ? "md:grid-cols-4" : d.metrics.length === 3 ? "md:grid-cols-3" : ""} gap-3`}>
            {d.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-surface border border-border p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {project.image && (
            <figure className="rounded-2xl overflow-hidden border border-border bg-surface">
              <img src={project.image} alt={`${project.title} dashboard`} className="w-full h-auto" loading="lazy" />
              <figcaption className="text-xs text-muted-foreground bg-card px-4 py-2">Screenshot</figcaption>
            </figure>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <Block icon="Target" title="The problem">
              <p className="text-sm text-muted-foreground leading-relaxed">{d.problem}</p>
            </Block>
            <Block icon="Database" title="The data">
              <p className="text-sm text-muted-foreground leading-relaxed">{d.dataset}</p>
            </Block>
          </div>

          <Block icon="ListChecks" title="How it was built — step by step">
            <ol className="relative border-l border-primary/30 ml-4 space-y-5">
              {d.steps.map((s, i) => (
                <li key={s.title} className="pl-6 relative">
                  <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block icon="Lightbulb" title="Key findings & results">
            <ul className="space-y-2.5">
              {d.findings.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block icon="Briefcase" title="Use cases">
            <div className="grid sm:grid-cols-2 gap-3">
              {d.useCases.map((u) => (
                <div key={u} className="rounded-xl bg-surface border border-border px-4 py-3 text-sm">{u}</div>
              ))}
            </div>
          </Block>

          <Block icon="GraduationCap" title="What this shows">
            <p className="text-sm text-muted-foreground leading-relaxed">{d.learnings}</p>
          </Block>
        </div>
      </div>
    </div>
  );
};
