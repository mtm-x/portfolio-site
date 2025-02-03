document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.portfolio-grid');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const gap = 30; 

  function getCardWidth() {
    return window.matchMedia("(max-width: 768px)").matches ? window.innerWidth * 0.85 : 420;
  }

  if (scroller && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: getCardWidth() + gap, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: -(getCardWidth() + gap), behavior: 'smooth' });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        scroller.scrollBy({ left: getCardWidth() + gap, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        scroller.scrollBy({ left: -(getCardWidth() + gap), behavior: 'smooth' });
      }
    });
  } else {
    console.error('Scroller, next button, or previous button not found');
  }
});