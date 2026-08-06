// home.js
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  const cards = document.querySelectorAll(".card-list");
  cards.forEach((card, index) => {
    // Add a sequential delay based on the card's order (e.g., 0ms, 150ms, 300ms, 450ms...)
    // Adjust 150 to a higher number like 250 for an even slower cascade effect
    card.style.transitionDelay = `${(index % 4) * 200}ms`;
    observer.observe(card);
  });
});
