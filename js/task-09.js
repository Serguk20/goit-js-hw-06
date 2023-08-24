function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
  const body = document.querySelector('body');
  const colorElement = document.querySelector('.color');

  changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorElement.textContent = randomColor;
  });


console.log(getRandomHexColor);