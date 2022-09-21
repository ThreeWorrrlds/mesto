export class Card {
  constructor({ name, link }, { handleCardClick }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._photo = this._element.querySelector('.card__photo');
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._photo.setAttribute('src', this._link);
    this._photo.setAttribute('alt', `изображение ${this._name}`);
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    const cardBtnLike = this._element.querySelector('.card__like');
    const cardBtnTrash = this._element.querySelector('.card__trash');
    const cardPhoto = this._element.querySelector('.card__photo');

    cardBtnLike.addEventListener('click', function () {
      cardBtnLike.classList.toggle('card__like_active');
    });

    cardBtnTrash.addEventListener('click', () => {
      this._element.remove();
    });

    cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this.getObjectData());
    });
  }

  getObjectData() {
    const objectData = {};
    objectData.img = this._link;
    objectData.name = this._name;
    return objectData;
  }
}
