document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');
  
  // Toggle menu and hamburger animation
  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      const isClickInside = navMenu.contains(event.target) || 
                           menuToggle.contains(event.target);
      
      if (!isClickInside && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
      }
  });
  
  // Close menu when window is resized to desktop
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
      }
  });
});