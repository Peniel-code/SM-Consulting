// Gestion du menu mobile
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Toggle menu on button click
  menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mainNav?.classList.contains('active') && !mainNav.contains(e.target)) {
      mainNav.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });

  // Handle scroll
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down & past header
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Numéro WhatsApp professionnel (international)
const BUSINESS_PHONE = '+22872177777';

// Ouvre WhatsApp avec message pré-rempli
function sendWhatsApp(){
  const name = encodeURIComponent(document.getElementById('name').value || '');
  const company = encodeURIComponent(document.getElementById('company').value || '');
  const phone = encodeURIComponent(document.getElementById('phone').value || '');
  const msg = encodeURIComponent(document.getElementById('message').value || '');
  const pre = `Demande de contact depuis le site SM CONSULTING SARL-U%0A` +
              `Nom: ${name}%0ASociété: ${company}%0ATel: ${phone}%0A%0A${msg}`;
  const url = `https://wa.me/${BUSINESS_PHONE.replace(/\+/g,'')}?text=${pre}`;
  window.open(url, '_blank');
  return false;
}

// Intersection Observer pour animation fade-in/slide (ajoute .in-view)
(function(){
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', ()=>{
    const nodes = document.querySelectorAll('.animate');
    nodes.forEach(n => observer.observe(n));
  });
})();
