// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal() {
  modalOverlay.classList.add('open-modal');
};

function closeModal() {
  modalOverlay.classList.remove('open-modal');
};

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
