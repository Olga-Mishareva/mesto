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

  _checkInputValidity(inputElement) {
    console.log(inputElement)

    if(!inputElement.validity.valid) {
      this._showErrors(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideErrors(inputElement);
    }
  }

  _showErrors(inputElement, errorMassage) {
    this._error = document.querySelector(`.popup__error_type_${inputElement.name}`);
    inputElement.classList.add(settings.inputErrorClass);
    this._error.classList.add(settings.errorClass);
    this._error.textContent = errorMassage;
  }

  _hideErrors(inputElement) {
    this._error = document.querySelector(`.popup__error_type_${inputElement.name}`);
    inputElement.classList.remove(settings.inputErrorClass);
    this._error.classList.remove(settings.errorClass);
    this._error.textContent = '';
  }
}

export {FormValidator, settings};

// в кажд. форме находит все инпуты и на кажд. вешает обработчик события input
// для кажд. нового нажатия вызывает ф.валидации и ф.контроля кнопки submit
// достает из restSettings нужное и передает глубже в форме {...restSettings}
// function setEventListeners({ inputSelector, submitButtonSelector, ...restSettings }, formElement) {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const submitBtn = formElement.querySelector(submitButtonSelector);
//   switchSubmitBtnState(restSettings, submitBtn, formElement);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function() {
//       checkInputValidity(restSettings, inputElement);
//       switchSubmitBtnState(restSettings, submitBtn, formElement);
//     });
//   });
// }

// проверяет валидность каждого нажатия
// принятые restSettings предает глубже
// function checkInputValidity ({ ...restSettings }, inputElement) {
//   if(!inputElement.validity.valid) {
//     showErrors(restSettings, inputElement, inputElement.validationMessage);
//   }
//   else {
//     hideErrors(restSettings, inputElement);
//   }
// }

// отключает submit, если есть хоть одно невалидное поле
// function switchSubmitBtnState({ inactiveButtonClass }, submitBtn, formElement) {
//   if(!formElement.checkValidity()) {
//     submitBtn.classList.add(inactiveButtonClass);
//     submitBtn.setAttribute('disabled', '');
//   }
//   else {
//     submitBtn.classList.remove(inactiveButtonClass);
//     submitBtn.removeAttribute('disabled');
//   }
// }

// показывает span с ошбками, включает выделение невалидного поля
// function showErrors({ inputErrorClass, errorClass }, inputElement, errorMassage) {
//   const popupError = document.querySelector(`.popup__error_type_${inputElement.name}`);
//   inputElement.classList.add(inputErrorClass);
//   popupError.classList.add(errorClass);
//   popupError.textContent = errorMassage;

// }

// скрывает span с ошбками, выключает выделение невалидного поля
// function hideErrors({ inputErrorClass, errorClass }, inputElement) {
//   const popupError = document.querySelector(`.popup__error_type_${inputElement.name}`);
//   inputElement.classList.remove(inputErrorClass);
//   popupError.classList.remove(errorClass);
//   popupError.textContent = '';
// }






