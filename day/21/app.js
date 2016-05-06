const inputContainer = document.querySelector('.input');
const outputContainer = document.querySelector('.output');
const inputText = document.querySelector('.text-input');
const outputText = document.querySelector('.output-text');
const button = document.querySelector('.submit');

button.addEventListener('click', function (e) {
  e.preventDefault();
  inputContainer.classList.toggle('hiden');
  outputContainer.classList.toggle('hiden');

  const text = inputText.value;
  outputText.textContent = text;

  const sizeOutput = outputText.offsetHeight;

  move(outputText, 50, sizeOutput);
});

function move(target, current, limit) {
  if (current >= limit) {
    return undefined;
  } else {
    target.style.top =  current + 'px';;
    setTimeout(move, 500, target, current - 5);
  }
}
