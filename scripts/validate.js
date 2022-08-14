/*-----ВАЛИДАЦИЯ ИНПУТОВ------------*/

const configFormOne = {
  formSelector: '.popup-profile-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',

  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_style_error',
  errorClass: 'popup__text-error_active'
}

const configFormTwo = {
  formSelector: '.popup-card-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',

  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_style_error',
  errorClass: 'popup__text-error_active'
}

const showError = (errorElement, inputElement, config) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
}

const hideError = (errorElement, inputElement, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.remove(config.errorClass);
}

const checkInputValidity = (inputElement, formElement, config) => {

  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  if (!isInputValid) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
}

const toggleButtonState = (button, isActive = false, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  }
}

const setEventListener = (formElement, config) => {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(submitButton, formElement.checkValidity(), config);
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  [...inputList].forEach(input => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, formElement, config);
      toggleButtonState(submitButton, formElement.checkValidity(), config);
      console.log(formElement.checkValidity());
    });
  });
}

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  [...forms].forEach(form => {
    setEventListener(form, config);
  })
}

function clearValidation(config) {
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));
  inputList.forEach(input => {
    const errorField = document.querySelector(`.${input.id}-error`);
    hideError(errorField, input, config);
  });
}

enableValidation(configFormOne);
enableValidation(configFormTwo);