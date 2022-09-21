const popupViewPhotoPlace = document.querySelector('.popup-view-photo'); //поп-ап просмотра фото
const popupPhoto = document.querySelector('.popup__photo');
const popupPhotoViewDescription = document.querySelector('.popup__photo-description');
const fotoFlow = document.querySelector('.foto-flow');

const buttonEdit = document.querySelector('.profile__button-edit');
const formProfile = document.querySelector('.popup-profile-form');
const nameInput = formProfile.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formProfile.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля
const formCard = document.querySelector('.popup-card-form');
const buttonAddCard = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

export { initialCards }; //to index.js
export { fotoFlow }; // to index.js
export { buttonEdit }; //to index.js
export { formProfile }; //to index.js
export { nameInput }; //to index.js
export { jobInput }; //to index.js
export { formCard }; //to index.js
export { buttonAddCard }; //to index.js
