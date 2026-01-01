/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const track = document.getElementById("track");
  const maxIndex = 2; // only 2 cards visible at a time
  index = Math.max(0, Math.min(index + step, maxIndex));
  track.style.transform = `translateX(${-index * 300}px)`;
}

/* ================= SCROLL ANIMATION ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(section => {
  observer.observe(section);
});
