// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

function changeValue(e) {
  // console.log(e.currentTarget.classList);
  const classes = e.currentTarget.classList;
  if (classes.contains('decrease')) {
    count--;
  } else if (classes.contains('increase')) {
    count++;
  } else {
    count = 0;
  }

  if (count > 0) {
    value.style.color = 'green';
  }
  if (count < 0) {
    value.style.color = 'red';
  }
  if (count === 0) {
    value.style.color = 'blue';
  }
  value.textContent = count;
};

btns.forEach(function (btn) {
  btn.addEventListener('click', changeValue);
});
