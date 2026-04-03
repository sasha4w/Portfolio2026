import { useState, useEffect, useRef } from "preact/hooks";
import styles from "./Project.module.css";

// --- DONNÉES ---

const PROJECTS = [
  {
    type: "personal",
    year: "2025",
    sub: "Personal Project",
    title: "KoreanHelper",
    description: "Site web de ressources pour apprendre le coréen.",
    tags: [
      { name: "React", hi: true },
      { name: "CSS Custom" },
      { name: "Vite" },
    ],
    demo: null,
    github: "https://github.com/sasha4w/koreanhelper",
    image: null,
    accent: "#c9a447",
    accentBg: "rgba(201,164,71,0.08)",
  },
  {
    type: "personal",
    year: "2024",
    sub: "Personal Project",
    title: "Tekken Tracker",
    description:
      "Application web pour suivre les statistiques de jeu dans Tekken 8. Intégration d'une API tierce, visualisation des données avec graphiques interactifs.",
    tags: [
      { name: "React", hi: true },
      { name: "SASS", hi: true },
      { name: "axios" },
    ],
    demo: "https://tekken-tracker.netlify.app/",
    github: "https://github.com/sasha4w/tekken8-tracker",
    image: "/images/tekkentrackerImg.png",
    accent: "#eb1236",
    accentBg: "rgba(155,127,244,0.08)",
  },
  {
    type: "intern",
    year: "2025",
    sub: "Internship",
    title: "ISCI43 - Site Drupal",
    description:
      "création d'un site pour l'isci43, centre formation en alternance. Intégration d'un thème Drupal, personnalisation CSS, ajout de modules pour fonctionnalités spécifiques.",
    tags: [{ name: "Drupal", hi: true }, { name: "HTML/CSS" }],
    demo: "https://www.isci43.fr/",
    github: null,
    image: "images/isciImg2.png",
    accent: "#c9a447",
    accentBg: "rgba(201,164,71,0.08)",
  },
  {
    type: "intern",
    year: "2024",
    sub: "Internship",
    title: "Site wordpress du yoga club lucéen",
    description:
      "Refonte du site vitrine pour un club de yoga local. Installation, personnalisation d'un thème WordPress avec Elementor, optimisation SEO.",
    tags: [
      { name: "WordPress", hi: true },
      { name: "Elementor", hi: true },
      { name: "CSS Custom" },
    ],
    demo: "https://www.yogaclub-sainte-luce-sur-loire.com/",
    github: null,
    image: "/images/yogaclubImg2.png",
    accent: "#e67341",
    accentBg: "rgba(78,205,196,0.08)",
  },
  {
    type: "student",
    year: "2025",
    sub: "Student · BUT MMI",
    title: "Back 2 Nasdaces City",
    description:
      "Expérience interactive et éducative en trinôme inspirée des Zinzins de l'Espace. Concept : Voyage vers Mars découpé en trois phases interactives. Réalisation : Développement de la partie centrale (vie à bord). Création de l'environnement 3D, des dialogues et de mini-jeux d'arcade pour rythmer la progression narrative.",
    tags: [
      { name: "Three.js", hi: true },
      { name: "React", hi: true },
    ],
    demo: "https://back-2-nasdace-city.netlify.app/",
    github: "https://github.com/sasha4w/Back2nasdacecity",
    image: "/images/NasdaceImg.svg",
    accent: "#9b7ff4",
    accentBg: "rgba(155,127,244,0.08)",
  },
  {
    type: "student",
    year: "2022",
    sub: "Student · BUT MMI",
    title: "EasyCea & Deckouverte",
    description:
      "Réalisation en trinôme d'un jeu mobile inspiré de Reigns avec contenu communautaire. L'écosystème comprend une app React Native, une PWA React (création/modération) et une API PHP natif (MVC). Mon rôle : Développement complet du Backend (logique métier, API, BDD) et soutien sur le front React. Coordination de l'équipe via Trello pour assurer la synchronisation des données entre les trois plateformes.",
    tags: [
      { name: "Php", hi: true },
      { name: "React", hi: true },
      { name: "React Native", hi: true },
      { name: "Figma" },
      { name: "Trello" },
    ],
    demo: "https://easycrea.netlify.app/",
    github: "https://github.com/sasha4w/ReignApi",
    image: "/images/EasyCreaImg.svg",
    accent: "#e666ef",
    accentBg: "rgba(78,205,196,0.08)",
  },
];

const FILTERS = [
  {
    key: "personal",
    tooltip: "Personal",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    key: "intern",
    tooltip: "Internship",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    key: "student",
    tooltip: "Student",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

// --- SLIDE STATES ---
// "active" | "preStart" | "animateEnd" | "idle"

function useSlider(list) {
  const [current, setCurrent] = useState(0);
  const [states, setStates] = useState(
    list.map((_, i) => (i === 0 ? "active" : "idle")),
  );
  const transitioning = useRef(false);

  function goTo(next) {
    if (transitioning.current || states[next] === "active") return;
    transitioning.current = true;

    // preStart: prépare le prochain slide (opacity 0, prêt)
    setStates((prev) =>
      prev.map((s, i) => {
        if (i === next) return "preStart";
        return s;
      }),
    );

    // Petit délai puis lance l'animation
    setTimeout(() => {
      setStates((prev) =>
        prev.map((s, i) => {
          if (i === current) return "animateEnd";
          if (i === next) return "active";
          return s;
        }),
      );
      setCurrent(next);
    }, 50);

    // Fin de transition : reset l'ancien slide
    setTimeout(() => {
      setStates((prev) =>
        prev.map((s, i) => {
          if (i !== next) return "idle";
          return "active";
        }),
      );
      transitioning.current = false;
    }, 900);
  }

  return { current, states, goTo };
}

// --- COMPOSANT PRINCIPAL ---

export function Project() {
  const [activeFilter, setActiveFilter] = useState("personal");

  const filtered = PROJECTS.filter((p) => p.type === activeFilter).sort(
    (a, b) => b.year - a.year,
  );

  const { current, states, goTo } = useSlider(filtered);

  function switchFilter(key) {
    setActiveFilter(key);
  }

  // Reset slider quand le filtre change
  const prevFilter = useRef(activeFilter);
  useEffect(() => {
    prevFilter.current = activeFilter;
  }, [activeFilter]);

  return (
    <section id="projects">
      <div class="container">
        <div class="sectionLabel">03 · Projets</div>
        <h2 class="sectionTitle">
          Réalisations &amp; <span>Projets</span>
        </h2>
        <div class="divider" />

        {/* FILTRES */}
        <div class={styles.filters}>
          {FILTERS.map((f) => (
            <div key={f.key} class={styles.filterItem}>
              <span class={styles.filterTooltip}>{f.tooltip}</span>
              <button
                class={`${styles.filterBtn} ${activeFilter === f.key ? styles.active : ""}`}
                onClick={() => switchFilter(f.key)}
                aria-label={f.tooltip}
              >
                <span class={styles.filterBtnCount}>
                  {PROJECTS.filter((p) => p.type === f.key).length}
                </span>
                {f.icon}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER WRAPPER — full width */}
      <div class={styles.sliderWrapper}>
        {filtered.map((project, i) => {
          const state = states[i];
          const slideClass = [
            styles.slide,
            state === "active" ? styles.slideActive : "",
            state === "preStart" ? styles.slidePreStart : "",
            state === "animateEnd" ? styles.slideAnimateEnd : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div
              key={`${activeFilter}-${i}`}
              class={slideClass}
              style={{
                "--accent": project.accent,
                "--accent-bg": project.accentBg,
              }}
            >
              {/* LEFT */}
              <div class={styles.slideLeft}>
                <div class={styles.slideContent}>
                  <p class={styles.slideSub}>{project.sub}</p>
                  <div class={styles.slideYearBadge}>{project.year}</div>
                  <h2 class={styles.slideTitle}>{project.title}</h2>
                  <p class={styles.slideDesc}>{project.description}</p>
                  <div class={styles.slideTags}>
                    {project.tags.map((t) => (
                      <span
                        key={t.name}
                        class={`${styles.tag} ${t.hi ? styles.hi : ""}`}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <div class={styles.slideLinks}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        class="btn btn-primary"
                        target="_blank"
                        rel="noopener"
                      >
                        ↗ Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        class="btn btn-ghost"
                        target="_blank"
                        rel="noopener"
                      >
                        {"{ }"} GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Watermark */}
                <div class={styles.watermark}>{project.title}</div>
              </div>

              {/* RIGHT — image */}
              <div class={styles.slideRight}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    class={styles.slideImg}
                  />
                ) : (
                  <div class={styles.slidePlaceholder}>
                    <span class={styles.placeholderYear}>{project.year}</span>
                    <span class={styles.placeholderTitle}>{project.title}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* NAVIGATION LATÉRALE */}
        <nav class={styles.sideNav}>
          {filtered.map((_, i) => (
            <button
              key={i}
              class={`${styles.navDot} ${i === current ? styles.navDotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Projet ${i + 1}`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
