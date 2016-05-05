const rolls = document.querySelectorAll('.roll');

function getAnimation() {
  const animations = ['rotate', 'zoom', 'skew'];
  let index = Math.round(Math.random() * (animations.length - 1));
  return animations[index];
}

function setAnimation() {
  this.style.animationName = getAnimation();
}

Array.prototype.forEach.call(rolls, function (roll) {
  roll.addEventListener('click', setAnimation);
});
