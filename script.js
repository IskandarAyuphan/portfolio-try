/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */

const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = document.querySelectorAll('.project-card');

const totalCards = cards.length;
let currentIndex = 0;

// Get card width INCLUDING gap
function getCardWidth() {
  const card = cards[0];
  const gap = parseInt(getComputedStyle(slider).gap) || 0;
  return card.offsetWidth + gap;
}

// Snap to correct position
function updatePosition(smooth = true) {
  slider.scrollTo({
    left: currentIndex * getCardWidth(),
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* Fix initial dead click */
window.addEventListener('load', () => {
  slider.scrollLeft = 0;
  currentIndex = 0;
});

/* Right arrow */
rightBtn.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= totalCards) {
    currentIndex = 0; // loop
  }

  updatePosition();
});

/* Left arrow */
leftBtn.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1; // loop
  }

  updatePosition();
});

/* Keep alignment on resize */
window.addEventListener('resize', () => {
  updatePosition(false);
});

