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

let myIdUser;

/*    создание и удаление карточек    */

function newCard(data, myId) {
  const card = new Card(data, {
    handleCardClick: ({ img, name }) => {
      popupWithImage.open({ img, name });
    },
    handleCardDelete: (instance) => {
      popupAllowDelete.setSubmitAction(() => {
        api.deleteCard(instance.getIdCard())
          .then(() => { instance.removeElement(), popupAllowDelete.close() })
      })
      popupAllowDelete.open();
    },
    handleLikeClick: (instance) => {
      api.changeLike(instance.getIdCard(), instance.isLiked())
        .then((res) => { instance.changeLikeState(res); })
    }
  }, '#card', myId);
  return card;
}

function createCards(data) {
  const card = newCard(data, myIdUser);
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

const api = new Api(configApi);
const userInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description', avatarElement: '.profile__avatar' });

Promise.all([api.getUserInfoFromServer(), api.getAllCards()])
  .then(([dataUser, dataCards]) => {
    userInfo.setUserInfo(dataUser);
    myIdUser = dataUser._id;
    defaultCards.renderItems(dataCards);
  })
  .catch((err) => {
    console.log('Данные не получены', err);
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
function handleFormAvatarSubmit(dataObj) {
  popupAvatarForm.setLoader();
  api.changeAvatar(dataObj)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupAvatarForm.close();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
    .finally(() => {
      popupAvatarForm.returnTextValueBtn(dataObj);
    })
}

function handleFormCardSubmit(formDataObject) {
  popupAddCards.setLoader();
  api.createUserCard(formDataObject)
    .then((dataFromServer) => {
      const newCards = createCards(dataFromServer);
      defaultCards.addItem(newCards, false);
      popupAddCards.close();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
    .finally(() => {
      popupAddCards.returnTextValueBtn(formDataObject);
    })
}

function handleFormProfileSubmit(dataObj) {
  popupProfileForm.setLoader();
  api.sendUserInfoToServer(dataObj)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfileForm.close();
    })
    .catch((err) => {
      console.log('Ошибка', err);
    })
    .finally(() => {
      popupProfileForm.returnTextValueBtn(dataObj);
    });
}

/*            Валидаторы            */
const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(configForm, formCard);
formPlaceValidation.enableValidation();

const formAvatarValidation = new FormValidator(configForm, formAvatar);
formAvatarValidation.enableValidation();
