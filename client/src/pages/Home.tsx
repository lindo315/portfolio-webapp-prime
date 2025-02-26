import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="bg-[#0A192F] min-h-screen">
      <Navigation />
      <SocialLinks />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}
