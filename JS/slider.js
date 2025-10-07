document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;

    function updateSlider() {
        // Mueve el slider a la posición correcta
        const width = images[0].clientWidth;
        slides.style.transform = `translateX(${-index * width}px)`;
    }

    nextButton.addEventListener('click', function() {
        // Mueve al siguiente slide
        if (index < images.length - 1) {
            index++;
        } else {
            index = 0; // Si está al final, vuelve al inicio
        }
        updateSlider();
    });

    prevButton.addEventListener('click', function() {
        // Mueve al slide anterior
        if (index > 0) {
            index--;
        } else {
            index = images.length - 1; // Si está al inicio, va al final
        }
        updateSlider();
    });
});