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
  if (currentIndex >= 1 && currentIndex <= 2) {
    currentIndex++;
  } else if (currentIndex === 0) {
    currentIndex = 1;
  } else if (currentIndex === 3) {
    currentIndex = 0;
  }
  scrollToCard(currentIndex);
});

// Left arrow
leftBtn.addEventListener('click', () => {
  if (currentIndex >= 1 && currentIndex <= 2) {
    currentIndex--;
  } else if (currentIndex === 3) {
    currentIndex = 2;
  } else if (currentIndex === 0) {
    currentIndex = 3;
  }
  scrollToCard(currentIndex);
});


