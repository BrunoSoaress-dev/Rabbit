window.addEventListener('load', () => {

    // 1. Menu Mobile
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
  
    if (btnMenu && navMenu) {
      btnMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
  
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }
  
    // 2. Carrossel Infinito Simples em JS
    const track = document.getElementById('carousel-track');
    const wrapper = document.getElementById('carousel-wrapper');
  
    if (track && wrapper) {
      // Clona os itens para criar o loop
      const cards = Array.from(track.children);
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
      });
  
      let currentScroll = 0;
      const speed = 1; // Velocidade do carrossel (aumente para ir mais rápido)
      let isHovered = false;
  
      // Mede metade da largura total após a duplicação
      const halfWidth = track.scrollWidth / 2;
  
      function animate() {
        if (!isHovered && halfWidth > 0) {
          currentScroll += speed;
  
          if (currentScroll >= halfWidth) {
            currentScroll = 0;
          }
  
          track.style.transform = `translateX(-${currentScroll}px)`;
        }
        requestAnimationFrame(animate);
      }
  
      // Pausa ao passar o mouse ou tocar na tela
      wrapper.addEventListener('mouseenter', () => isHovered = true);
      wrapper.addEventListener('mouseleave', () => isHovered = false);
      wrapper.addEventListener('touchstart', () => isHovered = true, { passive: true });
      wrapper.addEventListener('touchend', () => isHovered = false, { passive: true });
  
      // Inicia a animação
      animate();
    }
  
  });