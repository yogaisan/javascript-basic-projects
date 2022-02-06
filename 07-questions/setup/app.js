// ***using selectors inside the element***

/*
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', () => {
    questions.forEach((element => {
      if (element !== question) {
        element.classList.remove('show-text');
      }
      // console.log(element);
      // console.log(question);
    }));
    question.classList.toggle('show-text');
  });
});
*/

// ***traversing the dom***

const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

const toggleText = (event) => {
  // console.log(event.currentTarget.parentElement.parentElement);
  const question = event.currentTarget.parentElement.parentElement;

  questions.forEach((element => {
    if (element !== question) {
      element.classList.remove('show-text');
    }

  }));

  question.classList.toggle('show-text');

  // if (question.classList.contains('show-text')) {
  //   question.classList.remove('show-text');
  // } else {
  //   question.classList.add('show-text');
  // }
};

btns.forEach(btn => btn.addEventListener('click', toggleText));
