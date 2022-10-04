export class Card {
  constructor(data, { handleCardClick }, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._userId = data.owner._id;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    if (this._userId !== "4a161389e69e9824646dd7f1") {
      this._cardBtnTrash.remove();
    }
    return this._element;
  }

  _setEventListeners(popup, setLike, deleteLike) {
    const cardBtnLike = this._element.querySelector('.card__like');
    const cardPhoto = this._element.querySelector('.card__photo');

    cardBtnLike.addEventListener('click', () => {
      cardBtnLike.classList.toggle('card__like_active');
      console.log('лайк');
      setLike(this._cardId);

      const obj = [];
      for (let i = 0; i < this._data.likes.length; i++) {     //собирает массив из айди лайков разных пользователей
        console.log(i);
        obj[i] = this._data.likes[i]._id;
      }
      console.log(obj);

      const isOwn = obj.some(item => {                  //проверяет массив айди лайков на наличие моего лайка
        return item === '4a161389e69e9824646dd7f1';
      })
      console.log(isOwn);

      if (isOwn) {                                  //если есть мой лайк - удаляет его
        deleteLike(this._cardId)
      }
    });

    this._cardBtnTrash.addEventListener('click', () => {
      popup();
    });

    cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this.getObjectData());
    });
  }

  removeElement() {
    this._element.remove();
  }

  getIdCard() {
    if (this._userId === "4a161389e69e9824646dd7f1") {
      return this._cardId;
    }
  }

  getObjectData() {
    const objectData = {};
    objectData.img = this._link;
    objectData.name = this._name;
    return objectData;
  }
}
