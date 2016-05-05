$(function () {
  $('body').on('mousedown', 'div', function () {
    $(this).addClass('draggable').parents().on('mousemove', function (e) {
      $('.draggable').offset({
        top: e.pageY - $('.draggable').outerHeight() / 2,
        left: e.pageX - $('.draggable').outerWidth() / 2,
      }).on('mouseup', function () {
          $(this).removeClass('draggable');
        });
    });
  }).on('mouseup', function () {
    $('.draggable').removeClass('draggable');
  });
});

const container = document.querySelector('.shapes-container');
const shapes = ['triright', 'trileft', 'triup', 'square', 'rectupL', 'rectdown',
'rectup', 'circle', 'semitop', 'quartleft', 'paraleft', 'pararight'];

let shapesElements = [];

shapes.forEach(shape => {
  for (var i = 0; i < 9; i++) {
    shapesElements.push(`<div class="block ${shape}"></div>`);
  }
});

container.innerHTML = shapesElements.join('\n');
