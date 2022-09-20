import '../pages/index.css';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './utils/constants.js';
import { configForm } from './utils/constants.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

const buttonEdit = document.querySelector('.profile__button-edit');
const formProfile = document.querySelector('.popup-profile-form');
const nameInput = formProfile.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formProfile.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля
const formCard = document.querySelector('.popup-card-form');
const profileName = document.querySelector('.profile__name'); //строка имени профиля на странице 
const profileDescription = document.querySelector('.profile__description'); //строка о работе профиля на странице
const buttonAddCard = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место

const defaultCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, {
      handleCardClick: ({ img, name }) => { popupWithImage.open({ img, name }); }
    }, '#card');
    const cardElement = card.generateCard();
    defaultCards.addItem(cardElement);
  },
},
  '.foto-flow');
defaultCards.renderItems();

const popupWithImage = new PopupWithImage('.popup-view-photo');
popupWithImage.setEventListeners();

const popupAddCards = new PopupWithForm('.popup-edit-place-card', '.popup-card-form', handleFormCardSubmit);
popupAddCards.setEventListeners();

buttonAddCard.addEventListener('click', function () {
  popupAddCards.open();
});

const popupProfileForm = new PopupWithForm('.profile-popup', '.popup-profile-form', handleFormProfileSubmit);
popupProfileForm.setEventListeners();

const userInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description' });

buttonEdit.addEventListener('click', function () {
  const curentUserInfo = userInfo.getUserInfo();
  nameInput.value = curentUserInfo.name;
  jobInput.value = curentUserInfo.job;
  popupProfileForm.open();
});

function handleFormProfileSubmit(formUserData) {
  userInfo.setUserInfo(formUserData);
  //profileName.textContent = formUserData.name;
  //profileDescription.textContent = formUserData.job;
}

function handleFormCardSubmit(formDataObject) {
  const newCard = new Card(formDataObject, {
    handleCardClick: ({ img, name }) => { popupWithImage.open({ img, name }); }
  }, '#card').generateCard();
  defaultCards.addItem(newCard);
}

const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(configForm, formCard);
formPlaceValidation.enableValidation();
