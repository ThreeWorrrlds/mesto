import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popupElement.querySelector('.popup__photo');
    this._popupPhotoDescription = this._popupElement.querySelector('.popup__photo-description');
  }

  open({ img, name }) {
    this._popupPhoto.src = img;
    this._popupPhoto.alt = name;
    this._popupPhotoDescription.textContent = name;
    super.open();
  }
}