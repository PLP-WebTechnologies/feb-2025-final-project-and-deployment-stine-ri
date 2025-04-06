// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.header');

  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
      });
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Initialize animations
  initAnimations();
});

// Initialize animations based on scroll position
function initAnimations() {
  const animatedElements = document.querySelectorAll('.slide-in, .slide-up, .fade-in, .scale-up');

  function checkAnimation() {
      animatedElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight - 100) {
              element.style.animationPlayState = 'running';
          }
      });
  }

  // Check on load
  checkAnimation();

  // Check on scroll
  window.addEventListener('scroll', checkAnimation);
}