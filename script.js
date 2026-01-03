/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */
const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = [...document.querySelectorAll('.project-card')];

const totalCards = cards.length;
let currentIndex = 0;

/* Scroll to card snap position */
function scrollToCard(index, smooth = true) {
  cards[index].scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    inline: 'center', // match scroll-snap-align
    block: 'nearest',
  });
}

/* Sync index when user scrolls (mouse / touchpad / swipe) */
function updateIndexFromScroll() {
  const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

  let closestIndex = 0;
  let minDistance = Infinity;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(sliderCenter - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  currentIndex = closestIndex;
}

/* Prevent dead click */
window.addEventListener('load', () => {
  scrollToCard(0, false);
});

/* Right arrow */
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  scrollToCard(currentIndex);
});

/* Left arrow */
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  scrollToCard(currentIndex);
});

/* Listen to manual scrolling */
slider.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateIndexFromScroll);
});

/* Keep snap aligned on resize */
window.addEventListener('resize', () => {
  scrollToCard(currentIndex, false);
});

/* Keep alignment on resize */
window.addEventListener('resize', () => {
  updatePosition(false);
});

