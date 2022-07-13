const body = document.querySelector('body');
const nameOfColor = document.querySelector('.color');
const bottonEl = document.querySelector('.change-color');


bottonEl.addEventListener('click', getChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameOfColor.textContent = body.style.backgroundColor = color;
}
