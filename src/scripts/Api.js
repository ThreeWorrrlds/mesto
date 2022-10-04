import {
  avatarInput,
  placeInput,
  imgInput,
  nameInput,
  jobInput
} from './utils/constants.js';

export class Api {
  constructor(config) {
    this._urlCards = config.urlCards;
    this._urlAvatar = config.urlAvatar;
    this._urlUser = config.urlUser;
    this._headers = config.headers;
  }

  getAllCards() {
    return fetch(this._urlCards, {
      headers: this._headers
    })
      .then((res) => {
        return res.json();
      })
  }

  deleteCard(cardId) {
    fetch(`${this._urlCards}/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return res.json();
      })
  }

  setLike(cardId) {
    fetch(`${this._urlCards}/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => {
        return res.json();
      })
  }

  deleteLike(cardId) {
    fetch(`${this._urlCards}/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return res.json();
      })
  }

  changeAvatar() {
    return fetch(this._urlAvatar, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarInput.value
      })
    })
      .then((res) => {
        return res.json();
      })
  }

  createUserCard() {
    return fetch(this._urlCards, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: placeInput.value,
        link: imgInput.value
      })
    })
      .then((res) => {
        return res.json();
      })
  }

  getUserInfoFromServer() {
    return fetch(this._urlUser, { headers: this._headers })
      .then((res) => {
        return res.json();
      })
  }

  sendUserInfoToServer() {
    return fetch(this._urlUser, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: nameInput.value,
        about: jobInput.value
      })
    })
      .then((res) => {
        return res.json();
      })
  }

}
