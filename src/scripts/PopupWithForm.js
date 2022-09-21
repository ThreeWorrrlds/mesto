import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(formSelector);
    this._submitHandler = submitHandler;
    this._inputElements = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const formDataObject = {};
    this._inputElements.forEach((input) => {
      formDataObject[input.name] = input.value;
    });
    return formDataObject;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }

  clearInputs() {
    this._form.reset();
  }

}