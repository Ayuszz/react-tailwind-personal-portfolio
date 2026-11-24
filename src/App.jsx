import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { Impact } from "./sections/Impact";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <div className="container mx-auto px-6"><div className="ribbon-line" /></div>
        <Experience />
        <div className="container mx-auto px-6"><div className="ribbon-line" /></div>
        <Projects />
        <div className="container mx-auto px-6"><div className="ribbon-line" /></div>
        <Skills />
        <div className="container mx-auto px-6"><div className="ribbon-line" /></div>
        <Education />
        <div className="container mx-auto px-6"><div className="ribbon-line" /></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
