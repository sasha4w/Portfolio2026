import { useState } from "preact/hooks";
import { Reveal } from "../../utils/Reveal";
import styles from "./Art.module.css";
import maquetteImg from "../../assets/maquette.png";
import logoImg from "../../assets/logo.png";
import PhotomontageImg from "../../assets/photomontage.webp";
import serigraphieImg from "../../assets/serigraphie.webp";
import conceptImg from "../../assets/concept.jpg";

const ARTWORKS = [
  { id: 1, type: "PHOTOGRAPHIE", title: "Experiment", img: conceptImg },
  {
    id: 2,
    type: "MAQUETTE UI",
    title: "Menu site web pwa de minis jeux",
    img: maquetteImg,
  },
  { id: 3, type: "LOGO", title: "Brand Identity", img: logoImg },
  {
    id: 4,
    type: "SERIGRAPHIE",
    title: "Impression of my mood",
    img: serigraphieImg,
  },
  { id: 5, type: "PHOTOMONTAGE", title: "One Light", img: PhotomontageImg },
];

export function Art() {
  const [selected, setSelected] = useState(null);

  const openModal = (work) => setSelected(work);
  const closeModal = () => setSelected(null);

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
              <div
                key={work.id}
                className={styles.card}
                onClick={() => openModal(work)}
              >
                <img src={work.img} alt={work.title} draggable="false" />
                <div className={styles.cardHead}>
                  <span className={styles.cardTag}>{work.type}</span>
                  <h4 className={styles.cardTitle}>{work.title}</h4>
                </div>
                <div className={styles.cardHoverInfo}>
                  <span>Voir le projet →</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* MODAL */}
      {selected && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ✕
            </button>
            <img src={selected.img} alt={selected.title} draggable="false" />
            <div className={styles.modalInfo}>
              <span className={styles.modalTag}>{selected.type}</span>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
