'use strict';

let startX;
const slider = document.querySelector('.clider');

slider.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;

  handleSwipe();

  function handleSwipe() {
    if (startX - endX > 100) {
      const nextSlide = document.querySelector(
        'input[name="slide"]:checked',
      ).nextElementSibling;

      if (nextSlide) {
        nextSlide.checked = true;
      }
    } else if (startX - endX < -100) {
      const prevSlide = document.querySelector(
        'input[name="slide"]:checked',
      ).previousElementSibling;

      if (prevSlide) {
        prevSlide.checked = true;
      }
    }
  }
});
