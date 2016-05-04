const form = document.querySelector('.form-container');
const app = document.querySelector('.app');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const questions = document.forms[0].elements;

  const optionsChecked = [].filter.call(questions, function (question) {
    return question.checked == true;
  });

  const values = [].map.call(optionsChecked, function (question) {
    return parseInt(question.value);
  });

  const total = [].reduce.call(values, function (current, value) {
    return current + value;
  });

  let message;

  if (total < 42 * 1 / 4) {
    message = 'You\'re definitely not an SF hipster.';
  } else if (total < 42 * 1 / 4) {
    message = 'You might be an SF hipster.';
  } else if (total < 42 * 3 / 4) {
    message = 'You\'re most likely an SF hipster.';
  } else {
    message = 'You\'re a Super SF Hipster!';
  }

  let print = `<h1> Your Score is ${total}</h1>
                <h2>${message}</h2>`;

  app.innerHTML = print;
});
