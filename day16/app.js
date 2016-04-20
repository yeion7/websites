document.addEventListener('DOMContentLoaded', function (event) {
  var container = document.querySelector('.board');

  makeSpots(20);

  var mouseX = 0;
  var mouseY = 0;

  container.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  document.addEventListener('touchmove', function (e) {
    e.preventDefault();

    mouseX = e.pageX;
    mouseY = e.pageY;
  }, false);

  for (var i = 0; i < 20; i++) {
    moveDiv('#spot' + i, randomInt(8, 50));
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };

  function makeSpots(num) {
    var spots = [];
    for (var i = 0; i < num; i++) {
      spots[i] = '<div class="circle" id="spot' + i  + '"></div>';
    }

    container.innerHTML = spots.join('\n');

    for (var i = 0; i < num; i++) {
      var size = randomInt(3, 65);
      var color = randomColor();
      let spot = document.querySelector('#spot' + i);
      spot.style.background = color;
      spot.style.width = size + 'px';
      spot.style.height = size + 'px';
    }
  };

  function moveDiv(elm, speed) {
    var xp = 0;
    var yp = 0;
    var loop = setInterval(function () {
      xp += (mouseX - xp) / speed;
      yp += (mouseY - yp) / speed;

      let spo = document.querySelector(elm);
      spo.style.left = xp + 'px';
      spo.style.top = yp + 'px';

    }, 30);
  };
});
