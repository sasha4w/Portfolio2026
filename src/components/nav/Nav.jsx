import { useState, useEffect } from "preact/hooks";
import styles from "./Nav.module.css";

export function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Stack", href: "#skills" },
    { name: "TCG Project", href: "#tcg" },
    { name: "Projets", href: "#projects" },
    { name: "Créations", href: "#art" },
  ];

  return (
    <nav class={styles.navWrapper}>
      <div class={styles.navLogo}>Rochedix Sasha · Portfolio</div>
      <div class={styles.navLinks}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            // On compare l'ID actif avec le href (sans le #)
            class={
              activeSection === link.href.substring(1) ? styles.active : ""
            }
          >
            {link.name}
          </a>
        ))}
        <a href="mailto:sasharochedix@gmail.com">Contact</a>
      </div>
    </nav>
  );
}
