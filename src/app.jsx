import { StarsCanvas } from "./components/layout/StarCanvas";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/skill/Skill";
import { Tcg } from "./components/tcg/Tcg";
import { Project } from "./components/project/Project";
import { Art } from "./components/art/Art";
export function App() {
  return (
    <>
      <StarsCanvas />

      <Nav />

      <main>
        {/* On mettra le <Hero /> ici */}

        <Hero />
        <Skill />
        <Tcg />
        <Project />
        <Art />
      </main>

      {/* 4. Le bas de page */}
      <Footer />
    </>
  );
}
