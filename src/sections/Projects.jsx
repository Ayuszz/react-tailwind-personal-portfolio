// import { Button } from "../components/Button";
import { Github, ExternalLink, Folder, Eye } from "lucide-react";

const projects = [
  {
    title: "Spotify customized clone",
    description: "A comprehensive music rendering platform with real-time data visualisation",
    image: "/Screenshot 2026-03-12 164249.png",
    tags: ["React.js", "TailwindCSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Fooding Web Pge",
    description: "A featured web page for an fooding market with just basic skills but very responsive",
    image: "/Screenshot 2026-03-12 164220.png",
    tags: ["Basic html", "Flex CSS"],
    github: "#",
    live: "#"
  }
  // Add more projects here
];

export const Projects = () => {
  return (
    <section id="Projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent work and passion projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-3xl p-8 hover:glass-strong transition-all duration-300 overflow-hidden">
              <div className="relative mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2">
                    <a href={project.github} className="p-3 bg-primary/20 hover:bg-primary text-primary rounded-xl group-hover:scale-110 transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="p-3 bg-secondary/20 hover:bg-secondary text-secondary rounded-xl group-hover:scale-110 transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Folder size={18} />
                  <span>Featured Project</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="mt-4 px-4 py-2 rounded-full font-medium text-sm bg-primary/10 text-primary hover:bg-primary transition-all">
                  View Project <Eye className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
