/* !!!!!!!!!!!КЛАСС КАРТОЧЕК!!!!!!!!! */
import { initialCards } from "./index.js";
import { openPopup } from "./index.js";
import { popupViewPhotoPlace } from "./index.js";
import { popupPhoto } from "./index.js";
import { popupPhotoViewDescription } from "./index.js";

class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    //вытащить из темплейт кнопки лайк и треш

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__photo').setAttribute('src', this._link);
    this._element.querySelector('.card__place-name').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    const cardBtnLike = this._element.querySelector('.card__like');
    const cardBtnTrash = this._element.querySelector('.card__trash');
    const cardPhoto = this._element.querySelector('.card__photo');

    cardPhoto.addEventListener('click', () => {
      openPopup(popupViewPhotoPlace);
      popupPhoto.setAttribute('src', cardPhoto.getAttribute('src'));
      popupPhoto.setAttribute('alt', `'изображение ${this._name}`);
      popupPhotoViewDescription.textContent = this._name;
    });

    cardBtnLike.addEventListener('click', function () {
      cardBtnLike.classList.toggle('card__like_active');
    });

    cardBtnTrash.addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
    });
  }
}  //закрывает класс

function addCard(name, link, templateSelector) {
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();
  document.querySelector('.foto-flow').prepend(cardElement);
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card');
  const cardElement = card.generateCard();

  document.querySelector('.foto-flow').prepend(cardElement);
});


export { addCard };