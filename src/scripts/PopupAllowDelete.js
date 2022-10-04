import { Popup } from "./Popup.js";

export class PopupAllowDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__container');
  }

  setEventListeners(cardId, cardDelete) {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      cardDelete(cardId);
      //console.log(cardId);
      this.close();
    });
    super.setEventListeners();
  }

}

