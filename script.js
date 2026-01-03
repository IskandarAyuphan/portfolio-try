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

function scrollToCard(index, smooth = true) {
  slider.scrollTo({
    left: cards[index].offsetLeft,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* Initial alignment */
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

/* Right arrow (loop) */
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  scrollToCard(currentIndex);
});

/* Left arrow (loop) */
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  scrollToCard(currentIndex);
});

/* Sync index on manual scroll */
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

/* Keep alignment on resize */
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});
