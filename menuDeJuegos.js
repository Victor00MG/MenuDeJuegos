const slides = document.querySelectorAll('.part, .part3, .part4');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});