import '../pages/index.css';
import { Api } from './Api.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupAllowDelete } from './PopupAllowDelete';
import {
  configForm,
  buttonEdit,
  formProfile,
  nameInput,
  jobInput,
  formCard,
  buttonAddCard,
  formAvatar,
  buttonAvatar,
  avatarImg,
  configApi
} from './utils/constants.js';

function renderLoading(isLoading) {

}

/*    создание и удаление карточек    */
function createCards(data, handleCardClick, templateSelector) {
  const card = new Card(data, handleCardClick, templateSelector);
  card._setEventListeners(popupDeleteOpen, setLike, deleteLike);
  const cardId = card.getIdCard();
  popupAllowDelete.setEventListeners(cardId, cardDelete);
  const cardElement = card.generateCard();
  return cardElement;
}

function runSection(items, container) {
  const defaultCards = new Section({
    items, renderer: (item) => {
      const newCards = createCards(item, { handleCardClick: ({ img, name }) => { popupWithImage.open({ img, name }); } }, '#card');
      defaultCards.addItem(newCards);
    },
  },
    container);
  return defaultCards;
}

const api = new Api(configApi);  //АПИ №1 рендеринг всех карточек на странице
api.getAllCards()
  .then((res) => {
    const defaultCards = runSection(res, '.foto-flow');
    defaultCards.renderItems();
  })
  .catch((err) => {
    console.log('Что-то не так', err);
  })

function cardDelete(cardId) {                     //АПИ №2 удаления карточек
  api.deleteCard(cardId);
}

/*       лайки          */
function setLike(cardId) {                //АПИ №3 добавление лайка
  api.setLike(cardId);
}

function deleteLike(cardId) {                 //АПИ №4 удаление лайка
  api.deleteLike(cardId);
}

/*            профиль          */
const userInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description' });
api.getUserInfoFromServer()
  .then((res) => {
    userInfo.setUserInfo(res);
  })

/*           Поп-апы          */
const popupAllowDelete = new PopupAllowDelete('.popup-allow-delete');

const popupWithImage = new PopupWithImage('.popup-view-photo');
popupWithImage.setEventListeners();

const popupAddCards = new PopupWithForm('.popup-edit-place-card', '.popup-card-form', handleFormCardSubmit);
popupAddCards.setEventListeners();

const popupProfileForm = new PopupWithForm('.profile-popup', '.popup-profile-form', handleFormProfileSubmit);
popupProfileForm.setEventListeners();

const popupAvatarForm = new PopupWithForm('.popup-change-avatar', '.popup-avatar-form', handleFormAvatarSubmit);
popupAvatarForm.setEventListeners();

/*         колбэки методов         */
function popupDeleteOpen() {
  popupAllowDelete.open();
}

/*           Слушатели кнопок               */
buttonAvatar.addEventListener('click', function () {
  popupAvatarForm.open();
});

buttonAddCard.addEventListener('click', function () {
  popupAddCards.open();
  popupAddCards.clearInputs();
});

buttonEdit.addEventListener('click', function () {
  const curentUserInfo = userInfo.getUserInfo();
  nameInput.value = curentUserInfo.name;
  jobInput.value = curentUserInfo.job;
  popupProfileForm.open();
});

/*           Сабмит обработчики             */
function handleFormAvatarSubmit() {                     //АПИ №5 смены аватара
  popupAvatarForm.setLoader();
  api.changeAvatar()
    .then((res) => {
      console.log(res);
      avatarImg.setAttribute('src', res.avatar);
    })
    .finally(() => {
      popupAvatarForm.returnTextValueBtn('avatar');
    })
}

function handleFormCardSubmit(formDataObject) {           //АПИ №6 создание новой карточки на странице
  popupAddCards.setLoader();
  api.createUserCard()
    .finally(() => {
      popupAddCards.returnTextValueBtn('card');
    })
}

function handleFormProfileSubmit() {
  popupProfileForm.setLoader();
  api.sendUserInfoToServer();
  api.getUserInfoFromServer()
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .finally(() => {
      popupProfileForm.returnTextValueBtn('profile');
    });
}

/*            Валидаторы            */
const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(configForm, formCard);
formPlaceValidation.enableValidation();

const formAvatarValidation = new FormValidator(configForm, formAvatar);
formAvatarValidation.enableValidation();

