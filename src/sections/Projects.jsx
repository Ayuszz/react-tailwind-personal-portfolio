import { useState } from "react";
import { Github, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import { Icon } from "../components/Icon";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectModal } from "../components/ProjectModal";
import { projects } from "../portfolio.config";

export const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects with"
          italic="real engineering"
          subtitle="MCP servers, LLM apps and React builds — click any project for the full case study."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setActive(project)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(project))}
              className="group glass rounded-3xl overflow-hidden flex flex-col cursor-pointer hover:border-primary/50 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* visual header */}
              <div className="relative h-44 bg-gradient-to-br from-primary/25 via-surface to-background overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 data-grid opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-background/60 border border-primary/40 flex items-center justify-center glow-border group-hover:scale-110 transition-transform duration-500">
                        <Icon name={project.icon} className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-background/80 text-muted-foreground">
                  Project {index + 1}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-xs text-secondary-foreground font-medium">{project.context}</p>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex items-start gap-2 text-sm rounded-xl bg-highlight/10 border border-highlight/25 px-3 py-2 text-highlight">
                  <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{project.result}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto pt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground group-hover:bg-primary/90">
                    <BookOpen className="w-4 h-4" /> Read case study
                  </span>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub" className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm bg-surface hover:bg-primary/20 transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      aria-label="Live app" className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm bg-surface hover:bg-primary/20 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
};
