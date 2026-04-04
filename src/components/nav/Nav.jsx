import { useState, useEffect } from "preact/hooks";
import { useI18n } from "../../i18n/usei18n";
import styles from "./Nav.module.css";

const LANGS = ["fr", "en", "ko"];
const LABELS = { fr: "FR", en: "EN", ko: "한국어" };

export function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const { t, locale, setLocale } = useI18n();

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
      <div class={styles.navLogo}>Rochedix Sasha · Portfolio</div>
      <div class={styles.navLinks}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            class={
              activeSection === link.href.substring(1) ? styles.active : ""
            }
          >
            {link.name}
          </a>
        ))}
        <a href="mailto:sasharochedix@gmail.com">Contact</a>
      </div>
      <div class={styles.langSwitcher}>
        {LANGS.map((lang) => (
          <button
            key={lang}
            class={
              locale === lang
                ? styles.langBtn + " " + styles.langActive
                : styles.langBtn
            }
            onClick={() => setLocale(lang)}
          >
            {LABELS[lang]}
          </button>
        ))}
      </div>
    </nav>
  );
}
