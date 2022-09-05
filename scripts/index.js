import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './utils/constants.js';
import { openPopup } from './utils/utils.js';
import { closePopup } from './utils/utils.js';
import { configForm } from './utils/constants.js';

const buttonEdit = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.profile-popup');
const formProfile = document.querySelector('.popup-profile-form');
const nameInput = formProfile.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formProfile.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля
const formCard = document.querySelector('.popup-card-form');
const placeNameInput = formCard.querySelector('.popup__input_type_place-name');
const placeLinkInput = formCard.querySelector('.popup__input_type_place-link');
const fotoFlow = document.querySelector('.foto-flow');
const profileName = document.querySelector('.profile__name'); //строка имени профиля на странице 
const profileDescription = document.querySelector('.profile__description'); //строка о работе профиля на странице
const buttonAddCard = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место
const popupAddCard = document.querySelector('.popup-edit-place-card'); //попап добавления карточки место

const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(configForm, formCard);
formPlaceValidation.enableValidation();

/*----------ОТКРЫТИЕ ПОПАПОВ--------------*/
function setPopupProfileInputValue() {
  nameInput.value = profileName.textContent.trim();
  jobInput.value = profileDescription.textContent.trim();
}

buttonEdit.addEventListener('click', function () {
  setPopupProfileInputValue();
  openPopup(popupProfile);
});

buttonAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
});

/*----------САБМИТ ОБРАБОТЧИКИ---------*/
function setProfileInformationValue() {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

function handleProfileFormSubmit(evt) { //обработчик сабмита
  setProfileInformationValue();
  closePopup(popupProfile);
  evt.preventDefault();
  formProfileValidation.deactivateButton();
}
formProfile.addEventListener('submit', handleProfileFormSubmit);

function handleCardsFormSubmit(evt) {
  addCard(placeNameInput.value, placeLinkInput.value, '#card');
  closePopup(popupAddCard);
  evt.target.reset();
  evt.preventDefault();
  formPlaceValidation.deactivateButton();
}
formCard.addEventListener('submit', handleCardsFormSubmit);

/*----------ЗАКРЫТИЕ ПОП-АПОВ-----------*/
const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

/*---- Создание карточек (class Card)------*/
function createCard(name, link, templateSelector) {
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(name, link, templateSelector) {
  const cardElement = createCard(name, link, templateSelector);
  fotoFlow.prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item.name, item.link, '#card');
});
