// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const navToggle = document.querySelector('.nav-toggle');

function toggleLinks() {
  if (links.classList.contains("show-links")) {
    links.classList.remove('show-links');
  } else {
    links.classList.add('show-links');
  }
};

navToggle.addEventListener('click', toggleLinks);


// My alternative solution

/*

const links = document.querySelector(".links");
const navToggle = document.querySelector('.nav-toggle');

function toggleLinks() {
  links.classList.toggle('show-links');
};

navToggle.addEventListener('click', toggleLinks);

*/
