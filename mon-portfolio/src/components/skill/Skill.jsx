import { Reveal } from "../../utils/Reveal";
import styles from "./Skill.module.css";

// --- 1. SOUS-COMPOSANTS ---

function SkillCard({ icon, title, tags }) {
  return (
    <div class={styles.skillCard}>
      <div class={styles.skillCardIcon}>{icon}</div>
      <h3>{title}</h3>
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
    </div>
  );
}

function DiplomaItem({ year, title, school, description }) {
  return (
    <div class={styles.diplomeItem}>
      <div class={styles.diplomeYear}>{year}</div>
      <div class={styles.diplomeInfo}>
        <h4>{title}</h4>
        <p>
          <strong>{school}</strong> {description}
        </p>
      </div>
    </div>
  );
}

// --- 2. DONNÉES ---

const SKILLS_DATA = [
  {
    icon: "⚛",
    title: "Frontend",
    delay: "",
    tags: [
      { name: "React / Preact", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Vite" },
      { name: "CSS Custom" },
      { name: "SASS" },
      { name: "Three.js" },
      { name: "JavaScript" },
    ],
  },
  {
    icon: "⚙",
    title: "Backend",
    delay: "d1",
    tags: [
      { name: "NestJS", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "REST API" },
      { name: "mySQL" },
      { name: "JWT" },
      { name: "Php" },
      { name: "MVC Model" },
    ],
  },
  {
    icon: "✦",
    title: "Design & Créa",
    delay: "d2",
    tags: [
      { name: "Figma", highlight: true },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "UX/UI" },
    ],
  },
  {
    icon: "🔧",
    title: "Outils",
    delay: "",
    tags: [
      { name: "Git / GitHub" },
      { name: "Netlify" },
      { name: "React Query" },
      { name: "Linux" },
    ],
  },
  {
    icon: "🌐",
    title: "Langues",
    delay: "d1",
    tags: [
      { name: "Français · Natif", highlight: true },
      { name: "Anglais · B2", highlight: true },
      { name: "Coréen · TOPIK II", highlight: true },
    ],
  },
  {
    icon: "◈",
    title: "Soft Skills",
    delay: "d2",
    tags: [
      { name: "Gestion de projet" },
      { name: "Autonomie" },
      { name: "Dévoué" },
      { name: "Coopératif" },
    ],
  },
];

const FORMATION_DATA = [
  {
    year: "2025-2026",
    title: "Korean Language Level 2",
    school: "Dongguk University",
    description: "",
  },
  {
    year: "2022–25",
    title: "BUT MMI",
    school: "IUT d'Angoulême",
    description: "· Développement Web & Création numérique",
  },
  {
    year: "2022",
    title: "Baccalauréat — Mention Bien",
    school: "Lycée Leonard de Vinci",
    description: "· Spécialité SES, Anglais et Arts plastiques",
  },
];

// --- 3. COMPOSANT PRINCIPAL ---

export function Skill() {
  return (
    <section id="skills">
      <div class="container">
        <div class={styles.sectionLabel}>02 · Stack &amp; Formation</div>
        <h2 class={styles.sectionTitle}>
          Compétences &amp; <span>Outils</span>
        </h2>
        <div class="divider"></div>

        <div class={styles.skillsGrid}>
          {SKILLS_DATA.map((skill, index) => (
            <Reveal key={index} delay={skill.delay}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                tags={skill.tags}
              />
            </Reveal>
          ))}
        </div>

        <h3 class={styles.formationTitle}>Formation</h3>

        {/* On entoure tout le bloc diplômes pour le reveal global comme dans ton HTML */}
        <Reveal>
          <div class={styles.diplomes}>
            {FORMATION_DATA.map((item, index) => (
              <DiplomaItem key={index} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
