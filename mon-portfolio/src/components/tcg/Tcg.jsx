import { Reveal } from "../../utils/Reveal";
import styles from "./Tcg.module.css";

// --- SOUS-COMPOSANT SVG POUR PLUS DE LISIBILITÉ ---
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// --- COMPOSANT PRINCIPAL ---
export function Tcg() {
  return (
    <section id="tcg">
      <div class="container">
        {/* EN-TÊTE DU PROJET */}
        <Reveal>
          <div class={styles.tcgHeader}>
            <p class={styles.tcgEyebrow}>03 · Projet principal · Case Study</p>
            <h2 class={styles.tcgMainTitle}>
              <span class={styles.where}>Where </span>
              <span class={styles.art}>Art</span>
              <span class={styles.meets}> meets </span>
              <span class={styles.code}>Code</span>
            </h2>
            <p class={styles.tcgSubtitle}>
              Un jeu de cartes à collectionner fullstack — de la conception
              graphique jusqu'à l'API REST et l'interface de jeu et
              d'administration.
            </p>
          </div>
        </Reveal>

        {/* ZONE VIDÉO / DÉMO LIVE */}
        <Reveal delay="d1">
          <div class={styles.tcgVideoZone}>
            <a
              href="https://pipoutcg.netlify.app/"
              class={`btn btn-ghost ${styles.tcgLiveBadge}`}
              target="_blank"
            >
              ▶ Play Now · Live Demo
            </a>
            <div class={styles.playBtn}>
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p class={styles.videoLabel}>[ Démo 30s de l'app en action ]</p>
          </div>
        </Reveal>

        <Reveal delay="d2">
          <div class={styles.tcgRepoLinks}>
            <a
              href="https://github.com/sasha4w/tcg-frontend"
              class="btn-code"
              target="_blank"
            >
              <GithubIcon /> Voir le code · Frontend (React + Vite)
            </a>
            <a
              href="https://github.com/sasha4w/tcg-backend"
              class="btn-code"
              target="_blank"
            >
              <GithubIcon /> Voir le code · Backend (NestJS)
            </a>
          </div>
        </Reveal>

        <div class={styles.tcgPillars}>
          <Reveal>
            <div class={`${styles.pillar} ${styles.art}`}>
              <div class={styles.pillarIcon}>🎨</div>
              <h3>La Vision Créative</h3>
              <ul class={styles.pillarList}>
                <li>
                  Univers thématique : L'idée était de créer un TCG donc chaque
                  archétype de carte monstres a été conçu pour évoquer un style
                  visuel ambiance spécifique...
                </li>
                <li>
                  Jeux composé en 3 pilliers : chaque pilier a été pensé pour
                  offrir une expérience de jeu complémentaire...
                </li>
                <li>Collection et ouverture de boosters</li>
                <li>Economie interne avec vente et achat des cartes...</li>
                <li>Construction de deck pour faire des combats en ligne.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay="d1">
            <div class={`${styles.pillar} ${styles.tech}`}>
              <div class={styles.pillarIcon}>⚙️</div>
              <h3>L'Ingénierie Technique</h3>
              <ul class={styles.pillarList}>
                <li>API REST NestJS · CRUD cartes, sets, boosters</li>
                <li>
                  Admin Panel React + Vite · filtres, pagination, React Query
                </li>
                <li>Auth JWT · gestion des rôles admin / joueur</li>
                <li>
                  Déployé sur Netlify (front) + Render (back) + Aiven (DB)
                </li>
                <li>Gestion de projet de A à Z : specs → hébergement</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
