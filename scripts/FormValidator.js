

const configForm = {  //данные для параметра config
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',

  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_style_error',
  errorClass: 'popup__text-error_active'
}


class FormValidator {
  constructor(config, formElement) {
    console.log('это консоль лог из конструктора класса');
    this._config = config;
    this._formElement = formElement;
  }


  _showError(input, errorElement) {
    console.log('не валидный инпутище!');
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideError(input, errorElement) {
    console.log('валидный инпутище!');
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
    console.log(inputList);
    const submitButton = form.querySelector(this._config.submitButtonSelector);
    console.log(submitButton);
    this._toggleButtonState(submitButton, form.checkValidity());
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        const errorElement = form.querySelector(`.${input.id}-error`);
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
}       //закрывает класс

const formValidation = new FormValidator(configForm, '.popup__form');
formValidation.enableValidation();

export { configForm };