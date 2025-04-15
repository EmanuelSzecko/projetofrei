function setupCarousel(carouselNumber) {
    let index = 0;
    const images = document.querySelectorAll(`.carousel${carouselNumber}-images img`);
    const prev = document.querySelector(`.carousel${carouselNumber}-prev`);
    const next = document.querySelector(`.carousel${carouselNumber}-next`);
    const container = document.querySelector(`.carousel${carouselNumber}`);

    function updateCarousel() {
        const width = container.offsetWidth;
        document.querySelector(`.carousel${carouselNumber}-images`).style.transform = `translateX(${-index * width}px)`;
    }

    if (prev && next && images.length > 0) {
        prev.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateCarousel();
        });
        next.addEventListener('click', () => {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        window.addEventListener('load', updateCarousel);
    }
}

// Inicializa os 4 carrosséis
for (let i = 1; i <= 4; i++) {
    setupCarousel(i);
}

document.addEventListener("DOMContentLoaded", function () {
    const images5 = document.querySelector(".carousel5-images");
    const totalSlides5 = document.querySelectorAll(".carousel5-images img").length;
    let index5 = 0;

    document.querySelector(".carousel5-next").addEventListener("click", () => {
        index5 = (index5 + 1) % totalSlides5;
        updateCarousel5();
    });

    document.querySelector(".carousel5-prev").addEventListener("click", () => {
        index5 = (index5 - 1 + totalSlides5) % totalSlides5;
        updateCarousel5();
    });

    function updateCarousel5() {
        images5.style.transform = `translateX(-${index5 * 100}%)`;
    }
});
