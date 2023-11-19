// script.js

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show-menu');
        }
    });

    // Funções relacionadas ao slider
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;

    function showSlide(index) {
        currentSlide = index;
        slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
        if (currentSlide < slides.children.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    }

    setInterval(nextSlide, 5000);
});
