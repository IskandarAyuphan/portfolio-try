/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const track = document.getElementById("track");
  const cards = document.querySelectorAll(".project");
  const visibleProjects = window.innerWidth <= 500 ? 1 : 2; // adjust visible cards on mobile

  const totalProjects = cards.length;

  // calculate card width including horizontal margin
  const style = getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);

  const maxIndex = totalProjects - visibleProjects;

  index += step;

  // wrap around
  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Optional: adjust carousel on resize
window.addEventListener("resize", () => {
  move(0); // recalc width and adjust position
});

