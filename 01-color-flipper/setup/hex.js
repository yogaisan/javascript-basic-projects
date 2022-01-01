const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];\
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function randomHexCode() {
  // get random number between from 0 to 3
  const indexOne = Math.floor(Math.random() * hex.length);
  const indexTwo = Math.floor(Math.random() * hex.length);
  const indexThree = Math.floor(Math.random() * hex.length);
  const indexFour = Math.floor(Math.random() * hex.length);
  const indexFive = Math.floor(Math.random() * hex.length);
  const indexSix = Math.floor(Math.random() * hex.length);

  const hexCode = '#' + hex[indexOne] + hex[indexTwo] + hex[indexThree] + hex[indexFour] + hex[indexFive] + hex[indexSix];

  return hexCode;
}

function changeColor() {
  document.body.style.backgroundColor = randomHexCode();
  color.textContent = randomHexCode();
};

btn.addEventListener('click', changeColor);
