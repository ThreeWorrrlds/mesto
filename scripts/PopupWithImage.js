import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open({ img, name }) {
    this._popupSelector.querySelector('.popup__photo').src = img;
    this._popupSelector.querySelector('.popup__photo').alt = name;
    this._popupSelector.querySelector('.popup__photo-description').textContent = name;
    super.open();
  }
}