/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const track = document.getElementById("track");
  const cards = document.querySelectorAll(".project");

  const isMobile = window.innerWidth <= 600;
  const visibleProjects = isMobile ? 1 : 2;

  const cardWidth = cards[0].offsetWidth;
  const maxIndex = cards.length - visibleProjects;

  index += step;

  // wrap around
  if (index > maxIndex) {
    index = 0; // back to first set
  } else if (index < 0) {
    index = maxIndex; // go to last set
  }

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

/* Recalculate on resize */
window.addEventListener("resize", () => {
  index = 0;
  move(0);
});
