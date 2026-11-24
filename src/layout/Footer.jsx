import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile, socials } from "../portfolio.config";

export const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <a href="#top" className="text-xl font-bold">
          {profile.initials}<span className="text-primary">.</span>
        </a>
        <p className="text-sm text-muted-foreground mt-1">
          © {new Date().getFullYear()} {profile.name}. Software Engineer · {profile.location}
        </p>
      </div>
      <div className="flex items-center gap-3">
        {[
          { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
          { icon: Github, href: socials.github, label: "GitHub" },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
            className="p-2 rounded-full glass hover:text-primary transition-colors">
            <s.icon className="w-5 h-5" />
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("replay-intro"))}
          className="px-3 py-2 rounded-full glass text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          ▶ Replay intro
        </button>
        <a href="#top" aria-label="Back to top" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors ml-2">
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);
