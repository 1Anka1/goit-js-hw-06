const widgetDiv = document.querySelector('body');
const nameOfColor = document.querySelector('.color');
const bottonEl = document.querySelector('.change-color');


bottonEl.addEventListener('click', getChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getChangeColor() {
  const color = getRandomHexColor();
  widgetDiv.style.backgroundColor = color;
  nameOfColor.textContent = widgetDiv.style.backgroundColor = color;
}
