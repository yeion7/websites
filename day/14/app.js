const habitText = document.querySelector('.habit');
const message = document.querySelector('.habit-message');
const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');

function Messages() {
  const textMessages = [
    'Are you freaking kidding me?',
    'That\'s terrible! You should knock that off!',
    'A kitten dies everytime you do that.',
    'Are you going to suck all your life?',
    'What? Who does that?!',
    'I can\'t believe you are that disgusting.',
    'Gross. You are gross.',
    'And when do you plan on becoming an adult?',
    'Ugh! That\'s horrible!',
    'You are bad and you should feel bad!',
    'Are you going to suck all your life?',
    'You should be utterly ashamed.',
  ];

  function getIndex() {
    return Math.floor(Math.random() * textMessages.length - 1);
  };

  return {
    getMessage() {
      return textMessages[getIndex()];
    },
  };
}

const m = Messages();

inputButton.addEventListener('click', e => {
  e.preventDefault();
  const theHabit = inputText.value;
  habitText.textContent = 'You ' + theHabit.toLowerCase() + ' ?';
  message.textContent = m.getMessage();
});
