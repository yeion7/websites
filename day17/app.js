const date = document.querySelector('.input-date');
const hour = document.querySelector('.input-hour');
const submit = document.querySelector('.button');
const outputBottom = document.querySelector('.output-data');
const outputUp = document.querySelector('.text');

function getDate(dateInput, hourInput) {
  hourInput = hourInput || '00:00';
  const dateFormat = dateInput.split('-');
  const hourFormat = hourInput.split(':');
  const inputDate = new Date(dateFormat[0], dateFormat[1] - 1,
                  dateFormat[2], hourFormat[0], hourFormat[1]);
  return inputDate;
};

function yearsOld(now, date) {
  const nowDay = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  const inputDay = date.getDate();
  const inputMonth = date.getMonth();
  const inputYear = date.getFullYear();

  let edad = nowYear - inputYear;

  if ((nowMonth < inputMonth) || (nowMonth == inputMonth && nowDay < inputDay)) {
    edad--;
  }

  return edad;
}

function daysOld(now, date) {
  return Math.round((now - date) / 86400000);
}

function minutesOld(now, date) {
  const delta = Math.abs(date - now) / 1000;
  var minutes = Math.floor(delta / 60);
  return minutes;
}

function toDateMinutes(now, date, minutes) {
  const milli =  60000 * minutes;
  const newDate = date.getTime() + milli;
  const newDateF = new Date(newDate);
  if (now < newDateF) {
    return 'is ' + newDateF.toDateString();
  } else {
    return 'was ' + newDateF.toDateString();
  }
}

function toDateSeconds(now, date, seconds) {
  const milli =  1000 * seconds;
  const newDate = date.getTime() + milli;
  const newDateF = new Date(newDate);
  if (now < newDateF) {
    return 'is ' + newDateF.toDateString();
  } else {
    return 'was ' + newDateF.toDateString();
  }
}

function toDateDays(now, date, days) {
  const milli =  86400000 * days;
  const newDate = date.getTime() + milli;
  const newDateF = new Date(newDate);
  if (now < newDateF) {
    return 'is ' + newDateF.toDateString();
  } else {
    return 'was ' + newDateF.toDateString();
  }
}

function toDateHours(now, date, hours) {
  const milli =   3600000 * hours;
  const newDate = date.getTime() + milli;
  const newDateF = new Date(newDate);
  if (now < newDateF) {
    return 'is ' + newDateF.toDateString();
  } else {
    return 'was ' + newDateF.toDateString();
  }
}

submit.addEventListener('click', function (e) {
  let dateInput = date.value;
  let hourInput = hour.value;
  if (dateInput) {
    let input = getDate(dateInput, hourInput);
    print(input);
  } else {
    outputUp.textContent = 'No Birthday? No Parties for You!';
  }
});

function print(dateInput) {
  const now = new Date();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  const inputDay = dateInput.getDate();
  const inputMonth = dateInput.getMonth();
  const inputYear = dateInput.getFullYear();

  const datePrint = dateInput.toDateString().split(' ');

  if (nowDay == inputDay && nowMonth == inputMonth) {
    outputUp.textContent = `Today's your birthday?! PARTY TIME!`;
  } else {
    outputUp.textContent = `Boo! No Parties Today.`;
  }

  outputBottom .innerHTML = `
  <p>Your birthday is ${datePrint[1]} ${datePrint[2]}</p>
  <p>You're ${yearsOld(now, dateInput)} years old</p>
  <p>You're ${daysOld(now, dateInput)} days old</p>
  <p>You're ${minutesOld(now, dateInput)} minutes old</p>
  <br>
  <p>Your 10,000th day ${toDateDays(now, dateInput, 10000)}</p>
  <p>Your 20,000th day ${toDateDays(now, dateInput, 20000)}</p>
  <p>Your 500,000th hour ${toDateHours(now, dateInput, 500000)}</p>
  <p>Your one millionth minute ${toDateMinutes(now, dateInput, 1000000)}</p>
  <p>Your ten millionth minute ${toDateMinutes(now, dateInput, 10000000)}</p>
  <p>Your fifty millionth minute ${toDateMinutes(now, dateInput, 50000000)}</p>
  <p>Your one billionth second ${toDateSeconds(now, dateInput,  1000000000)}</p>`;
}
