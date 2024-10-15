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
    <div>
      <Sidebar />
      <Hero />
      <div id="intro">
        <IntroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <div id="contact">
        <ConnectSection />
      </div>
    </div>
  );
}
