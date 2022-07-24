const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let inervalID = null;

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

function onClickStart() {
  inervalID = setInterval(setRandomBackground, 1000);
  btnStart.disabled = true;
} 

function onClickStop() {
  clearInterval(inervalID);
  btnStart.disabled = false;
}

function setRandomBackground() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}