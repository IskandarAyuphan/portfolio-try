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
const visibleCards = 2;
const maxIndex = totalCards - visibleCards; // 4 - 2 = 2

let currentIndex = 0;

/* Scroll so LEFT card aligns */
function scrollToCard(index, smooth = true) {
  slider.scrollTo({
    left: cards[index].offsetLeft,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* Initial position */
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

/* RIGHT arrow */
rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex = 0;
  scrollToCard(currentIndex);
});

/* LEFT arrow */
leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = maxIndex;
  scrollToCard(currentIndex);
});

/* Sync index when user scrolls manually */
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

  currentIndex = Math.min(closestIndex, maxIndex);
});

/* Keep alignment on resize */
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});


