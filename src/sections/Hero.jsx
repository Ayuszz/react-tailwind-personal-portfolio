// import { Button } from "../components/Button";
import { ArrowRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBoarderButton";
import { ChevronDown } from "lucide-react";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "Javascript",
  "MongoDB",
  "Tailwind css",
  "Git",
  "Vercel",
  "SDLC",
  "Figma",
  "SEO",
  "Excel",
  "Core Java",
  "Github Actions",
  "Apache",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/download (2).jpeg"
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${3 + Math.random() * 2}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column-text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer . MERN Stack Developer
              </span>
            </div>

            {/* Head line */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">precision</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                Hi, I'm Ayush Mohanty - a software engineer specializing in
                React.js, Node.js, Express.js, JavaScript, MongoDB, SQL, CSS, HTML, SDLC lifecycle.
                I build scalable, performant web applications that users would love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium transition-all duration-200 text-base">
                Contact Me <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <AnimatedBorderButton />
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* right column-profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/57 via-transparent to-primary/15 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/WhatsApp Image 2026-03-12 at 4.12.36 AM.jpeg"
                  alt="Ayush Mohanty"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float liquid-glass">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay Asc animation-delay-500 liquid-glass2">
                  <div className="text-medium font-bold text-primary">Fresher</div>
                  <div className="text-xs text-muted-foreground">0+ yr</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="liquid-glass1 rounded-full flex-shrink-0 px-8 py-4">
                <span className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-color ">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </div>
    </section>
  );
};
