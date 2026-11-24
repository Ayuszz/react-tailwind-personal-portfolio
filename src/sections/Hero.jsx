import { useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBoarderButton";
import { profile, socials, heroSkills, contactLinks, resumeUrl } from "../portfolio.config";
import { ContactMenu } from "../components/ContactMenu";

// Decorative mini bar chart used inside the avatar card
const bars = [38, 52, 45, 64, 58, 76, 70, 88];

// random dot positions, computed once when the module loads
const dots = [...Array(30)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 2,
  delay: Math.random() * 3,
}));

export const Hero = () => {
  const [showAllTools, setShowAllTools] = useState(false);
  const socialLinks = [
    { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
    { icon: Github, href: socials.github, label: "GitHub" },
    { icon: Mail, href: contactLinks.gmail(), label: "Email" },
  ];

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* background: spider lilies */}
      <div className="absolute inset-0 hero-bg opacity-40" />
      <div className="absolute inset-0 hero-fade" />

      {/* drifting dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {dots.map((d, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              animation: `slow-drift ${d.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left: text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {profile.role}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {profile.headline.before}{" "}
                <span className="text-primary glow-text">{profile.headline.highlight}</span>
                <br />
                {profile.headline.middle}
                <br />
                <span className="font-serif italic font-normal text-white">
                  {profile.headline.italic}
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                {profile.intro}
              </p>
            </div>

            <div className="relative z-20 flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <ContactMenu />
              <AnimatedBorderButton href={resumeUrl()} fileName={profile.resumeFileName} />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* right: profile card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/15 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface via-card to-background flex flex-col items-center justify-center gap-6 overflow-hidden relative">
                    
                    <div className="relative w-36 h-36 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center glow-border">
                      <span className="font-serif italic text-6xl text-primary">{profile.initials}</span>
                    </div>
                    <div className="relative text-center">
                      <div className="text-2xl font-semibold">{profile.name}</div>
                      <div className="text-sm text-muted-foreground mt-1">{profile.location}</div>
                    </div>
                    {/* mini chart */}
                    <div className="relative flex items-end gap-2 h-20">
                      {bars.map((h, i) => (
                        <div
                          key={i}
                          className="w-4 rounded-t bg-gradient-to-t from-primary/30 to-primary bar-grow"
                          style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">{profile.availability}</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass-strong rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-lg font-bold text-primary">{profile.experienceBadge.value}</div>
                  <div className="text-xs text-muted-foreground">{profile.experienceBadge.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tools: moving row, or vertical list when expanded */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Tools I work with</p>

          {!showAllTools ? (
            <div className="relative overflow-hidden marquee-mask">
              <div className="flex gap-4 w-max animate-marquee">
                {[...heroSkills, ...heroSkills].map((skill, idx) => (
                  <div key={idx} className="liquid-glass1 rounded-full flex-shrink-0 px-6 py-3">
                    <span className="text-sm font-semibold text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ul id="tools-list" className="flex flex-col items-center gap-3 max-w-xs mx-auto">
              {heroSkills.map((skill, idx) => (
                <li
                  key={skill}
                  className="w-full liquid-glass1 rounded-full px-6 py-3 text-center animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span className="text-sm font-semibold text-foreground/90">{skill}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => setShowAllTools((v) => !v)}
              aria-expanded={showAllTools}
              aria-controls="tools-list"
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-full text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span className="text-xs uppercase tracking-wider">
                {showAllTools ? "Show less" : "Scroll"}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${showAllTools ? "rotate-180" : "animate-bounce"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
