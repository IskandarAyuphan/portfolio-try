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

function scrollToCard(index, smooth = true) {
  const card = cards[index];
  const left =
    card.offsetLeft -
    slider.clientWidth / 2 +
    card.offsetWidth / 2;

  slider.scrollTo({
    left,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

/* 🔑 IMPORTANT: force initial alignment */
window.addEventListener('load', () => {
  scrollToCard(0, false); // snap immediately, no animation
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
