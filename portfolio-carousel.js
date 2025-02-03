// filepath: /home/lotus/Downloads/super-folio_free_1-2-0/portfolio-carousel.js
document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.portfolio-grid');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const cardWidth = 420; // Should match CSS flex-basis value
  const gap = 30; // Should match CSS gap value

  if (scroller && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        scroller.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        scroller.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    });
  } else {
    console.error('Scroller, next button, or previous button not found');
  }
});