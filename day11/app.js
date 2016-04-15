function changeBackground(hour, minute, second) {
  let colorNode = document.querySelector('.color-text');
  let background = getColor(hour, minute, second);
  document.body.style.background = background;
  colorNode.textContent = background.toUpperCase();
};

function getColor(hour, minute, second) {
  hexHour = Math.round(255 * (hour / 23)).toString(16);
  hexMinute = Math.round(255 * (minute / 59)).toString(16);
  hexSecond = Math.round(255 * (second / 59)).toString(16);

  return `#${hexHour}${hexMinute}${hexSecond}`;
};

function addCero(num) {
  if (num < 10) {
    num = '0' + num;
  };

  return num;
};

function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hour = addCero(hour);
  minute = addCero(minute);
  second = addCero(second);

  return {
    hour: hour,
    minute: minute,
    second: second,
  };
}

function setClock() {
  let hourNode = document.querySelector('.clock-hour');
  let minuteNode = document.querySelector('.clock-minute');
  let secondNode = document.querySelector('.clock-second');

  let { hour, minute, second } = getTime();

  changeBackground(hour, minute, second);

  hourNode.textContent = hour;
  minuteNode.textContent = minute;
  secondNode.textContent = second;
};

setInterval(setClock, 1000);
