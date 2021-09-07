let seconds, minutes, hours;

function rotateHand(elem, numDegs) {
  elem.style.transform = `rotate(${numDegs}deg)`;
}

function resetClock() {
  const now = new Date();
  seconds = now.getSeconds();
  minutes = now.getMinutes();
  hours = now.getHours();
}

function timer(secondHand, minuteHand, hourHand) {
  if (seconds >= Number.MAX_SAFE_INTEGER) { resetClock(); }

  seconds = seconds + 1; // continually count up to avoid reverse transition
  const secondsDegs = ( seconds / 60 ) * 360 + 90;;
  rotateHand(secondHand, secondsDegs);

  minutes = minutes + (1/60); // counts up every second
  const minutesDegs = ( minutes / 60 ) * 360 + 90;
  rotateHand(minuteHand, minutesDegs);

  hours = hours + (1 / 60 / 60) // counts up every second
  const hoursDegs = ( hours / 12 ) * 360 + 90;
  rotateHand(hourHand, hoursDegs);
}