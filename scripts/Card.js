import { openPopup } from './utils/utils.js';
import { popupViewPhotoPlace } from "./utils/constants.js";
import { popupPhoto } from "./utils/constants.js";
import { popupPhotoViewDescription } from "./utils/constants.js";

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__photo').setAttribute('src', this._link);
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._element.querySelector('.card__photo').setAttribute('alt', `изображение ${this._name}`);
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
}