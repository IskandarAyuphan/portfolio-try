/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
let index = 0;

function move(step) {
  const container = document.querySelector(".projects-container");
  const track = document.getElementById("track");
  const cards = document.querySelectorAll(".project");

  const isMobile = window.innerWidth <= 600;
  const cardWidth = cards[0].offsetWidth;

  if (isMobile) {
    // 📱 Mobile: native scroll
    container.scrollBy({
      left: step * cardWidth,
      behavior: "smooth"
    });
    return;
  }

  // 💻 Desktop: transform carousel
  const visibleProjects = 2;
  const maxIndex = cards.length - visibleProjects;

  index += step;

  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;

  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

/* Reset on resize */
window.addEventListener("resize", () => {
  index = 0;
  document.getElementById("track").style.transform = "translateX(0)";
  document.querySelector(".projects-container").scrollLeft = 0;
});
