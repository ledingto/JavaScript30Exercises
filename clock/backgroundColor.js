let hue = 0;

function hueBackground() {
  if (hue === 359) { hue = 0; }

  const background = document.querySelector('html');
  background.style.filter = `hue-rotate(${hue}deg)`;
  hue = hue + 1;
}

setInterval(hueBackground, 1000)