const days = document.querySelectorAll('.day');
const message = document.getElementById('message');

const messages = [
  'No vayas por donde el camino te lleve ve por donde no hay camino y deja huella',
  'Semana... que seas cortita o pases rapidito para que pronto sea viernes',
  'La inspiración siempre cantara y jamas explicara',
  'la verdades amistad nunca termina, los amigos son para siempre',
  'Ya casi es viernes, wiiiii',
  'Viernes..!! Sii..!! Te Extrañaba Desde El Lunes..',
  'Empieza el fin de semana! :D',
];

const date = new Date();
const day = date.getDay();

days[day].classList.toggle('today');

message.textContent = messages[day];
