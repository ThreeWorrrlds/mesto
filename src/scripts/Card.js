export class Card {
  constructor(data, { handleCardClick, handleCardDelete, handleLikeClick }, templateSelector, myId) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._likesArr = data.likes;
    this._userId = data.owner._id;
    this._cardId = data._id;
    this._myId = myId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._element = this._getTemplate();
    this._photo = this._element.querySelector('.card__photo');
    this._likesCounter = this._element.querySelector('.card__likescounter');
    this._cardBtnTrash = this._element.querySelector('.card__trash');
    this._cardBtnLike = this._element.querySelector('.card__like');
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._photo.setAttribute('src', this._link);
    this._photo.setAttribute('alt', `изображение ${this._name}`);
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._likesCounter.textContent = this._likes;
    if (this._userId !== this._myId) {
      this._cardBtnTrash.remove();
    }
    this._setEventListeners();
    this.changeLikeState(this._data);
    return this._element;
  }

  _setEventListeners() {
    this._cardBtnTrash.addEventListener('click', () => {
      this._handleCardDelete(this);
    });

    this._cardBtnLike.addEventListener('click', () => {
      this._handleLikeClick(this);
    })

    this._photo.addEventListener('click', () => {
      this._handleCardClick(this.getObjectData());
    });
  }

  isLiked() {
    return Boolean(this._likesArr.find((like) => { return like._id === this._myId }));
  }

  changeLikeState(data) {
    this._likesArr = data.likes;
    this._likesCounter.textContent = data.likes.length;
    if (this.isLiked()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  setLike() {
    this._cardBtnLike.classList.add('card__like_active');
  }

  unsetLike() {
    this._cardBtnLike.classList.remove('card__like_active');
  }

  removeElement() {
    this._element.remove();
  }

  getIdCard() {
    return this._cardId;
  }

  getObjectData() {
    const objectData = {};
    objectData.img = this._link;
    objectData.name = this._name;
    objectData._id = this._cardId;
    return objectData;
  }
}
