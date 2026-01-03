/* ================= HAMBURGER MENU ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* ================= PROJECT CAROUSEL ================= */

const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slide-arrow.left');
const rightBtn = document.querySelector('.slide-arrow.right');
const cards = document.querySelectorAll('.project-card');

let currentIndex = 0; // start at first card

function scrollToCard(index) {
  const card = cards[index];
  const left = card.offsetLeft - (slider.clientWidth / 2) + (card.offsetWidth / 2);
  slider.scrollTo({ left: left, behavior: 'smooth' });
}

// Right arrow
rightBtn.addEventListener('click', () => {
  // Only loop middle cards (1-2 in 0-based index)
  if (currentIndex >= 1 && currentIndex <= 2) {
    currentIndex++;
    if (currentIndex > 2) currentIndex = 1; // loop back to second card
  } else if (currentIndex === 0) {
    currentIndex = 1; // move from first card to second
  } else if (currentIndex === 3) {
    currentIndex = 2; // move from last card to fifth
  }
  scrollToCard(currentIndex);
});

// Left arrow
leftBtn.addEventListener('click', () => {
  if (currentIndex >= 1 && currentIndex <= 2) {
    currentIndex--;
    if (currentIndex < 1) currentIndex = 2; // loop back to fifth card
  } else if (currentIndex === 0) {
    currentIndex = 1; // move from first card to second
  } else if (currentIndex === 3) {
    currentIndex = 2; // move from last card to fifth
  }
  scrollToCard(currentIndex);
});


