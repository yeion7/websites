function getHex() {
  return Math.round(Math.random() * 16).toString(16);
}

function getIndex(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}

function getBackgroundRandom() {
  return `#${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}`;
}

const boxes = document.querySelectorAll('.box');
const animations = ['move', 'gusano', 'large'];

Array.prototype.forEach.call(boxes, function (box) {
  box.style.background = getBackgroundRandom();
  box.addEventListener('click', function () {
    let animation = animations[getIndex(animations)];
    console.log(animation);
    this.classList.toggle(animation);
  });
});
