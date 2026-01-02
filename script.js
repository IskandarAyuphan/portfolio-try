/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;
const totalProjects = 4;   // total number of project cards
const visibleProjects = 2; // number of cards visible at a time
const cardWidth = 300;     // must match your CSS

function move(step) {
  const track = document.getElementById("track");
  const maxIndex = totalProjects - visibleProjects; // last index where 2 cards are fully visible

  index += step;

  // wrap around
  if (index > maxIndex) {
    index = 0; // back to first set
  } else if (index < 0) {
    index = maxIndex; // go to last set
  }

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}
