import { Reveal } from "../../utils/Reveal";
import styles from "./Tcg.module.css";

// --- SOUS-COMPOSANTS SVG POUR PLUS DE LISIBILITÉ ---
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 30 30"
      version="1.1"
      fill="currentColor"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <title>settings</title>
        <desc>Created with Sketch Beta.</desc>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-103.000000, -362.000000)"
            fill="currentColor"
          >
            <path d="M118,382 C115.261,382 113.042,379.762 113.042,377 C113.042,374.238 115.261,372 118,372 C120.739,372 122.959,374.238 122.959,377 C122.959,379.762 120.739,382 118,382 L118,382 Z M132.008,380.536 L129.685,379.184 C129.815,378.474 129.901,377.749 129.901,377 C129.901,376.252 129.815,375.526 129.685,374.816 L132.008,373.464 C132.957,372.912 133.281,371.688 132.733,370.732 L130.75,367.268 C130.203,366.312 128.989,365.983 128.041,366.536 L125.694,367.901 C124.598,366.961 123.352,366.192 121.967,365.697 L121.967,364 C121.967,362.896 121.079,362 119.983,362 L116.017,362 C114.921,362 114.033,362.896 114.033,364 L114.033,365.697 C112.648,366.192 111.402,366.961 110.306,367.901 L107.959,366.536 C107.011,365.983 105.797,366.312 105.25,367.268 L103.267,370.732 C102.719,371.688 103.044,372.912 103.992,373.464 L106.315,374.816 C106.185,375.526 106.099,376.252 106.099,377 C106.099,377.749 106.185,378.474 106.315,379.184 L103.992,380.536 C103.044,381.088 102.719,382.312 103.267,383.268 L105.25,386.732 C105.797,387.688 107.011,388.017 107.959,387.464 L110.306,386.099 C111.402,387.039 112.648,387.809 114.033,388.303 L114.033,390 C114.033,391.104 114.921,392 116.017,392 L119.983,392 C121.079,392 121.967,391.104 121.967,390 L121.967,388.303 C123.352,387.809 124.598,387.039 125.694,386.099 L128.041,387.464 C128.989,388.017 130.203,387.688 130.75,386.732 L132.733,383.268 C133.281,382.312 132.957,381.088 132.008,380.536 L132.008,380.536 Z M118,374 C116.357,374 115.025,375.344 115.025,377 C115.025,378.657 116.357,380 118,380 C119.643,380 120.975,378.657 120.975,377 C120.975,375.344 119.643,374 118,374 L118,374 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="-6 0 60 60"
      version="1.1"
      fill="currentColor"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <title>art-tools</title>
        <desc>Created with Sketch.</desc>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-6.000000, 0.000000)" fill="currentColor">
            <path d="M45,48 C44.448,48 44,48.448 44,49 L44,51 C44,51.552 44.448,52 45,52 C45.552,52 46,51.552 46,51 L46,49 C46,48.448 45.552,48 45,48 L45,48 Z M46,37 C46,36.448 45.552,36 45,36 C44.448,36 44,36.448 44,37 L44,45 C44,45.552 44.448,46 45,46 C45.552,46 46,45.552 46,45 L46,37 Z M52,26 L8,26 C6.897,26 6,26.897 6,28 L6,32 C6,33.103 6.897,34 8,34 L8,55 C8,57.757 10.243,60 13,60 L47,60 C49.757,60 52,57.757 52,55 L52,37 C52,36.448 51.552,36 51,36 C50.448,36 50,36.448 50,37 L50,55 C50,56.654 48.654,58 47,58 L13,58 C11.346,58 10,56.654 10,55 L10,33 C10,32.448 9.552,32 9,32 L8,32 L8,28 L52,28 L52,32 L13,32 C12.448,32 12,32.448 12,33 C12,33.552 12.448,34 13,34 L52,34 C53.103,34 54,33.103 54,32 L54,28 C54,26.897 53.103,26 52,26 L52,26 Z M28,16.466 L28,23 C28,23.552 28.448,24 29,24 C29.552,24 30,23.552 30,23 L30,16 C30,15.686 29.85,15.388 29.599,15.199 C28.583,14.435 28,13.269 28,12 C28,9.484 30.421,5.216 32,2.783 C33.579,5.216 36,9.484 36,12 C36,13.901 34.65,15.55 32.791,15.922 C32.249,16.03 31.897,16.557 32.006,17.098 C32.114,17.64 32.641,17.988 33.182,17.883 C35.974,17.326 38,14.852 38,12 C38,7.729 33.025,0.715 32.814,0.419 C32.438,-0.107 31.562,-0.107 31.186,0.419 C30.975,0.715 26,7.729 26,12 C26,13.714 26.709,15.304 28,16.466 L28,16.466 Z M9,24 L11,24 C11.552,24 12,23.552 12,23 C12,22.448 11.552,22 11,22 L10,22 L10,20 L15,20 C15.552,20 16,19.552 16,19 C16,18.448 15.552,18 15,18 L10,18 L10,16 L11,16 C11.552,16 12,15.552 12,15 C12,14.448 11.552,14 11,14 L10,14 L10,12 L11,12 C11.552,12 12,11.552 12,11 C12,10.448 11.552,10 11,10 L10,10 L10,8 L15,8 C15.552,8 16,7.552 16,7 C16,6.448 15.552,6 15,6 L10,6 L10,2 L22,2 L22,23 C22,23.552 22.448,24 23,24 C23.552,24 24,23.552 24,23 L24,1 C24,0.448 23.552,0 23,0 L9,0 C8.448,0 8,0.448 8,1 L8,23 C8,23.552 8.448,24 9,24 L9,24 Z M45,13 L45,23 C45,23.552 45.448,24 46,24 C46.552,24 47,23.552 47,23 L47,13 C47,12.448 46.552,12 46,12 C45.448,12 45,12.448 45,13 L45,13 Z M51,12 C50.448,12 50,12.448 50,13 L50,23 C50,23.552 50.448,24 51,24 C51.552,24 52,23.552 52,23 L52,13 C52,12.448 51.552,12 51,12 L51,12 Z M41,24 C41.552,24 42,23.552 42,23 L42,9.287 L46,2.887 L49.196,8 L45,8 C44.448,8 44,8.448 44,9 C44,9.552 44.448,10 45,10 L51,10 C51.364,10 51.698,9.803 51.875,9.485 C52.051,9.167 52.041,8.778 51.848,8.47 L46.848,0.47 C46.482,-0.115 45.518,-0.115 45.152,0.47 L40.152,8.47 C40.053,8.629 40,8.812 40,9 L40,23 C40,23.552 40.448,24 41,24 L41,24 Z M36,20 L36,23 C36,23.552 35.552,24 35,24 C34.448,24 34,23.552 34,23 L34,20 C34,19.448 34.448,19 35,19 C35.552,19 36,19.448 36,20 L36,20 Z"></path>
          </g>
        </g>
      </g>
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
              <div class={styles.pillarIcon}>
                <PaletteIcon />
              </div>
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
              <div class={styles.pillarIcon}>
                <SettingsIcon />
              </div>
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
