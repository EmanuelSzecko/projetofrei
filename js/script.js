// Carrossel 1
let index1 = 0;
const images1 = document.querySelectorAll('.carousel1-images img');
const prev1 = document.querySelector('.carousel1-prev');
const next1 = document.querySelector('.carousel1-next');

function updateCarousel1() {
    const width = document.querySelector('.carousel1').offsetWidth;
    document.querySelector('.carousel1-images').style.transform = `translateX(${-index1 * width}px)`;
}

if (prev1 && next1 && images1.length > 0) {
    prev1.addEventListener('click', () => {
        index1 = (index1 > 0) ? index1 - 1 : images1.length - 1;
        updateCarousel1();
    });
    next1.addEventListener('click', () => {
        index1 = (index1 < images1.length - 1) ? index1 + 1 : 0;
        updateCarousel1();
    });
    window.addEventListener('resize', updateCarousel1);
    window.addEventListener('load', updateCarousel1);
}

// Carrossel 2
let index2 = 0;
const images2 = document.querySelectorAll('.carousel2-images img');
const prev2 = document.querySelector('.carousel2-prev');
const next2 = document.querySelector('.carousel2-next');

function updateCarousel2() {
    const width = document.querySelector('.carousel2').offsetWidth;
    document.querySelector('.carousel2-images').style.transform = `translateX(${-index2 * width}px)`;
}

if (prev2 && next2 && images2.length > 0) {
    prev2.addEventListener('click', () => {
        index2 = (index2 > 0) ? index2 - 1 : images2.length - 1;
        updateCarousel2();
    });
    next2.addEventListener('click', () => {
        index2 = (index2 < images2.length - 1) ? index2 + 1 : 0;
        updateCarousel2();
    });
    window.addEventListener('resize', updateCarousel2);
    window.addEventListener('load', updateCarousel2);
}

// Carrossel 3
let index3 = 0;
const images3 = document.querySelectorAll('.carousel3-images img');
const prev3 = document.querySelector('.carousel3-prev');
const next3 = document.querySelector('.carousel3-next');

function updateCarousel3() {
    const width = document.querySelector('.carousel3').offsetWidth;
    document.querySelector('.carousel3-images').style.transform = `translateX(${-index3 * width}px)`;
}

if (prev3 && next3 && images3.length > 0) {
    prev3.addEventListener('click', () => {
        index3 = (index3 > 0) ? index3 - 1 : images3.length - 1;
        updateCarousel3();
    });
    next3.addEventListener('click', () => {
        index3 = (index3 < images3.length - 1) ? index3 + 1 : 0;
        updateCarousel3();
    });
    window.addEventListener('resize', updateCarousel3);
    window.addEventListener('load', updateCarousel3);
}

// Carrossel 4
let index4 = 0;
const images4 = document.querySelectorAll('.carousel4-images img');
const prev4 = document.querySelector('.carousel4-prev');
const next4 = document.querySelector('.carousel4-next');

function updateCarousel4() {
    const width = document.querySelector('.carousel4').offsetWidth;
    document.querySelector('.carousel4-images').style.transform = `translateX(${-index4 * width}px)`;
}

if (prev4 && next4 && images4.length > 0) {
    prev4.addEventListener('click', () => {
        index4 = (index4 > 0) ? index4 - 1 : images4.length - 1;
        updateCarousel4();
    });
    next4.addEventListener('click', () => {
        index4 = (index4 < images4.length - 1) ? index4 + 1 : 0;
        updateCarousel4();
    });
    window.addEventListener('resize', updateCarousel4);
    window.addEventListener('load', updateCarousel4);
}
