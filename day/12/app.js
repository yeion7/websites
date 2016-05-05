const dadosContainer = document.querySelector('.dados');
const shakeButton = document.querySelector('.button');
const textUp = document.querySelector('.text');

function getRandomNum(limit) {
  return Math.ceil(Math.random() * limit);
};

const dados = [
  '',
  `<div class="cara1">
    <div class="punto"></div>
  </div>`,
  `<div class="cara2">
    <div class="punto"></div>
    <div class="punto"></div>
  </div>`,
  `<div class="cara3">
    <div class="punto"></div>
    <div class="punto"></div>
    <div class="punto"></div>
  </div>`,
  `  <div class="cara4">
    <div class="columna">
      <div class="punto"></div>
      <div class="punto"></div>
    </div>
    <div class="columna">
      <div class="punto"></div>
      <div class="punto"></div>
    </div>
  </div>`,
  ` <div class="cara5">
    <div class="columna">
      <div class="punto"></div>
      <div class="punto"></div>
    </div>
    <div class="punto"></div>
    <div class="columna">
    <div class="punto"></div>
      <div class="punto"></div>
    </div>
  </div>`,
  `<div class="cara6">
    <div class="columna">
      <div class="punto"></div>
      <div class="punto"></div>
      <div class="punto"></div>
    </div>
    <div class="columna">
      <div class="punto"></div>
      <div class="punto"></div>
      <div class="punto"></div>
    </div>
  </div>`,
];

function setDados(target, cara1, cara2) {
  let dadosHMTL =
  `${dados[cara1]}
  ${dados[cara2]}`;

  target.innerHTML = '';
  target.innerHTML = dadosHMTL;

  textUp.classList.toggle('shake');
  textUp.textContent = cara1 + cara2;
};

shakeButton.addEventListener('click', () => {
  textUp.classList.toggle('shake');
  textUp.textContent = 'shake, shake, shake';

  let indexCara1 = getRandomNum(6);
  let indexCara2 = getRandomNum(6);

  setTimeout(setDados, 2000, dadosContainer, indexCara1, indexCara2);
});
