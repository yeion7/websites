function numeroAleatorio(limite) {
  return Math.round(Math.random() * limite);
}

function addRoute(item, link) {
  item.addEventListener('click', function () {
    window.location.href = link;
  });
}

const indexPuertaMala = numeroAleatorio(2);
const linkMalo = 'https://www.youtube.com/watch?v=J---aiyznGQ';

const linkBueno = 'https://www.youtube.com/watch?v=fzzjgBAaWZw';

const doors = document.querySelectorAll('.icon-door');

Array.prototype.map.call(doors, function (door, index) {
  if (index == indexPuertaMala) {
    addRoute(door, linkMalo);
  } else {
    addRoute(door, linkBueno);
  }
});
