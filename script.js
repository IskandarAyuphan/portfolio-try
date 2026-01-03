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

// Get card width + gap
function getCardWidth() {
  const card = cards[0];
  const style = window.getComputedStyle(slider);
  const gap = parseInt(style.getPropertyValue('gap')) || 0;
  return card.offsetWidth + gap;
}

// Scroll by card width
function scrollToCard(index, smooth = true) {
  slider.scrollTo({
    left: index * getCardWidth(),
    behavior: smooth ? 'smooth' : 'auto',
  });
}

// Initial alignment
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

// Right arrow (loop)
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  scrollToCard(currentIndex);
});

// Left arrow (loop)
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  scrollToCard(currentIndex);
});

// Sync index on manual scroll
slider.addEventListener('scroll', () => {
  const cardWidth = getCardWidth();
  const scrollPos = slider.scrollLeft;
  currentIndex = Math.round(scrollPos / cardWidth);
});

// Re-align on resize
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});

