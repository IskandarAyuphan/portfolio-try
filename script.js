/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = document.querySelectorAll('.project-card');

let currentIndex = 0;

function getVisibleCards() {
  return window.innerWidth <= 600 ? 1 : 2;
}

function getMaxIndex() {
  return cards.length - getVisibleCards();
}

function scrollToCard(index, smooth = true) {
  const card = cards[index];
  let left;

  if (getVisibleCards() === 1) {
    // center single card
    left = card.offsetLeft - (slider.clientWidth / 2) + (card.offsetWidth / 2);
  } else {
    // align left for 2 cards
    left = card.offsetLeft;
  }

  slider.scrollTo({
    left,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* Initial alignment */
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

/* RIGHT arrow */
rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > getMaxIndex()) currentIndex = 0;
  scrollToCard(currentIndex);
});

/* LEFT arrow */
leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = getMaxIndex();
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

  currentIndex = Math.min(closestIndex, getMaxIndex());
});

/* Keep alignment on resize */
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});
