const popupViewPhotoPlace = document.querySelector('.popup-view-photo'); //поп-ап просмотра фото
const popupPhoto = document.querySelector('.popup__photo');
const popupPhotoViewDescription = document.querySelector('.popup__photo-description');
const fotoFlow = document.querySelector('.foto-flow');

const buttonEdit = document.querySelector('.profile__button-edit');
const formProfile = document.querySelector('.popup-profile-form');
const nameInput = formProfile.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formProfile.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля
const formCard = document.querySelector('.popup-card-form');
const placeInput = formCard.querySelector('.popup__input_type_place-name');
const imgInput = formCard.querySelector('.popup__input_type_place-link');

const formAvatar = document.querySelector('.popup-avatar-form');
const avatarInput = formAvatar.querySelector('.popup__input_type_avatar-link');
const buttonAvatar = document.querySelector('.profile__avatar-edit');

const avatarImg = document.querySelector('.profile__avatar');

const cardBtnTrash = document.querySelector('.template-card').content.querySelector('.card').cloneNode(true).querySelector('.card__trash');

const buttonAddCard = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место

const myId = '4a161389e69e9824646dd7f1';

const configApi = {
  urlCards: 'https://mesto.nomoreparties.co/v1/cohort-51/cards',
  urlUser: 'https://nomoreparties.co/v1/cohort-51/users/me',
  urlAvatar: 'https://mesto.nomoreparties.co/v1/cohort-51/users/me/avatar',
  headers: {
    "authorization": '9800edab-c01e-4941-9a81-bb143e90c5b8',
    "content-type": "application/json"
  }
}

const configForm = {  //данные для параметра config
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',

  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_style_error',
  errorClass: 'popup__text-error_active'
}

export { popupViewPhotoPlace }; // to Card.js
export { popupPhoto }; // to Card.js
export { popupPhotoViewDescription }; // to Card.js
export { configForm }; //to FormValidator.js
export { fotoFlow }; // to index.js
export { buttonEdit }; //to index.js
export { formProfile }; //to index.js
export { nameInput }; //to index.js
export { jobInput }; //to index.js
export { formCard }; //to index.js
export { buttonAddCard }; //to index.js
export { placeInput };//to index.js
export { imgInput };//to index.js
export { cardBtnTrash }; //to index.js
export { formAvatar }; //to index.js
export { avatarInput }; //to index.js
export { buttonAvatar };//to index.js
export { avatarImg }; //to index.js
export { configApi }; //to index.js
export { myId }; //to index.js