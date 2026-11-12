// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Quick-exit safety feature (redirects browser to a neutral site like Google in case of emergency viewing)
const safetyModalBtn = document.getElementById('safetyModalBtn');
safetyModalBtn.addEventListener('click', () => {
  window.location.replace('https://google.com');
});