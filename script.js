(function () {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function init() {
    resize();
    stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,164,71,${s.o})`;
      ctx.fill();
      s.y += s.speed;
      s.o += (Math.random() - 0.5) * 0.015;
      s.o = Math.min(Math.max(s.o, 0.05), 0.7);
      if (s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", init);
  init();
  draw();
})();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === `#${current}` ? "var(--gold)" : "";
  });
});
