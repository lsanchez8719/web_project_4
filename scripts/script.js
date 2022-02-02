
const openButton = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.button__close');

function toggleForm() {
  popup.classList.toggle('.popup');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

//editButton.addEventListener("click", handleEditButtonClick);
//popup.addEventListener("submit", handleEditFormSubmit);
//closeButton.addEventListener("click", () => closePopup());
