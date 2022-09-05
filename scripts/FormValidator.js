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
}       //закрывает класс

//export { deactivateButton };


/* 
class FormValidator {
  constructor(config, formElement) {
    console.log('это консоль лог из конструктора класса');
    this._config = config;
    this._formElement = formElement;
    //this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    //this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    //this._inputList = formElement.querySelectorAll(this._config.inputSelector);
  }

  _showError(input, errorElement) {
    console.log('не валидный инпутище!');
    console.log(errorElement)
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideError(input, errorElement) {
    console.log('валидный инпутище!');
    console.log(errorElement)
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

  _toggleButtonState(submitButton, isActive = false) {
    if (isActive) {
      submitButton.classList.remove(this._config.inactiveButtonClass);
      submitButton.disabled = false;
    } else {
      submitButton.classList.add(this._config.inactiveButtonClass);
      submitButton.disabled = 'disabled';
    }
  }

  _setEventListeners(form) {
    console.log('на каждый инпут формы вешается слушатель ввода')

    const inputList = Array.from(form.querySelectorAll(this._config.inputSelector));
    //console.log(inputList);

    const submitButton = form.querySelector(this._config.submitButtonSelector);
    console.log(submitButton);

    this._toggleButtonState(submitButton, form.checkValidity());
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        const errorElement = form.querySelector(`.${input.id}-error`);
        console.log(errorElement)
        this._checkInputValidity(input, errorElement);
        this._toggleButtonState(submitButton, form.checkValidity());
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector))
    console.log(formList);

    formList.forEach((form) => {
      console.log('на каждую форму вешается слушатель');
      this._setEventListeners(form);
    });
  }
}     */