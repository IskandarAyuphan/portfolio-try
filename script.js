/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const track = document.getElementById("track");
  const totalProjects = 4;   // total cards
  const cardWidth = 300;     // must match your CSS movement

  index += step;

  // wrap around
  if (index < 0) {
    index = totalProjects - 1;
  } else if (index >= totalProjects) {
    index = 0;
  }

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}
