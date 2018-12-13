function getTimeRemaining(endtime) {
  let
    t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id) {
  let
    timeinterval,    
    clock = document.getElementById(id),
    deadline = clock.dataset.time,
    daysSpan = clock.querySelector('.days'),
    hoursSpan = clock.querySelector('.hours'),
    minutesSpan = clock.querySelector('.minutes'),
    secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(deadline);

    if (t.days >= 100) {
      daysSpan.innerHTML = ('0' + t.days).slice(-3);
    } else {
      daysSpan.innerHTML = ('0' + t.days).slice(-2);
    }
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      daysSpan.innerHTML = '00';
      hoursSpan.innerHTML = '00';
      minutesSpan.innerHTML = '00';
      secondsSpan.innerHTML = '00';      
    }
  }

  updateClock();
  
  timeinterval = setInterval(updateClock, 1000);
}

if (!!document.querySelector('#countdown')) {
  initializeClock('countdown');
}
