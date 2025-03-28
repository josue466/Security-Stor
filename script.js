document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
  
    // Observer para mostrar animación cuando las tarjetas sean visibles
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    featureCards.forEach(card => {
      observer.observe(card);
    });
  });
  