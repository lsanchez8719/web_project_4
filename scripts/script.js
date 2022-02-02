
const openFormButton = document.querySelector('.button_type_close');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('');

function toggleForm() {
  popup.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
