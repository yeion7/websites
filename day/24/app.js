const intro = document.querySelector('.intro');
const inputText = document.querySelector('.text-input');
const counterContainer = document.querySelector('.counter');
const counterField = document.querySelector('.words-count');

inputText.addEventListener('focus', function () {
  intro.classList.add('hiden');
  counterContainer.classList.remove('hiden');
});

inputText.addEventListener('keyup', function () {
  let words = inputText.value;
  let wordsCount = words.length;
  let size = 130 * (Math.pow(Math.pow(1 / 13, (1 / 250)), wordsCount));
  inputText.style.fontSize = size + 'px';
  counterField.textContent = wordsCount;

  if (wordsCount >= 150) {
    counterContainer.style.background = '#f2ad00';
  }

  if (wordsCount >= 200) {
    counterContainer.style.background = '#ed6700';
  }

  if (wordsCount >= 250) {
    counterContainer.style.background = '#ba000d';
  }

  if (wordsCount <= 150) {
    counterContainer.style.background = '#42863e';
  }
});
