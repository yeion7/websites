const start = document.querySelector('.start');
const end = document.querySelector('.end');
const rute = document.querySelector('.rute');

const startButton = document.querySelector('.start-button');

const introBoard = document.querySelector('.intro');
const GameBoard = document.querySelector('.game');
const modalBoard = document.querySelector('.modal');

let level = 0;

function toggleGame(currenView) {
  currenView.classList.toggle('hiden');
  GameBoard.classList.toggle('hiden');
}

// Handler lost game
function failGame() {
  const failMessages = ['That\'s lame.',
                         'Ouch, too bad.',
                         'I am sure you\'re good at something.',
                         'That wasn\'t too pretty.',
                         'Well, at least you tried.',
                         'Maybe cursors just aren\'t your thing.',
                         'I\'ve seen worse failures.',
                         'Well that sucked.',
                         'Are you using your foot?',
                         'You\'re a freakin\' cursor wielding ninja!',
                       ];

  const indexMessage = Math.floor(Math.random() * failMessages.length);
  const message = failMessages[indexMessage];

  let failTempate = ` <h1 class="modal-title">FAIL!</h1>
                      <p class="modal-text">${message}</p>
                      <div class="modal-buttons">
                        <a class="modal-next button" id="try">Try Again?</a>
                        <a href="http://yeion7.github.io/websites/day/22/"
                            class="modal-reset button">Start over</button>
                      </div>`;

  modalBoard.innerHTML = failTempate;

  const tryAgain = document.getElementById('try');

  tryAgain.addEventListener('click', () => {toggleGame(modalBoard);});

  toggleGame(modalBoard);
}

// Handler win game
function winGame() {
  const winMessage = ['That was just a warm up. Ready for the next level?',
                      'Now that you\'ve got the hang of it, let \'s take it up a notch.',
                      'Let\'s try something a bit more challenging now.',
                      'What if we remove the guide?',
                      'I bet the next one gives you trouble.',
                      'Think you can you do it blind?',
                      'Think you can do better?',
                      'Alright, you made it this far. Now it is time for the insanity level.',
                      'You\'re a freakin\' cursor wielding ninja!',
                    ];

  let winTempate = ` <h1 class="modal-title">Nice Job!</h1>
                      <p class="modal-text">${winMessage[level]}</p>
                      <div class="modal-buttons">
                        <a class="modal-next button" id="next">Heck Yea!</a>
                        <a href="http://yeion7.github.io/websites/day/22/"
                            class="modal-reset button">Start over</button>
                      </div>`;

  level++;

  if (level == 1) {
    start.style.height = '40px';
    end.style.height = '40px';
    rute.style.height = '40px';
    rute.style.width = '600px';
  }

  if (level == 2) {
    start.style.height = '20px';
    end.style.height = '20px';
    rute.style.height = '20px';
    rute.style.width = '740px';
  }

  if (level == 3) {
    start.style.height = '10px';
    end.style.height = '10px';
    rute.style.height = '10px';
    rute.style.width = '660px';
  }

  if (level == 4) {
    start.style.height = '15px';
    end.style.height = '15px';
    rute.style.height = '15px';
    rute.style.width = '460 px';
    rute.style.background = '#333';
  }

  if (level == 5) {
    start.style.height = '10px';
    end.style.height = '10px';
    rute.style.height = '10px';
    rute.style.width = '660 px';
  }

  if (level == 6) {
    start.style.height = '20px';
    end.style.height = '20px';
    rute.style.height = '20px';
    rute.style.width = '460 px';
    rute.style.background = '#fff';
    rute.classList.toggle('cursor');
  }

  if (level == 7) {
    start.style.height = '10px';
    end.style.height = '10px';
    rute.style.height = '10px';
    rute.style.width = '460 px';
  }

  if (level == 8) {
    start.style.height = '5px';
    end.style.height = '5px';
    rute.style.height = '5px';
    rute.style.width = '670 px';
    rute.style.background = '#333';
  }

  if (level == 9) {
    let winTempate = ` <h1 class="modal-title">YOU BEAT ALL THE LEVELS!</h1>
                        <p class="modal-text">${winMessage[level]}</p>
                        <div class="modal-buttons">
                          <a class="modal-next button" id="next" style="display:none">Heck Yea!</a>
                          <a href="http://yeion7.github.io/websites/day/22/"
                              class="modal-reset button">Start over</button>
                        </div>`;
  }

  modalBoard.innerHTML = winTempate;
  const next = document.getElementById('next');
  next.addEventListener('click', () => {toggleGame(modalBoard);});
}

// Start Game
startButton.addEventListener('click', function () {
  toggleGame(introBoard);
});

// Handler Game
start.addEventListener('mouseenter', function () {
  end.addEventListener('mouseenter', winGame);
  rute.addEventListener('mouseout', failGame);
});
