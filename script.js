// Menu móvel
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }

    // Fechar menu móvel após clique
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulação de envio
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  submitButton.textContent = 'Enviando...';
  submitButton.disabled = true;

  // Simulando um delay de envio
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    contactForm.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
});

// Animação de aparecimento ao scroll
const serviceCards = document.querySelectorAll('.service-card');

function checkScroll() {
  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (cardTop < triggerPoint) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

// Aplicar estilo inicial
serviceCards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Verificar ao carregar e ao scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
