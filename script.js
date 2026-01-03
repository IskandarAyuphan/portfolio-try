/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */

const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = document.querySelectorAll('.project-card');

const totalCards = cards.length; // now dynamic (4 cards)
let currentIndex = 0;

function scrollToCard(index) {
  const card = cards[index];
  const left =
    card.offsetLeft -
    slider.clientWidth / 2 +
    card.offsetWidth / 2;

  slider.scrollTo({
    left: left,
    behavior: 'smooth',
  });
}

/* Right arrow */
rightBtn.addEventListener('click', () => {
  currentIndex++;

  // loop back to first card
  if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  scrollToCard(currentIndex);
});

/* Left arrow */
leftBtn.addEventListener('click', () => {
  currentIndex--;

  // loop to last card
  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  }

  scrollToCard(currentIndex);
});
