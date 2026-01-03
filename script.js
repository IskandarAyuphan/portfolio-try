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
  currentIndex++;

  if (currentIndex > 3) {
    currentIndex = 0; // loop back to first card
  }

  scrollToCard(currentIndex);
});

// Left arrow
leftBtn.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = 3; // loop to last card
  }

  scrollToCard(currentIndex);
});
