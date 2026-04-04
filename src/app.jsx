import { StarsCanvas } from "./components/layout/StarCanvas";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/skill/Skill";
import { Tcg } from "./components/tcg/Tcg";
import { Project } from "./components/project/Project";
import { Art } from "./components/art/Art";
import { I18nProvider } from "./i18n/usei18n";
export function App() {
  return (
    <I18nProvider>
      <StarsCanvas />
      <Nav />
      <main>
        <Hero />
        <Skill />
        <Tcg />
        <Project />
        <Art />
      </main>
      <Footer />
    </I18nProvider>
  );
}
