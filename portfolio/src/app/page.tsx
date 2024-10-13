import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import TechStack from "./components/TechStack";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Particles as a background for all sections */}
      <Particles className="fixed inset-0 -z-10 animate-fade-in" />
      <Sidebar />
      {/* Content sections */}
      <Hero />
      <IntroSection />
      <AboutSection />
      <MyProjects />
      <TechStack />
      <ConnectSection />
    </div>
  );
}
