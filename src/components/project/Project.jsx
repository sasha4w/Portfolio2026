import { useState, useEffect, useRef } from "preact/hooks";
import { useI18n } from "../../i18n/usei18n";
import styles from "./Project.module.css";

// --- DONNÉES (non traduisibles ici) ---

const PROJECTS = [
  {
    key: "koreanHelper",
    type: "personal",
    year: "2025",
    subKey: "personal",
    tags: [
      { name: "React", hi: true },
      { name: "CSS Custom" },
      { name: "Supabase" },
    ],
    demo: "https://korean-helper.netlify.app",
    github: "https://github.com/sasha4w/koreanhelper",
    image: "/images/KoreanHelperImg.svg",
    accent: "#c9a447",
    accentBg: "rgba(201,164,71,0.08)",
  },
  {
    key: "tekkenTracker",
    type: "personal",
    year: "2024",
    subKey: "personal",
    tags: [
      { name: "React", hi: true },
      { name: "SASS", hi: true },
      { name: "axios" },
    ],
    demo: "https://tekken-tracker.netlify.app/",
    github: "https://github.com/sasha4w/tekken8-tracker",
    image: "/images/tekkentrackerImg.webp",
    accent: "#eb1236",
    accentBg: "rgba(155,127,244,0.08)",
  },
  {
    key: "isci43",
    type: "intern",
    year: "2025",
    subKey: "intern",
    tags: [
      { name: "Drupal", hi: true },
      { name: "HTML/CSS" },
      { name: "Google workspace" },
    ],
    demo: "https://www.isci43.fr/",
    github: null,
    image: "images/isciImg2.webp",
    accent: "#c9a447",
    accentBg: "rgba(201,164,71,0.08)",
  },
  {
    key: "yogaClub",
    type: "intern",
    year: "2024",
    subKey: "intern",
    tags: [
      { name: "WordPress", hi: true },
      { name: "Elementor", hi: true },
      { name: "CSS Custom" },
      { name: "Trello" },
    ],
    demo: "https://www.yogaclub-sainte-luce-sur-loire.com/",
    github: null,
    image: "/images/yogaclubImg2.webp",
    accent: "#e67341",
    accentBg: "rgba(78,205,196,0.08)",
  },
  {
    key: "nasdace",
    type: "student",
    year: "2025",
    subKey: "student",
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
    key: "easyCrea",
    type: "student",
    year: "2022",
    subKey: "student",
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

function useSlider(list) {
  const [current, setCurrent] = useState(0);
  const [states, setStates] = useState(
    list.map((_, i) => (i === 0 ? "active" : "idle")),
  );
  const transitioning = useRef(false);

  function goTo(next) {
    if (transitioning.current || states[next] === "active") return;
    transitioning.current = true;

    setStates((prev) => prev.map((s, i) => (i === next ? "preStart" : s)));

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

    setTimeout(() => {
      setStates((prev) => prev.map((s, i) => (i !== next ? "idle" : "active")));
      transitioning.current = false;
    }, 900);
  }

  return { current, states, goTo };
}

// --- COMPOSANT PRINCIPAL ---

export function Project() {
  const [activeFilter, setActiveFilter] = useState("personal");
  const { t } = useI18n();

  const filtered = PROJECTS.filter((p) => p.type === activeFilter).sort(
    (a, b) => b.year - a.year,
  );
  const { current, states, goTo } = useSlider(filtered);

  const prevFilter = useRef(activeFilter);
  useEffect(() => {
    prevFilter.current = activeFilter;
  }, [activeFilter]);

  return (
    <section id="projects">
      <div class="container">
        <div class="sectionLabel">{t.project.sectionLabel}</div>
        <h2 class="sectionTitle">
          {t.project.sectionTitle} <span>{t.project.sectionTitleSpan}</span>
        </h2>
        <div class="divider" />

        <div class={styles.filters}>
          {FILTERS.map((f) => (
            <div key={f.key} class={styles.filterItem}>
              <span class={styles.filterTooltip}>
                {t.project.filters[f.key]}
              </span>
              <button
                class={
                  activeFilter === f.key
                    ? styles.filterBtn + " " + styles.active
                    : styles.filterBtn
                }
                onClick={() => setActiveFilter(f.key)}
                aria-label={t.project.filters[f.key]}
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

          const tProject = t.project.projects[project.key];

          return (
            <div
              key={`${activeFilter}-${i}`}
              class={slideClass}
              style={{
                "--accent": project.accent,
                "--accent-bg": project.accentBg,
              }}
            >
              <div class={styles.slideLeft}>
                <div class={styles.slideContent}>
                  <p class={styles.slideSub}>
                    {t.project.filters[project.subKey]}
                  </p>
                  <div class={styles.slideYearBadge}>{project.year}</div>
                  <h2 class={styles.slideTitle}>{tProject.title}</h2>
                  <p class={styles.slideDesc}>{tProject.description}</p>
                  <div class={styles.slideTags}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        class={
                          tag.hi ? styles.tag + " " + styles.hi : styles.tag
                        }
                      >
                        {tag.name}
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
                <div class={styles.watermark}>{tProject.title}</div>
              </div>

              <div class={styles.slideRight}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={tProject.title}
                    class={styles.slideImg}
                    draggable="false"
                  />
                ) : (
                  <div class={styles.slidePlaceholder}>
                    <span class={styles.placeholderYear}>{project.year}</span>
                    <span class={styles.placeholderTitle}>
                      {tProject.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <nav class={styles.sideNav}>
          {filtered.map((_, i) => (
            <button
              key={i}
              class={
                i === current
                  ? styles.navDot + " " + styles.navDotActive
                  : styles.navDot
              }
              onClick={() => goTo(i)}
              aria-label={`${t.project.projectLabel} ${i + 1}`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
