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

let currentIndex = 0; // start at first card

// Function to scroll slider to center a specific card
function scrollToCard(index) {
  const card = cards[index];
  const left = card.offsetLeft - (slider.clientWidth / 2) + (card.offsetWidth / 2);
  slider.scrollTo({ left: left, behavior: 'smooth' });
}

// Initialize slider AFTER layout is ready
window.addEventListener('load', () => {
  scrollToCard(currentIndex);
});

// Right arrow click
rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > totalCards - 1) currentIndex = 0; // loop to first card
  scrollToCard(currentIndex);
});

// Left arrow click
leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalCards - 1; // loop to last card
  scrollToCard(currentIndex);
});

// Optional: update currentIndex when user scrolls manually
slider.addEventListener('scroll', () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    const distance = Math.abs(sliderCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  currentIndex = closestIndex;
});

// Optional: recalc position if window resizes
window.addEventListener("resize", () => {
  scrollToCard(currentIndex);
});
