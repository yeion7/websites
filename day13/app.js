const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const textGame = document.querySelector('.text');
const computerSelect = document.querySelector('.computer-image');
const userSelect = document.querySelector('.user-image');

const options = [rockButton, paperButton, scissorButton];
const images = ['rock', 'paper', 'scissors'];

options.map((item, index) => {
  item.addEventListener('click', function () {
    let userChoose = index;
    let computerChoose = machine();
    preGame();
    setTimeout(postGame, 3010, userChoose, computerChoose);
  });
});

function postGame(user, machine) {
  setImage(userSelect, images[user]);
  setImage(computerSelect, images[machine]);
  let gameResolve = game(user, machine);
  console.log(gameResolve);
  textGame.textContent = gameResolve;
}

function toggleClass(target, clase) {
  target.classList.toggle(clase);
}

function countdown(target, time) {
  if (time <= 0) {
    textGame.textContent = 'shoot!';
    return undefined;
  } else {
    textGame.textContent = time;
    time = time - 1;
    return setTimeout(countdown, 1000, target, time);
  }
}

function setImage(target, imageName) {
  target.src = `./images/${imageName}.png`;
}

function preGame() {
  setImage(userSelect, 'right_hand');
  setImage(computerSelect, 'left-hand');
  toggleClass(computerSelect, 'shake');
  toggleClass(userSelect, 'shake');
  countdown(textGame, 3);
  setTimeout(toggleClass, 3000, computerSelect, 'shake');
  setTimeout(toggleClass, 3000, userSelect, 'shake');
}

function game(user, machine) {
  if (user === machine) {
    return 'tie';
  } else if (user == 1 && machine == 0) {
    return 'win';
  } else if (user == 2 && machine == 1) {
    return 'win';
  } else if (user == 0 && machine == 2) {
    return 'win';
  } else if (user == 0 && machine == 1) {
    return 'lose';
  } else if (user == 1 && machine == 2) {
    return 'lose';
  } else if (user == 2 && machine == 0) {
    return 'lose';
  }
}

function machine() {
  return Math.round(Math.random() * 2);
}
