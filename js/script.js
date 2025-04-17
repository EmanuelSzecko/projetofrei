function setupCarousel(carouselNumber) {
    let index = 0;
    const images = document.querySelectorAll(`.carousel${carouselNumber}-images img`);
    const prev = document.querySelector(`.carousel${carouselNumber}-prev`);
    const next = document.querySelector(`.carousel${carouselNumber}-next`);
    const container = document.querySelector(`.carousel${carouselNumber}`);
    const carouselImages = document.querySelector(`.carousel${carouselNumber}-images`);

    // Função para atualizar o carrossel
    function updateCarousel() {
        const width = container.offsetWidth;
        carouselImages.style.transform = `translateX(${-index * width}px)`;
    }

    // Se os elementos necessários existirem, inicializa o carrossel
    if (prev && next && images.length > 0) {
        prev.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateCarousel();
        });

        next.addEventListener('click', () => {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateCarousel();
        });

        // Adiciona eventos de redimensionamento e carregamento da página
        const resizeDebounce = () => {
            updateCarousel();
        };

        // Usar o debounce para evitar chamadas excessivas ao redimensionar
        window.addEventListener('resize', resizeDebounce);
        window.addEventListener('load', updateCarousel);
    }
}

// Inicializa os 5 carrosséis
for (let i = 1; i <= 5; i++) {
    setupCarousel(i);
}

function adicionarComentario() {
    const input = document.getElementById('comentarioInput');
    const texto = input.value.trim();
  
    if (texto !== '') {
      const novaDiv = document.createElement('div');
      novaDiv.className = 'comentario';
      novaDiv.textContent = texto;
  
      document.getElementById('listaComentarios').prepend(novaDiv);
      input.value = ''; // Limpa o campo
    } else {
      alert('Por favor, digite algo antes de enviar!');
    }
  }
  
