// при вызове диструктурирует переданный объект
// достает из restSettings нужное и передает глубже в форме {...restSettings}
function enableValidation({ formSelector, ...restSettings }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(restSettings, formElement);
  })
}

// в кажд. форме находит все инпуты и на кажд. вешает обработчик события input
// для кажд. нового нажатия вызывает ф.валидации и ф.контроля кнопки submit
// достает из restSettings нужное и передает глубже в форме {...restSettings}
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

// проверяет валидность каждого нажатия
// принятые restSettings предает глубже
function checkInputValidity ({ ...restSettings }, inputElement) {

  if(!inputElement.validity.valid) {
    showError(restSettings, inputElement, inputElement.validationMessage);
  }
  else {
    hideError(restSettings, inputElement);
  }
}

// проверяет, есть ли в списке инпутов данной формы невалидные поля
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    console.log(inputElement.validity)
    return !inputElement.validity.valid;
  })
}

// отключает submit, если есть хоть одно невалидное поле
function switchSubmitBtnState({ inactiveButtonClass }, inputList, submitBtn) {
  if(hasInvalidInput(inputList)) {
    // console.log(hasInvalidInput(inputList))
    submitBtn.classList.add(inactiveButtonClass);
    submitBtn.setAttribute('disabled', '');
  }
  else {
    // console.log(hasInvalidInput(inputList))
    submitBtn.classList.remove(inactiveButtonClass);
    submitBtn.removeAttribute('disabled');
  }
}

// показывает span с ошбками, включает выделение невалидного поля
function showError({ inputErrorClass, errorClass }, inputElement, errorMassage) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.name}`);
  inputElement.classList.add(inputErrorClass);
  popupError.classList.add(errorClass);
  popupError.textContent = errorMassage;

}

// скрывает span с ошбками, выключает выделение невалидного поля
function hideError({ inputErrorClass, errorClass }, inputElement) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.name}`);
  inputElement.classList.remove(inputErrorClass);
  popupError.classList.remove(errorClass);
  popupError.textContent = '';
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});












