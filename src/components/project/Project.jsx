import { Reveal } from "../../utils/Reveal";
import styles from "./Project.module.css";

// --- 1. SOUS-COMPOSANT UNIQUE POUR LES PROJETS ---
function ProjectCard({ title, description, period, tags, github, live }) {
  return (
    <div class={styles.projectCard}>
      <div class={styles.projectImg}>
        <div class={styles.projectImgPlaceholder}>
          <div class={styles.projectIcon}>🖼</div>
          <span>[ Screenshot ]</span>
        </div>
        <div class={styles.periodBadge}>{period}</div>
      </div>
      <div class={styles.projectBody}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div class={styles.projectFooter}>
        <div class={styles.tags}>
          {tags.map((tag) => (
            <span
              key={tag.name}
              class={`${styles.tag} ${tag.highlight ? styles.hi : ""}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div class={styles.projectLinks}>
          {github && (
            <a href={github} class={styles.projectLink} target="_blank">
              GitHub →
            </a>
          )}
          {live && (
            <a href={live} class={styles.projectLink} target="_blank">
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// --- 2. DONNÉES ---
const PERSONAL_PROJECTS = [
  {
    title: "Tekken Tracker",
    period: "2025",
    description:
      "Utiliser une API publique pour suivre les stats de mes combats en ligne sur Tekken 8. Dashboard React avec graphiques de performance.",
    tags: [{ name: "React", highlight: true }, { name: "Node.js" }],
    github: "https://github.com/sasha4w/tekken8-tracker",
    live: "https://tekken-tracker.netlify.app/",
  },
  {
    title: "Portfolio d'un ami",
    period: "2024",
    description: "Un portfolio en ambiance sombre réalisé sur mesure.",
    tags: [{ name: "Vanilla JS" }, { name: "CSS" }],
    github: "#",
  },
];

const STUDENT_PROJECTS = [
  {
    title: "Les Nasdaces de l'espace",
    period: "S5 · 2025",
    description:
      "Expérience ludique et éducative sur Mars. Mini-jeu vidéo utilisant Three.js pour le rendu 3D et React pour l'interface.",
    tags: [{ name: "React" }, { name: "Three.js" }],
    github: "#",
    live: "#",
  },
  {
    title: "Deckouverte",
    period: "S4 · 2025",
    description:
      "Application mobile de partage de cartes narratives inspirée de Reigns. Système de création de decks communautaires.",
    tags: [{ name: "React Native" }],
    github: "#",
  },
  {
    title: "Easycrea",
    period: "S4 · 2025",
    description:
      "PWA d'administration pour Deckouverte. Réalisation du backend complet en PHP natif avec une architecture MVC.",
    tags: [{ name: "React" }, { name: "Php" }],
    github: "#",
  },
];

// --- 3. COMPOSANT PRINCIPAL ---
export function Project() {
  return (
    <section id="projects">
      <div class="container">
        <div class={styles.sectionLabel}>04 · Projets</div>
        <h2 class={styles.sectionTitle}>
          Projets <span>Personnels</span>
        </h2>
        <div class="divider"></div>

        <div class={styles.timeline}>
          {PERSONAL_PROJECTS.map((proj, i) => (
            <Reveal key={i} delay={i === 1 ? "d1" : ""}>
              <div class={styles.titem}>
                <ProjectCard {...proj} />
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: "5rem" }}>
          <div class={styles.subLabel}>Projets étudiants · MMI</div>
          <div class={styles.timeline}>
            {STUDENT_PROJECTS.map((proj, i) => (
              <Reveal key={i} delay={i % 2 !== 0 ? "d1" : ""}>
                <div class={styles.titem}>
                  <ProjectCard {...proj} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
