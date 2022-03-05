const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  enableValidation(settings, formElement) {

    this._setEventListeners(settings, formElement);
  }

  // в кажд. форме находит все инпуты и на кажд. вешает обработчик события input
  // для кажд. нового нажатия вызывает ф.валидации и ф.контроля кнопки submit
  _setEventListeners(settings, formElement) {
    this._inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this._submitBtn = formElement.querySelector(settings.submitButtonSelector);

    this._switchSubmitBtnState(formElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._switchSubmitBtnState(formElement);
      });
    });
  }

  // отключает submit, если есть хоть одно невалидное поле
  _switchSubmitBtnState(formElement) {
    if(!formElement.checkValidity()) {
      this._submitBtn.classList.add(settings.inactiveButtonClass);
      this._submitBtn.setAttribute('disabled', '');
    }
    else {
      this._submitBtn.classList.remove(settings.inactiveButtonClass);
      this._submitBtn.removeAttribute('disabled');
    }
  }

  // проверяет валидность каждого нажатия
  _checkInputValidity(inputElement) {
    if(!inputElement.checkValidity()) {
      this._showErrors(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideErrors(inputElement);
    }
  }

  // _checkValidity() {
  //   return this._inputList.some((inputElement) => {
  //     return !inputElement.validity.valid;
  //   })
  // }

  // показывает span с ошбками, включает выделение невалидного поля
  _showErrors(inputElement, errorMassage) {
    this._error = document.querySelector(`.popup__error_type_${inputElement.name}`);
    inputElement.classList.add(settings.inputErrorClass);
    this._error.classList.add(settings.errorClass);
    this._error.textContent = errorMassage;
  }

  // скрывает span с ошбками, выключает выделение невалидного поля
  _hideErrors(inputElement) {
    this._error = document.querySelector(`.popup__error_type_${inputElement.name}`);
    inputElement.classList.remove(settings.inputErrorClass);
    this._error.classList.remove(settings.errorClass);
    this._error.textContent = '';
  }

  disableButton(formElement) {
    this._switchSubmitBtnState(formElement)
  }

  hideIrrelevantErrors(formElement) {
    this._inputList.forEach((inputElement) => {
      this._hideErrors(inputElement);
    })
  }
}

export {FormValidator, settings};








