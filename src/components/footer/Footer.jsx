import styles from "./Footer.module.css";

export function Footer() {
  return (
    // On applique les classes générées dynamiquement

    <footer class={styles.footerWrapper}>
      <div class="container">
        <div class={styles.footerName}>Rochedix Sasha · Creative Developer</div>
        <div class={styles.footerLinks}>
          <a href="https://github.com/sasha4w" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sasha-rochedix/" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:sasharochedix@gmail.com">Email</a>
          <a href="/cv.pdf" target="_blank">
            CV
          </a>
        </div>
        <p class={styles.footerNote}>
          Construit avec Preact + CSS · Hébergé sur Netlify · 2025
        </p>
      </div>
    </footer>
  );
}
