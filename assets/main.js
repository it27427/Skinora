// GSAP Scroll Animations + Parallax effect for floating shapes
gsap.registerPlugin(ScrollTrigger);

// parallax move floating shapes on scroll
gsap.to(".floating-shape:first-child", {
  y: 140,
  x: 40,
  duration: 2,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.2,
  },
});
gsap.to(".floating-shape:last-child", {
  y: -120,
  x: -30,
  duration: 2.5,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
  },
});

// fade & slide-up animation for product cards
const cards = document.querySelectorAll(".product-card");
cards.forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 70,
    duration: 0.9,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: false,
    },
  });
});

// global sections animations
gsap.utils.toArray(".global-section, .hero-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 35,
    duration: 0.7,
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});

// parallax background subtle effect on hero
gsap.to(".parallax-bg", {
  backgroundPosition: "0% 20%",
  duration: 2,
  scrollTrigger: {
    scrub: 0.8,
  },
});

// image gallery hover already in CSS, additional GSAP pulse CTA no overkill
document.querySelectorAll(".btn-cta").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.02, duration: 0.2, ease: "power1.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.2 });
  });
});
