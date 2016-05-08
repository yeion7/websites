const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let start = false;

function addCero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}

function timer() {
  if (startButton.disabled) {
    let secondTime = parseInt(second.textContent) + 1;

    if (secondTime != 60) {
      second.textContent = addCero(secondTime);
    } else {
      minute.textContent = addCero(parseInt(minute.textContent) + 1);
      var minuteTime = parseInt(minute.textContent);
      second.textContent = '00';
    }

    if (minuteTime === 60) {
      hour.textContent = addCero(parseInt(hour.textContent) + 1);
      minute.textContent = '00';
    }

  }
}

startButton.addEventListener('click', function (e) {
  startButton.disabled = true;

  if (!start) {
    setInterval(timer, 1000);
  }

  start = true;
});

stopButton.addEventListener('click', function (e) {
  startButton.disabled = false;
});

resetButton.addEventListener('click', function (e) {
  hour.textContent = '00';
  minute.textContent = '00';
  second.textContent = '00';
});
