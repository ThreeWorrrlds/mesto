const buttonEdit = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.profile-popup');
const buttonClose = document.querySelectorAll('.popup__button-close');

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
}

buttonEdit.addEventListener('click', function () {
  setPopupProfileInputValue();
  openPopup(popupProfile);
});

function setPopupCardInputValue() {
  placeNameInput.value = "";
  placeLinkInput.value = "";
}

buttonAddCard.addEventListener('click', function () {
  setPopupCardInputValue();
  openPopup(popupAddCard);
});
/*----------ОТКРЫТИЕ ПОПАПОВ--------------*/


/*-----------СОЗДАНИЕ КАРТОЧКИ----------*/
function createCard(name, linkPhoto) {
  const card = document.querySelector('#card').content.querySelector('.card');
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


function handleCardsFormSubmit(evt) {
  addCard(placeNameInput.value, placeLinkInput.value);
  closePopup(popupAddCard);
  evt.preventDefault();
}
formCard.addEventListener('submit', handleCardsFormSubmit);
/*----------САБМИТ ОБРАБОТЧИКИ---------*/


/*----------ЗАКРЫТИЕ ПОП-АПОВ-----------*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

buttonClose.forEach(function (button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(popup)
  });
});
/*----------ЗАКРЫТИЕ ПОП-АПОВ-----------*/








/* function closePopup(evt) {          //закрывает попап по таргету на крестик или "сохранить"
  const closeBtn = evt.target;
  if (closeBtn.classList.contains('popup__button-close')) {
    closeBtn.closest('.popup').classList.remove('popup_opened');
  } if (closeBtn.classList.contains('popup__button-save')) {
    closeBtn.closest('.popup').classList.remove('popup_opened');
  }
}
page.addEventListener('click', closePopup); //закрыть попап по таргету */

/* 
function likeToggle(evt) {          //тоглит лайк по таргету
  const likeBtn = evt.target;
  if (likeBtn.classList.contains('card__like')) {
    likeBtn.classList.toggle('card__like_active');
  }
}
fotoFlow.addEventListener('click', likeToggle); //тоглит лайк */

/* function addCard(name, linkPhoto) {                    //функция создает карточку места из темплейт элемента
  fotoFlow.prepend(cardElement);                                             //разместили элемент в начале
}
 */

/* buttonSaveCardAdd.addEventListener('click', function (evt) {        //слушатель кнопки сохранить
  const placeNameInput = document.querySelector('.popup__input_type_place-name');
  const placeLinkInput = document.querySelector('.popup__input_type_place-link');
  addCard(placeNameInput.value, placeLinkInput.value);        //функция с аргументами значений инпута нэйм и инпута ссылки фото
  closePopup(evt);        //закрывает поп-ап
  evt.preventDefault();    //останавливает дальнейшее событие
}); */

/* cardPhoto.addEventListener('click', function () {  //ВОТ ЭТА ФУНКЦИЯ ДОЛЖНА БЫТЬ!!!!!
  console.log('попал в card_photo');
  openPopup(popupViewPhotoPlace);
}); */

/* function findTarget(evt) {                //поиск таргета
  const viewBtn = evt.target;
  if (viewBtn.classList.contains('card__photo')) {
    console.log('попал в card_photo');
  }
}
page.addEventListener('click', findTarget); */
/* 
function popupOpenViewPhotoPlace(evt) {             //функц. открытия поп-апа с картинкой
  const ViewBtn = evt.target;
  if (ViewBtn.classList.contains('card__photo')) {    //если тык на картинку
    popupViewPhotoPlace.classList.add('popup_opened'); // то открывается попап
    popupPhoto.setAttribute('src', ViewBtn.getAttribute('src')); //добавляется атрибут полученный от таргета
    popupPhotoViewDescription.textContent = ViewBtn.nextElementSibling.querySelector('.card__place-name').textContent; //здесь подтягивается текст от таргета
    console.log(ViewBtn.parentNode.querySelector('.card__place-name').textContent);
  }
} 
page.addEventListener('click', findTarget); */
