let currentColor = 'white';

const palete = document.querySelectorAll('.palete > div');
const boxes = document.querySelectorAll('.cell');

Array.prototype.forEach.call(palete, function (color) {
  color.addEventListener('click', function () {
    currentColor = this.style.background;
  });
});

Array.prototype.forEach.call(boxes, function (box) {
  box.addEventListener('click', function () {
    this.style.background = currentColor;
  });
});
