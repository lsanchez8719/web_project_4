const profile = document.querySelector(".profile"); //+
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileProfession = profileInfo.querySelector('.profile__role');

const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup');
const editButton = document.querySelector ('.profile__button-edit');
const saveButton = profilePopup.querySelector('.popup__button-submit');
const closeButton = profilePopup.querySelector('.popup__button-close');
let inputName = profilePopup.querySelector('.popup__input_name');
let inputProfession = profilePopup.querySelector('.popup__input_role');

//functions
function formLoadUp () {
  profilePopup.classList.toggle('popup__open');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup () {
  profilePopup.classList.remove('popup__open');
}

function formSubmitHandle(event) {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  profilePopup.classList.closePopup('popup__open'); //recheck profilePopup.classList.remove('popup_open'); 
}

function formSubmitHandle(event) {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  closePopup();
}

//Event handlers
editButton.addEventListener('click', formLoadUp);
profileForm.addEventListener('submit', formSubmitHandle);
closeButton.addEventListener('click', closePopup);