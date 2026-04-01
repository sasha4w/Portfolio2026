import styles from "./Hero.module.css";
import maPhoto from "../../assets/heroPicture.jpg";
export function Hero() {
  return (
    <section id="hero" class={styles.heroSection}>
      <div class={`container ${styles.heroContainer}`}>
        <div class={styles.heroText}>
          <div class={styles.label}>Creative Developer</div>
          <h1 class={styles.heroName}>
            Rochedix
            <br />
            <span class={styles.accent}>Sasha</span>
          </h1>
          <p class={styles.heroTitle}>
            Fullstack Web Developer & Designer · En recherche d'alternance
          </p>
          <p class={styles.heroBio}>
            J'aime construire des expériences web gamifiées. Passionné par la
            narration interactive, le game design.
          </p>

          <div class={styles.heroCta}>
            <a href="#tcg" class="btn btn-primary">
              Voir mon projet principal: TCG ↓
            </a>
            <a href="/cv.pdf" class="btn btn-ghost" target="_blank">
              CV PDF
            </a>
            <a
              href="https://github.com/sasha4w"
              class="btn btn-ghost"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div class={styles.heroCardWrap}>
          <div class={styles.heroPhotoCard}>
            <div class={styles.photoPlaceholder}>
              <img src={maPhoto} alt="Ma photo" />
            </div>
            <div class={styles.cardFooter}>
              <div>
                <div class={styles.fullName}>Rochedix Sasha</div>
                <div class={styles.role}>fullstack · creative dev</div>
              </div>
              <div class={styles.badge}>OPEN TO WORK</div>
            </div>
          </div>
        </div>
      </div>

      <div class={styles.scrollHint}>Scroll</div>
    </section>
  );
}
