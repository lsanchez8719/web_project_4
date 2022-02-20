
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name-text');
const profileProfession = profileInfo.querySelector('.profile__role');

//const profileForm = document.forms.profileForm;
const profilePopup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
//const saveButton = profilePopup.querySelector('.popup__button-submit');

//Now there are three popups on the page and each one has it's own closeButton. 
//Make sure you choose a name for the variable that reflects its purpose. 
//And don't forget that every popup should be closable, including popUpImagePreview
const closeButton = profilePopup.querySelector('.popup__button-close');

let inputName = profilePopup.querySelector('.popup__input_type_name');
let inputProfession = profilePopup.querySelector('.popup__input_type_role');

//functions
function formLoadUp() {
  profilePopup.classList.toggle('popup_opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup() {
  profilePopup.classList.remove('popup_opened');
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







/* Cards initialization variables */


const cardsListElement = document.querySelector(".cards__grid"); // selecting list to fill with cards
const cardTemplateElement = document.querySelector("#card__template"); // selecting card template element

//console.log(cardsListElement);
//console.log(cardTemplateElement);


/* Function to make card. */





function createCard(card) {
  // get card template and make a copy
  const cardElement = cardTemplateElement.content.querySelector(".cards__card").cloneNode(true);
  // select card element parts
  const cardTitleElement = cardElement.querySelector(".cards__title");
  const cardImageElement = cardElement.querySelector(".cards__image");
  const cardLikeButtonElement = cardElement.querySelector(".cards__button-like");
  const cardTrashButtonElement = cardElement.querySelector(".button_type_delete");
  // add card information
  cardTitleElement.textContent = card.name;
  cardImageElement.src = card.link;
  cardImageElement.alt = card.name;
  // add event listeners
  cardLikeButtonElement.addEventListener("mousedown", handleLikeButtonClick);
  cardTrashButtonElement.addEventListener("mousedown", handleTrashButtonClick);
  //cardImageElement.addEventListener("mousedown", handleCardImageClick);
  // return card
  return cardElement;
}


/* Like button functionality   */
/* Function to handle LIKE button click. */


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

const newCardForm = document.querySelector(".popup__form_type_add-card");
const newCardPopup = document.querySelector(".popup_type_add-card");
const newCardButtonElement = document.querySelector(".profile__card-add");
const newCardPopupCloseButtonElement = document.querySelector(
  ".popup__button-close"
);
const userInputImageTitle = document.querySelector(
  ".popup__input_type_title"
);
const userInputImageLink = document.querySelector(
  ".popup__input_type_link"
);
function handleNewCardButtonClick() {
 
  newCardForm.reset();
  formLoadUp(newCardPopup);
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

newCardPopupCloseButtonElement.addEventListener("mousedown", () =>
  closePopup(newCardPopup)
);

//popupOpenEditProfileButton.addEventListener("mousedown", openEditProfile);
newCardButtonElement.addEventListener("mousedown", handleNewCardButtonClick);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);


  renderInitialCards();


const popUpImagePreview = document.querySelector(".popup_type_preview-card");
const imagePreview = document.querySelector(".popup__preview-image");
const imagePreviewTitle = document.querySelector(".popup__preview-title");

function handleCardImageClick (event) {
  imagePreview.src = event.target.src;
  imagePreview.alt = event.target.alt;
  imagePreviewTitle.textContent = event.target.alt;
  openPopup(popUpImagePreview);

}