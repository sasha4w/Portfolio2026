import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./Reveal.module.css";

// On ajoute 'delay' dans les paramètres
export function Reveal({ children, delay = "", threshold = 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const combinedClasses = [
    styles.reveal,
    isVisible ? styles.revealVisible : "",
    delay ? styles[delay] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={elementRef} class={combinedClasses}>
      {children}
    </div>
  );
}
