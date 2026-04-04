import { useState, useEffect } from "preact/hooks";
import { useI18n } from "../../i18n/usei18n";
import styles from "./Nav.module.css";

const LANGS = ["fr", "en", "ko"];
const LABELS = { fr: "FR", en: "EN", ko: "KO" }; // "KO" court pour gagner de la place

export function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le menu
  const { t, locale, setLocale } = useI18n();

  // On ferme le menu quand on clique sur un lien ou qu'on change de langue
  const closeMenu = () => setIsOpen(false);

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
    { name: t.nav.stack, href: "#skills" },
    { name: t.nav.tcg, href: "#tcg" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.art, href: "#art" },
  ];

  return (
    <nav class={styles.navWrapper}>
      <div class={styles.navLogo}>
        Rochedix Sasha <span class={styles.logoDot}>·</span> Portfolio
      </div>

      {/* Les liens qui se transforment en menu mobile */}
      <div class={`${styles.navLinks} ${isOpen ? styles.menuOpen : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            class={
              activeSection === link.href.substring(1) ? styles.active : ""
            }
          >
            {link.name}
          </a>
        ))}
        <a href="mailto:sasharochedix@gmail.com" onClick={closeMenu}>
          Contact
        </a>
      </div>

      {/* Zone fixe à droite : Langues + Burger */}
      <div class={styles.navActions}>
        <div class={styles.langSwitcher}>
          {LANGS.map((lang) => (
            <button
              key={lang}
              class={
                locale === lang
                  ? `${styles.langBtn} ${styles.langActive}`
                  : styles.langBtn
              }
              onClick={() => {
                setLocale(lang);
                closeMenu();
              }}
            >
              {LABELS[lang]}
            </button>
          ))}
        </div>

        <button
          class={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div class={`${styles.line} ${isOpen ? styles.line1 : ""}`}></div>
          <div class={`${styles.line} ${isOpen ? styles.line2 : ""}`}></div>
          <div class={`${styles.line} ${isOpen ? styles.line3 : ""}`}></div>
        </button>
      </div>
    </nav>
  );
}
