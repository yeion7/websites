const lamp = document.querySelector('.icon');

let currentShadow = 0;

lamp.addEventListener('click', function () {
  this.style.color = '#EDDE45';
  this.style.boxShadow = `0px 0px 30px ${currentShadow}px`;
  currentShadow += 10;
});
