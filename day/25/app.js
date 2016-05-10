const startButton = document.querySelector('.start');
const introContainer = document.querySelector('.intro');
const gameContainer = document.querySelector('.game');

const wordText = document.querySelector('.game-word');
const scoreText = document.querySelector('.game-score');
const submitButton = document.querySelector('.game-submit');
const inputText = document.querySelector('.game-input');
const gameMassages = document.querySelector('.game-message');

function shuffle(word) {
  let a = word.split("");
  const n = a.length;
  for(let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

function gameFactory() {
  let scorePoints = 0;
  let dictionary;
  let currentWord = 'TITULARY';
  return {
    getScore() {
      return scorePoints;
    },
    setScore(value) {
      scorePoints += value;
    },
    setDictionary(wordsArray) {
      dictionary = wordsArray;
      this.setDictionary = null;
    },
    setWord() {
      let index = Math.floor(Math.random() * dictionary.length);
      currentWord = dictionary[index].toUpperCase();
    },
    getWord() {
      return shuffle(currentWord);
    },
    isCorrect(wordInput) {
      return wordInput == currentWord;
    },
    correct() {
      return currentWord;
    },
  }
}

let scrambled = gameFactory();

startButton.addEventListener('click', function (e) {
  introContainer.classList.toggle('hiden');

  fetch('words.html',{method: 'GET'})
    .then(function(responde){
      return responde.text();
    })
    .then(function(text){
      scrambled.setDictionary(text.split('\n'));
      gameContainer.classList.toggle('hiden');
      newGame();
    })
});

let chances = 3;

function newGame() {
  scrambled.setWord();
  scoreText.textContent = 'Score: ' + scrambled.getScore();
  wordText.textContent = scrambled.getWord();
  gameMassages.textContent = 'Here is your next word';
  inputText.value = '';
  chances = 3;
}

submitButton.addEventListener('click', function () {
  let input = inputText.value.toUpperCase();
  if (scrambled.isCorrect(input)) {
    scrambled.setScore(1);
    gameMassages.textContent = 'Is Correct!';
    setTimeout(newGame, 1000);
  } else {
    chances --
    if (chances > 0) {
      gameMassages.textContent = `Incorrect! ${chances} chances left`;
      inputText.value = '';
    } else {
      gameMassages.innerHTML = `Incorrect! The word was ${scrambled.correct()}`
      scrambled.setScore(-1);
      setTimeout(newGame, 1000);
    }
  }
});
