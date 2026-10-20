import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Moncode from "@/components/Moncode";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FloatingCV from "@/components/FloatingCV";

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Moncode />
      <Portfolio />
      <Education />
      <Contact />
      <FloatingCV />
    </main>
  );
}
