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
  configApi
} from './utils/constants.js';

/*    создание и удаление карточек    */
function createCards(data) {
  const card = new Card(data, {
    handleCardClick: ({ img, name }) => {
      popupWithImage.open({ img, name });
    },
    handleCardDelete: (instance) => {
      popupAllowDelete.setSubmitAction(() => {
        api.deleteCard(instance.getIdCard())
          .then(() => { instance.removeElement() })
      })
      popupAllowDelete.open();
    },
    handleLikeClick: (instance) => {
      api.changeLike(instance.getIdCard(), instance.isLiked(), console.log(instance.isLiked()))
        .then((res) => { instance.changeLikeState(res); console.log(res) })
    }
  }, '#card');

  card._setEventListeners(popupDeleteOpen, setLike, deleteLike);
  card.changeLikeState(data)
  const cardElement = card.generateCard();
  return cardElement;
}

const defaultCards = new Section(
  {
    renderer: (item) => {
      const newCards = createCards(item);
      defaultCards.addItem(newCards);
    },
  },
  '.foto-flow');

const api = new Api(configApi);  //АПИ №1 рендеринг всех карточек на странице
api.getAllCards()
  .then((cardsData) => {
    console.log(cardsData)
    defaultCards.renderItems(cardsData);
  })
  .catch((err) => {
    console.log('Что-то не так', err);
  })

/*       лайки          */
function isLiked(instance) {
  return instance.isLiked();
}

function setLike(cardId) {                //АПИ №3 добавление лайка
  api.setLike(cardId);
}
function deleteLike(cardId) {                 //АПИ №4 удаление лайка
  api.deleteLike(cardId);
}

/*            профиль          */
const userInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description', avatarElement: '.profile__avatar' });
api.getUserInfoFromServer()
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })

/*           Поп-апы          */
const popupAllowDelete = new PopupAllowDelete('.popup-allow-delete');
popupAllowDelete.setEventListeners();

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
  formAvatarValidation.deactivateButton();
});

buttonAddCard.addEventListener('click', function () {
  popupAddCards.open();
  popupAddCards.clearInputs();
  formPlaceValidation.deactivateButton();
});

buttonEdit.addEventListener('click', function () {
  const curentUserInfo = userInfo.getUserInfo();
  nameInput.value = curentUserInfo.name;
  jobInput.value = curentUserInfo.job;
  popupProfileForm.open();
  formProfileValidation.deactivateButton();
});

/*           Сабмит обработчики             */
function handleFormAvatarSubmit() {                     //АПИ №5 смены аватара
  popupAvatarForm.setLoader();
  api.changeAvatar()
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .finally(() => {
      popupAvatarForm.returnTextValueBtn('avatar');
    })
}

function handleFormCardSubmit(formDataObject) {           //АПИ №6 создание новой карточки на странице
  popupAddCards.setLoader();
  api.createUserCard(formDataObject)
    .then((dataFromServer) => {
      const newCards = createCards(dataFromServer);
      defaultCards.addItem(newCards, false);
    })
    .catch()
    .finally(() => {
      popupAddCards.returnTextValueBtn('card');
    })
}

function handleFormProfileSubmit(dataObj) {
  popupProfileForm.setLoader();
  //api.getUserInfoFromServer()
  api.sendUserInfoToServer(dataObj)
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

