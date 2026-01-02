/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;
const track = document.getElementById("track");
const projectsContainer = document.querySelector(".projects-container");
const totalProjects = document.querySelectorAll(".project").length;

function updateCardWidth() {
  // update visibleProjects & cardWidth based on screen
  const isMobile = window.innerWidth <= 500;
  const visibleProjects = isMobile ? 1 : 2;
  const cardWidth = projectsContainer.offsetWidth / visibleProjects;
  return { visibleProjects, cardWidth };
}

function move(step) {
  const { visibleProjects, cardWidth } = updateCardWidth();
  const maxIndex = totalProjects - visibleProjects;

  index += step;

  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Recalculate on resize
window.addEventListener("resize", () => {
  const { cardWidth } = updateCardWidth();
  track.style.transform = `translateX(${-index * cardWidth}px)`;
});

