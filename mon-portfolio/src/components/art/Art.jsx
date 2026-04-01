import { Reveal } from "../../utils/Reveal";
import styles from "./Art.module.css";

const ARTWORKS = [
  { id: 1, type: "ILLUSTRATION", title: "Project Alpha", img: "votre_img.jpg" },
  {
    id: 2,
    type: "MAQUETTE UI",
    title: "Dashboard Mobile",
    img: "votre_img.jpg",
  },
  { id: 3, type: "LOGO", title: "Brand Identity", img: "votre_img.jpg" },
  { id: 4, type: "CONCEPT ART", title: "Environment", img: "votre_img.jpg" },
  { id: 5, type: "PHOTOMONTAGE", title: "Surreal Scene", img: "votre_img.jpg" },
];

export function Art() {
  return (
    <section id="art" className={styles.artSection}>
      <div className="container">
        <div className="section-label">04bis · Côté Artistique</div>
        <h2 className="section-title">
          Créations <span>Visuelles</span>
        </h2>
        <div className="divider"></div>

        <Reveal width="100%">
          <div className={styles.artAccordion}>
            {ARTWORKS.map((work) => (
              <div key={work.id} className={styles.card}>
                <img src={work.img} alt={work.title} />

                {/* On utilise cardHead comme conteneur pour gérer l'écriture verticale */}
                <div className={styles.cardHead}>
                  <span className={styles.cardTag}>{work.type}</span>
                  <h4 className={styles.cardTitle}>{work.title}</h4>
                </div>

                {/* Petit bonus si tu veux garder le "Voir le projet" au hover uniquement */}
                <div className={styles.cardHoverInfo}>
                  <span>Voir le projet →</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
