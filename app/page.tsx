import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Achievements />
        <Education />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
