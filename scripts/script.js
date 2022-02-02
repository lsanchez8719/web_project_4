
const openFormButton = document.querySelector('.button__add');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.button__close');

function toggleForm() {
  popup.classList.toggle('.popup_open');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
