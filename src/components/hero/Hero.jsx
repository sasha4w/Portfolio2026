import { useI18n } from "../../i18n/usei18n";
import styles from "./Hero.module.css";
import maPhoto from "../../assets/heroPicture.png";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" class={styles.heroSection}>
      <div class={`container ${styles.heroContainer}`}>
        <div class={styles.heroText}>
          <div class={styles.label}>{t.hero.label}</div>
          <h1 class={styles.heroName}>
            Rochedix
            <br />
            <span class={styles.accent}>Sasha</span>
          </h1>
          <p class={styles.heroTitle}>{t.hero.title}</p>
          <p class={styles.heroBio}>{t.hero.bio}</p>
          <div class={styles.heroCta}>
            <a href="#tcg" class="btn btn-primary">
              {t.hero.ctaMain}
            </a>
            <a href="/cv.pdf" class="btn btn-ghost" target="_blank">
              {t.hero.ctaCv}
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
              <div class={styles.badge}>{t.hero.badge}</div>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.scrollHint}>{t.hero.scroll}</div>
    </section>
  );
}
