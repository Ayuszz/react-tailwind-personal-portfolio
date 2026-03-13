import { Code2, Rocket, Lightbulb,Users} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimization for speed and delivering lightning-fast user experiences."
  },
  {
    icon: Lightbulb,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life."
  },
  {

      icon: Users,
      title:"Innovation",
      description:
      "Staying ahead with the latest technologies and best practices"
    }
];

export const About = () => {
  return (
    <section id="About" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left coloumn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">

                       <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase">About me</span>
                   </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                      Building the future,
                      <span className="font-serif italic font-normal text-white"> One component at a time</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I'm a passionate software engineer and an mern stack aspirant a fresher right of now 
                        building and brushing up my skills,looking for any oppurtunity to showcase my skills
                    </p>
                    <p>
                        I specialize in React , Nde.js ,Express.js buildig scalable and responsive applications
                        from building sleek landing pages to complex enterprise applications. My approach combines technical excellence
                        with keen eye for design and user experience.
                    </p>
                        <p>
                            When i'm not coding, you'll find me exploring new technologies contributing to open-source projects or sharing technologies
                            with the developer community.
                            
                        </p>
                  </div>
                  <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium itlic text-foreground">
                        HIRING ME WILL BE BENEFICIAL TO YOU!!<br/>

                        
                        ..as i'm a versatile and a vibe coder who gets his work done within the time period and contribute to the management
                    </p>
                  </div>
              </div>
              {/* right column- higlights */}
              {/* this is only for dekstop mode */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((items,idx)=>(
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb hover:bg-primary/30">
                            <items.icon className="w-6 h-6 text-primary"/>

                        </div>
                        <h3 className="text-lg font-semibold mb-2">{items.title}</h3>
                        <p className="text-sm text-muted-foreground">{items.description}</p>
                    </div>
                ))}
              </div>


          </div>
        </div>
    </section>
  );
};
