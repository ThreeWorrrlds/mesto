import { Popup } from "./Popup.js";

export class PopupAllowDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__container');
    this._submitHandler = null;
  }

  setSubmitAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
      //this.close();
    });
  }

}

