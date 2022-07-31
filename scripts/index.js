const buttonEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__button-close');

const formElement = document.querySelector('.popup__form');  //форма отправки
const nameInput = formElement.querySelector('.popup__input_type_name');  //строка имени в поп-апе профиля
const jobInput = formElement.querySelector('.popup__input_type_job'); //строка о работе в поп-апе профиля

const profileName = document.querySelector('.profile__name'); //строка имени профиля на странице 
const profileDescription = document.querySelector('.profile__description'); //строка о работе профиля на странице

const buttonAddCardsPlace = document.querySelector('.profile__button-add'); //кнопка открытия поп-ап место
const popupEditCardsPlace = document.querySelector('.popup__edit-place-card'); //попап добавления карточки место
const buttonSaveCardAdd = document.querySelector('.popup__button-save_card_add'); //кнопка сохранить поп-ап место

const popupViewPhotoPlace = document.querySelector('.popup__view-photo'); //поп-ап просмотра фото
const popupPhoto = document.querySelector('.popup__photo');
const popupPhotoViewDescription = document.querySelector('.popup__photo-description');

const page = document.querySelector('.page'); //вся страница

const fotoFlow = document.querySelector('.foto-flow'); //секция карточек места

const card = document.querySelector('#card').content.querySelector('.card'); //карточка

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


function createInitialCards() {   //перебирает массив и создает из него карточки
  for (i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
  }
}
createInitialCards();

function setPopupInputValue() {                           // заполняет инпуты поп-апа профиля
  nameInput.value = profileName.textContent.trim();
  jobInput.value = profileDescription.textContent.trim();
}

function openPopup() {                      //автозаполняет поля и открывает поп-ап профиля
  setPopupInputValue();
  popup.classList.add('popup_opened');
}

function setProfileInformationValue() {             //устанавливает в профайл страницы значения введенные в инпуты
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

function openPopapEditCardsPlace() {                      //открывает поп-ап карточек места
  popupEditCardsPlace.classList.add('popup_opened');
}

function likeToggle(evt) {          //тоглит лайк по таргету
  const likeBtn = evt.target;
  if (likeBtn.classList.contains('card__like')) {
    likeBtn.classList.toggle('card__like_active');
  }
}

function closePopup(evt) {          //закрывает попап по таргету на крестик или "сохранить"
  const closeBtn = evt.target;
  if (closeBtn.classList.contains('popup__button-close')) {
    closeBtn.closest('.popup').classList.remove('popup_opened');
  } if (closeBtn.classList.contains('popup__button-save')) {
    closeBtn.closest('.popup').classList.remove('popup_opened');
  }
}

function formSubmitHandler(evt) { //обработчик сабмита
  setProfileInformationValue();
  closePopup(evt);
  evt.preventDefault();
}

function addCard(name, linkPhoto) {                    //функция создает карточку места из темплейт элемента
  const cardElement = card.cloneNode(true);                                           //клонировали содержимое
  cardElement.querySelector('.card__place-name').textContent = name;                  //присвоили name значение инпута
  cardElement.querySelector('.card__photo').setAttribute('src', linkPhoto);           // присвоили linkPhoto значение инпута
  cardElement.querySelector('.card__trash').addEventListener('click', function () {   //кнопка удаления темплейт элемента
    cardElement.remove();
  });
  fotoFlow.prepend(cardElement);                                             //разместили элемент в начале
}

function popupOpenViewPhotoPlace(evt) {   //функц. открытия поп-апа с картинкой
  const ViewBtn = evt.target;
  if (ViewBtn.classList.contains('card__photo')) {    //если тык на картинку
    popupViewPhotoPlace.classList.add('popup_opened'); // то открывается попап
    popupPhoto.setAttribute('src', ViewBtn.getAttribute('src')); //добавляется атрибут полученный от таргета
    popupPhotoViewDescription.textContent = ViewBtn.nextElementSibling.querySelector('.card__place-name').textContent; //здесь подтягивается текст от таргета
    console.log(ViewBtn.parentNode.querySelector('.card__place-name').textContent);
  }
}

buttonSaveCardAdd.addEventListener('click', function (evt) {        //слушатель кнопки сохранить
  const placeNameInput = document.querySelector('.popup__input_type_place-name');
  const placeLinkInput = document.querySelector('.popup__input_type_place-link');
  addCard(placeNameInput.value, placeLinkInput.value);        //функция с аргументами значений инпута нэйм и инпута ссылки фото
  closePopup(evt);        //закрывает поп-ап
  evt.preventDefault();    //останавливает дальнейшее событие
});

buttonEdit.addEventListener('click', openPopup);  // Открывает попап профиля

buttonAddCardsPlace.addEventListener('click', openPopapEditCardsPlace); //открывает попап добавления карточки места

fotoFlow.addEventListener('click', likeToggle); //тоглит лайк

page.addEventListener('click', closePopup); //закрыть попап по таргету

formElement.addEventListener('submit', formSubmitHandler);  //вызов функции обработчика по событию сабмит

page.addEventListener('click', popupOpenViewPhotoPlace);
