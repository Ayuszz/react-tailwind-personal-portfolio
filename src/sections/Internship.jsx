import { Button } from "@/components/Button";

const internships = [
  {
    period: "2025-current",
    role: "MERN Stack Developer",
    company: "Js Spider",
    description: `As a MERN stack aspirant,we learned Node.js and Express.js and created mini projects on RESTful APIs, creating our own servers,
    and encrypting it with bcrypt and using JWT authentication for token creations and verifications of every users.`,
    technologies: ["JavaScript", "RESTful API", "Node.js", "Express.js", "Mongoose","MongoDB","Postman"],
    current: true
  },
  {
    period: "2024",
    role: "Java Developer",
    company: "Exposys Data Labs",
    description: `As a Mass Mail Dispatcher intern using Java, my role involved developing backend functionality to send bulk emails to multiple users by retrieving recipient data and email content from a database, processing the requests through server-side logic, 
    and delivering the emails via an SMTP server using the JavaMail API, while ensuring efficient handling of large email volumes, managing queues, and tracking delivery status for successful or failed messages.`,
    technologies: ["Java", "JavaMail API", "SMTP", "Database", "Backend"]
  }
];

export const Internship = () => {
  return (
    <section id="Internship" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">

        {/* section header  */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that <span className="font-serif italic font-normal text-white"> speaks volume</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of professional growth,from curious beginner to active coder,building projects.
          </p>
        </div>

      </div>

      {/* Time line */}
      <div className="relative">
        <div className="timeline-glow absolute left-[12px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

        {/* Internship items */}

        <div className="space-y-12">
          {internships.map((exp,idx)=>(
            <div key={idx} className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 sm:gap-8 w-full animate-fade-in" style={{animateDelay:`$((idx + 1)*150)ms`}}>

              {/* time line dots */}
              <div className="absolute left-[10px] md:left-1/2 top-0 w-3 h-3  bg-primary rounded-full -translate-x-1/3 ring-1 ring-background z-10 shadow-lg">
              {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}</div>

              {/* content  */}
              <div className={`w-full px-4 md:pl-0 md:px-0 md:w-auto ${idx % 2=== 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                <div className={`glass px-4 py-6 w-full max-w-[calc(100vw-3rem)] mx-auto md:max-w-none md:px-6 md:py-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="texted-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4 line-clamp-4 md:line-clamp-none">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 justify-center md:justify-start ${idx%2 == 0 ? "md:justify-end" :""}`}>
                    {exp.technologies.map((tech,techIdx) => (
                      <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                ))}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};
