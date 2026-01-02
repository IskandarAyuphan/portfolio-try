/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const track = document.getElementById("track");
  const cards = document.querySelectorAll(".project");
  const visibleProjects = window.innerWidth <= 500 ? 1 : 2; // 1 card on mobile, 2 on desktop

  const totalProjects = cards.length;

  // Calculate card width including gap
  const cardStyle = getComputedStyle(cards[0]);
  const gap = parseInt(getComputedStyle(track).gap) || 0; // get gap from flex container
  const cardWidth = cards[0].offsetWidth + gap;

  const maxIndex = totalProjects - visibleProjects;

  index += step;

  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Recalculate position on resize
window.addEventListener("resize", () => {
  move(0);
});

