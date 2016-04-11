function getHex() {
  return Math.round(Math.random() * 16).toString(16);
}

function getBackgroundRandom() {
  return `#${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}`;
}

const boxes = document.querySelectorAll('.box');

Array.prototype.forEach.call(boxes, function (box) {
  box.addEventListener('mouseover', function () {
    this.style.background = getBackgroundRandom();
  });
});
