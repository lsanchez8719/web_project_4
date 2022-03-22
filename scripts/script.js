const profileName = document.querySelector('.profile__name-text');
const profileProfession = document.querySelector('.profile__role');

const profilePopup = document.querySelector('.popup_type_profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const previewPopup = document.querySelector('.popup_type_preview-card');

const addButton = document.querySelector('.profile__button-add');
const editButton = document.querySelector('.profile__button-edit');


const inputName = document.querySelector('.popup__input_type_name');
const inputProfession = document.querySelector('.popup__input_type_role');

// buttonlocation
const buttonCloseProfile = document.querySelector('.button_location_profile');
const buttonCloseAddCard = document.querySelector('.button_location_add-card');
const buttonClosePreview = document.querySelector('.button_location_preview');


const formProfile = document.querySelector('.popup__form-profile');
const formAddCard = document.querySelector('.popup__form_type_add-card');

const imagePreview = document.querySelector('.popup__preview-image');
const imagePreviewTitle = document.querySelector(".popup__preview-title");

const cardsListElement = document.querySelector(".cards__grid"); // selecting list to fill with cards
const cardTemplateElement = document.querySelector("#card__template"); // selecting card template element


const userInputImageTitle = document.querySelector(
  ".popup__input_type_title"
);
const userInputImageLink = document.querySelector(
  ".popup__input_type_link"
);

//universal pop up function 
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleEditButtonClick() {
  inputName.value = profileName.textContent; console.log(profileName.textContent);
  inputProfession.value = profileProfession.textContent;
  openPopup(profilePopup);
}

function handleProfileFormSubmit(event) {
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  event.preventDefault();
  closePopup(profilePopup);
}

//Event handlers

editButton.addEventListener("click", () => openPopup(profilePopup));
formProfile.addEventListener("submit", handleProfileFormSubmit);

buttonCloseProfile.addEventListener("click", () => closePopup(profilePopup));
buttonCloseAddCard.addEventListener("click", () => closePopup(addCardPopup));
buttonClosePreview.addEventListener("click", () => closePopup(previewPopup));
/* Cards initialization variables */
addButton.addEventListener('click', handleNewCardButtonClick);


function handleCardImageClick(event) {
  imagePreview.src = event.target.src;
  imagePreview.alt = event.target.alt;
  imagePreviewTitle.textContent = event.target.alt;
  openPopup(previewPopup);
}

/* Function to make card. */

function createCard(card) {
  // get card template and make a copy
  const cardElement = cardTemplateElement.content.querySelector(".cards__card").cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".cards__title");
  const cardImageElement = cardElement.querySelector(".cards__image");
  const cardLikeButtonElement = cardElement.querySelector(".cards__button-like");
  const cardTrashButtonElement = cardElement.querySelector(".button_type_delete");
  // add card information
  cardTitleElement.textContent = card.name;
  cardImageElement.src = card.link;
  cardImageElement.alt = card.name;
  // add event listeners
  cardLikeButtonElement.addEventListener("click", handleLikeButtonClick);
  cardTrashButtonElement.addEventListener("click", handleTrashButtonClick);
  cardImageElement.addEventListener("click", handleCardImageClick);

  // return card
  return cardElement;
}

/* Like button functionality   */
function handleLikeButtonClick(event) {

  event.target.classList.toggle("cards__button-like_active");
}

/*  Function to handle DELETE button click. */

function handleTrashButtonClick(event) {
  event.target.closest(".cards__card").remove();
}

/*  Function to render card.*/

function renderCard(card) {
  cardsListElement.prepend(createCard(card));
}

/*Function to render INITIAL cards.  */
function renderInitialCards() {
  initialCards.forEach((card) => renderCard(card));
}

/*Popup ADD card functionality*/

function handleNewCardButtonClick() {

  formAddCard.reset();
  openPopup(addCardPopup);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: userInputImageTitle.value,
    link: userInputImageLink.value,
  };
  renderCard(card);
  closePopup(newCardPopup);
}

formAddCard.addEventListener("submit", handleNewCardFormSubmit);

renderInitialCards();
