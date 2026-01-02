/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;
const totalProjects = 4; // total number of project cards
const visibleProjects = 2; // how many cards are visible at a time

function move(step) {
  const track = document.getElementById("track");
  const maxIndex = totalProjects - visibleProjects;

  index += step;

  // loop to start/end
  if (index > maxIndex) {
    index = 0; // go back to first card
  } else if (index < 0) {
    index = maxIndex; // go to last visible card
  }
