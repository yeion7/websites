const canvas = document.querySelector('.app');

function getColor() {
  return Math.random().toString(16).slice(2, 8);
};

function getSize(min, max) {
  return Math.random() * (max - min) + min;
}

canvas.addEventListener('click', function (e) {
  let { x, y } = e;
  let size = getSize(20, 50);
  let dot = document.createElement('div');
  dot.classList = 'dot';
  dot.style.cssText = `background:#${getColor()}; left:${x}px; top: ${y}px; width: ${size}px; height: ${size}px`;
  canvas.appendChild(dot);
});
