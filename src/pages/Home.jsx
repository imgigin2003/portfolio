import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}