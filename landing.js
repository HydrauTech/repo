// HEADER SCROLL
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// SCROLL TO SECTION
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// SIMPLE REVEAL ANIMATION (SAFE)
const reveals = document.querySelectorAll('.card, .contact-card, .image-grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = '0.6s ease';
  observer.observe(el);
});

// AOS INIT
AOS.init({
  duration: 1000,
  once: true,
  offset: 80
});