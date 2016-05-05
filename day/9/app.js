function game() {
  let level = 1;
  let speed = 27;
  return {
    nextLevel: function () {
      speed = speed - 3;
      level = level + 1;
    },

    getLevel: function () {
      return level;
    },

    getTime: function () {
      return speed;
    },

    rest: function () {
      speed = 27;
      level = 1;
    },
  };
}

const ballGame = game();

const ball = document.querySelector('.ball');
const messagesContainer = document.querySelector('.messages');
const levelText = document.querySelector('.level');
const conti = document.querySelector('.continue');

ball.addEventListener('click', function () {
  messagesContainer.style.display = 'flex';
  levelText.textContent = 'Nivel: ' + ballGame.getLevel();
  conti.textContent = 'Continuar';
  this.style.display = 'none';
});

conti.addEventListener('click', function () {
  ballGame.nextLevel();
  const level = ballGame.getLevel();

  if (level < 10) {
    let duration = ballGame.getTime();
    ball.style.animationDuration = duration + 's';
    messagesContainer.style.display = 'none';
    ball.style.display = 'block';
  } else {
    levelText.textContent = 'Ganaste!';
    conti.textContent = 'Restaurar';
    ballGame.rest();
  }
});
