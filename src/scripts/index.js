import '../pages/index.css';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import {
  initialCards,
  configForm,
  buttonEdit,
  formProfile,
  nameInput,
  jobInput,
  formCard,
  buttonAddCard
} from './utils/constants.js';

function createCard(item, handleCardClick, templateSelector) {
  const card = new Card({ name: item.name, link: item.link }, handleCardClick, templateSelector);
  const cardElement = card.generateCard();
  return cardElement;
}

const defaultCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCards = createCard(item, {
      handleCardClick: ({ img, name }) => { popupWithImage.open({ img, name }); }
    }, '#card');
    defaultCards.addItem(newCards);
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
  popupAddCards.clearInputs();
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
}

function handleFormCardSubmit(formDataObject) {
  const newCard = createCard({ name: formDataObject.name, link: formDataObject.link }, {
    handleCardClick: ({ img, name }) => { popupWithImage.open({ img, name }); }
  }, '#card');
  defaultCards.addItem(newCard);
}

const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(configForm, formCard);
formPlaceValidation.enableValidation();
