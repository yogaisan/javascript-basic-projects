const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function changeColor() {
  // console.log(document.body);
  // get random number between from 0 to 3
  const index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
  color.textContent = colors[index];
};

btn.addEventListener('click', changeColor);
