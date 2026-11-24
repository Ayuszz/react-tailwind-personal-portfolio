import { useEffect, useState } from "react";
import { Navbar } from "./layout/Navbar";
import { IntroTrailer } from "./components/IntroTrailer";
import { trailer } from "./portfolio.config";

// Play the intro on every page load (including refresh), on every device.
const shouldPlayIntro = () => trailer.enabled && typeof window !== "undefined";
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
  const [showIntro, setShowIntro] = useState(shouldPlayIntro);

  useEffect(() => {
    const replay = () => setShowIntro(true);
    window.addEventListener("replay-intro", replay);
    return () => window.removeEventListener("replay-intro", replay);
  }, []);

  const endIntro = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 site-bg" aria-hidden="true" />
      {showIntro && <IntroTrailer onDone={endIntro} />}
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
