import { StarsCanvas } from "./components/layout/StarCanvas";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/skill/Skill";

export function App() {
  return (
    <>
      <StarsCanvas />

      <Nav />

      <main>
        {/* On mettra le <Hero /> ici */}

        <Hero />
        <Skill />
        {/* C'est ici que tu ajouteras <Skills />, <Projects />, etc. */}
      </main>

      {/* 4. Le bas de page */}
      <Footer />
    </>
  );
}
