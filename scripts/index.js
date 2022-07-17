let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__button-close');

let formElement = document.querySelector('.popup__form');  //форма
let nameInput = formElement.querySelector('.popup__input_type_name');  //строка имени в поп-апе
let jobInput = formElement.querySelector('.popup__input_type_job'); //строка о работе в поп-апе

let profileName = document.querySelector('.profile__name'); //строка имени на странице
let profileDescription = document.querySelector('.profile__description'); //строка о работе на странице



//let buttonSave = formElement.querySelector('.popup__button-save');  //кнопка сохранить

//buttonSave.addEventListener('click', formSubmitHandler); // Закрытие поп-апа при нажатии "Сохранить"

//function clickButtonSave() {          // устанавливает в профайл значения введенные в поля формы и закрывает поп-ап
//  setProfileInformationValue();
//  closePopap();
//}

function setPopupInputValue() {                           // автозаполняет поля формы
  nameInput.value = profileName.textContent.trim();
  jobInput.value = profileDescription.textContent.trim();
}

function openPopap() {                      //открывает поп-ап автозаполняя поля
  setPopupInputValue();
  popup.classList.add('popup_opened');
}

function closePopap() {                         //закрывает поп-ап
  popup.classList.remove('popup_opened');
}

function setProfileInformationValue() {             //устанавливает в профайл значения введенные в поля формы
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}


function formSubmitHandler(evt) {
  setProfileInformationValue();
  closePopap();
  evt.preventDefault();
}



buttonEdit.addEventListener('click', openPopap);  // Открытие поп-апа

buttonClose.addEventListener('click', closePopap); // Закрытие поп-апа

formElement.addEventListener('submit', formSubmitHandler); //???????




