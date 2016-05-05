function getHex() {
  return Math.round(Math.random() * 16).toString(16);
}

function getBackgroundRandom() {
  return `#${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}${getHex()}`;
}

const buttonChange = document.getElementById('button-background');

buttonChange.addEventListener('click', function () {
  document.body.style.background = getBackgroundRandom();
});
