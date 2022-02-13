const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function enableValidation({ formSelector, ...restSettings }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(restSettings, formElement);
  })
}

// в кажд. форме находим все инпуты
// на кажд. инп. вешаем обработчик события инп.
function setEventListeners({ inputSelector, submitButtonSelector, ...restSettings }, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitBtn = formElement.querySelector(submitButtonSelector);
  switchSubmitBtnState(restSettings, inputList, submitBtn);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(restSettings, inputElement);
      switchSubmitBtnState(restSettings, inputList, submitBtn);
    });
  });
}

// в кот. проверяем валидность каждого нажатия
function checkInputValidity ({ ...restSettings }, inputElement) {

  if(!inputElement.validity.valid) {
    showError(restSettings, inputElement, inputElement.validationMessage);
  }
  else {
    hideError(restSettings, inputElement);
  }
}

//
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function switchSubmitBtnState({ inactiveButtonClass }, inputList, submitBtn) {
  if(hasInvalidInput(inputList)) {
    submitBtn.classList.add(inactiveButtonClass);
    submitBtn.setAttribute('disabled', '');
  }
  else {
    submitBtn.classList.remove(inactiveButtonClass);
    submitBtn.removeAttribute('disabled');
  }
}

// и выдаем спан, подчеркивание - showError, и откл. кнопки - toggle
function showError({ inputErrorClass, errorClass }, inputElement, errorMassage) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  inputElement.classList.add(inputErrorClass);
  popupError.classList.add(errorClass);
  popupError.textContent = errorMassage;

}

function hideError({ inputErrorClass, errorClass }, inputElement) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  inputElement.classList.remove(inputErrorClass);
  popupError.classList.remove(errorClass);
  popupError.textContent = '';
}



enableValidation(settings);













