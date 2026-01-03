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

// Scroll to a card using scrollIntoView
function scrollToCard(index) {
  cards[index].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',   // aligns card to center
    block: 'nearest'    // vertical alignment (not important here)
  });
}

// Initial alignment
window.addEventListener('load', () => {
  scrollToCard(0);
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
  let closestIndex = 0;
  let minDiff = Infinity;
  const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const diff = Math.abs(sliderCenter - cardCenter);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  currentIndex = closestIndex;
});

// Re-align on resize
window.addEventListener('resize', () => {
  scrollToCard(currentIndex);
});

