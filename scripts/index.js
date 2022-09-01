const buttonEdit = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.profile-popup');

const formProfile = document.querySelector('.popup-profile-form');  //форма отправки
const nameInput = formProfile.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formProfile.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля

const formCard = document.querySelector('.popup-card-form');
const placeNameInput = formCard.querySelector('.popup__input_type_place-name');
const placeLinkInput = formCard.querySelector('.popup__input_type_place-link');

const profileName = document.querySelector('.profile__name'); //строка имени профиля на странице 
const profileDescription = document.querySelector('.profile__description'); //строка о работе профиля на странице

const buttonAddCard = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место
const popupAddCard = document.querySelector('.popup-edit-place-card'); //попап добавления карточки место
const buttonSaveCardAdd = document.querySelector('.popup__button-save_card_add'); //кнопка сохранить поп-ап место

const popupViewPhotoPlace = document.querySelector('.popup-view-photo'); //поп-ап просмотра фото
const popupPhoto = document.querySelector('.popup__photo');
const popupPhotoViewDescription = document.querySelector('.popup__photo-description');

const page = document.querySelector('.page'); //вся страница

const fotoFlow = document.querySelector('.foto-flow'); //секция карточек места

const formsPopup = document.querySelectorAll('.popup__form');

const card = document.querySelector('#card').content.querySelector('.card');

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


/*----------ОТКРЫТИЕ ПОПАПОВ--------------*/
function setPopupProfileInputValue() {
  nameInput.value = profileName.textContent.trim();
  jobInput.value = profileDescription.textContent.trim();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

buttonEdit.addEventListener('click', function () {
  setPopupProfileInputValue();
  openPopup(popupProfile);
  clearValidation(configForm);
});

buttonAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
});
/*----------ОТКРЫТИЕ ПОПАПОВ--------------*/


/*-----------СОЗДАНИЕ КАРТОЧКИ----------*/
function createCard(name, linkPhoto) {
  const cardElement = card.cloneNode(true);
  const cardBtnLike = cardElement.querySelector('.card__like');
  const cardBtnTrash = cardElement.querySelector('.card__trash');
  const cardPhoto = cardElement.querySelector('.card__photo');
  const cardPlaceName = cardElement.querySelector('.card__place-name');
  cardPlaceName.textContent = name;
  cardPhoto.setAttribute('src', linkPhoto);
  cardPhoto.setAttribute('alt', 'изображение ' + name);
  cardBtnTrash.addEventListener('click', function () {
    cardElement.remove();
  });
  cardBtnLike.addEventListener('click', function () {
    cardBtnLike.classList.toggle('card__like_active');
  });
  cardPhoto.addEventListener('click', function () {
    openPopup(popupViewPhotoPlace);
    popupPhoto.setAttribute('src', cardPhoto.getAttribute('src'));
    popupPhoto.setAttribute('alt', 'изображение ' + name);
    popupPhotoViewDescription.textContent = name;
  });
  return cardElement;
}

function addCard(name, linkPhoto) {
  const cardElement = createCard(name, linkPhoto)
  fotoFlow.prepend(cardElement);
}

function createInitialCards() {   //перебирает массив и создает из него карточки
  for (i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link)
  }
}
createInitialCards();
/*-----------СОЗДАНИЕ КАРТОЧКИ----------*/


/*----------САБМИТ ОБРАБОТЧИКИ---------*/
function setProfileInformationValue() {
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

function handleProfileFormSubmit(evt) { //обработчик сабмита
  setProfileInformationValue();
  closePopup(popupProfile);
  evt.preventDefault();
}
formProfile.addEventListener('submit', handleProfileFormSubmit);

function deactivateButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = 'disabled';
}

function handleCardsFormSubmit(evt) {
  addCard(placeNameInput.value, placeLinkInput.value);
  closePopup(popupAddCard);
  evt.target.reset();
  evt.preventDefault();
  deactivateButton(buttonSaveCardAdd, configForm);
}
formCard.addEventListener('submit', handleCardsFormSubmit);
/*----------САБМИТ ОБРАБОТЧИКИ---------*/


/*----------ЗАКРЫТИЕ ПОП-АПОВ-----------*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

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

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}
/*----------ЗАКРЫТИЕ ПОП-АПОВ-----------*/

class Card {
  constructor() {

  }

}




