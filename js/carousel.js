document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let currentIndex = 0;
  const itemWidth = carouselItems[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(carouselInner).gap) || 0;
  const itemsPerView = Math.floor(carousel.offsetWidth / (itemWidth + gap));

  // Set initial position
  updateCarousel();

  // Next button click
  nextBtn.addEventListener('click', function() {
      if (currentIndex < carouselItems.length - itemsPerView) {
          currentIndex++;
          updateCarousel();
      }
  });

  // Previous button click
  prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  // Update carousel position
  function updateCarousel() {
      const offset = -currentIndex * (itemWidth + gap);
      carouselInner.style.transform = `translateX(${offset}px)`;

      // Disable/enable buttons based on position
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= carouselItems.length - itemsPerView;
  }

  // Handle window resize
  window.addEventListener('resize', function() {
      const newItemsPerView = Math.floor(carousel.offsetWidth / (itemWidth + gap));
      if (newItemsPerView !== itemsPerView) {
          currentIndex = 0;
          updateCarousel();
      }
  });
});