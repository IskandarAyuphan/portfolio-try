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

function scrollToCard(index) {
  slider.scrollTo({
    left: cards[index].offsetLeft,
    behavior: 'smooth',
  });
}

/* Right arrow */
rightBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  }
  scrollToCard(currentIndex);
});

/* Left arrow */
leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  scrollToCard(currentIndex);
});

/* Sync index when user scrolls */
slider.addEventListener('scroll', () => {
  let closestIndex = 0;
  let minDiff = Infinity;

  cards.forEach((card, i) => {
    const diff = Math.abs(slider.scrollLeft - card.offsetLeft);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  currentIndex = closestIndex;
});

/* Initial alignment */
window.addEventListener('load', () => {
  scrollToCard(0);
});
