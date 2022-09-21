export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showError(input, errorElement) {
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideError(input, errorElement) {
    input.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.remove(this._config.errorClass);
  }

  _checkInputValidity(input, errorElement) {
    if (!input.validity.valid) {
      this._showError(input, errorElement);
    } else {
      this._hideError(input, errorElement);
    }
  }

  _toggleButtonState(isActive = false) {
    if (isActive) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = 'disabled';
    }
  }

  _setEventListeners() {
    this._toggleButtonState(this._formElement.checkValidity());
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        const errorElement = this._formElement.querySelector(`.${input.id}-error`);
        this._checkInputValidity(input, errorElement);
        this._toggleButtonState(this._formElement.checkValidity());
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  deactivateButton() {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
    this._submitButton.disabled = 'disabled';
  }
}