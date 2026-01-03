/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = Array.from(document.querySelectorAll('.project-card'));

const totalCards = cards.length;
let currentIndex = 0;

/* Scroll to snap position */
function scrollToCard(index, smooth = true) {
  slider.scrollTo({
    left: cards[index].offsetLeft,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* Sync index when user scrolls manually */
function syncIndex() {
  const scrollPos = slider.scrollLeft;

  let closestIndex = 0;
  let minDiff = Infinity;

  cards.forEach((card, i) => {
    const diff = Math.abs(scrollPos - card.offsetLeft);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  currentIndex = closestIndex;
}

/* Initial snap (prevents first-click bug) */
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

/* Right arrow */
rightBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, totalCards - 1);
  scrollToCard(currentIndex);
});

/* Left arrow */
leftBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  scrollToCard(currentIndex);
});

/* Listen for mouse / touch scroll */
slider.addEventListener('scroll', () => {
  requestAnimationFrame(syncIndex);
});

/* Re-align on resize */
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});
