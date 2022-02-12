const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function enableValidation(formElement, inputElement, submitBtn, inactivSubmitBtn, invalidInpun, errorElement) {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  })
}

// в кажд. форме находим все инпуты
// на кажд. инп. вешаем обработчик события инп.
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitBtn = formElement.querySelector('.popup__submit-button');

  switchSubmitBtnState(inputList, submitBtn);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(inputElement);
      switchSubmitBtnState(inputList, submitBtn);
    });
  });
}

// в кот. проверяем валидность каждого нажатия
function checkInputValidity (inputElement) {
  if(!inputElement.validity.valid) {
    showError(inputElement, inputElement.validationMessage);
  }
  else {
    hideError(inputElement);
  }
}

//
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function switchSubmitBtnState(inputList, submitBtn) {
  if(hasInvalidInput(inputList)) {
    submitBtn.classList.add('popup__submit-button_disabled');
  }
  else {
    submitBtn.classList.remove('popup__submit-button_disabled');
  }
}

// и выдаем спан, подчеркивание - showError, и откл. кнопки - toggle
function showError(inputElement, errorMassage) {
  inputElement.classList.add('popup__input_type_error');
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  popupError.classList.add('popup__error_visible');
  popupError.textContent = errorMassage;
}

function hideError(inputElement) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  inputElement.classList.remove('popup__input_type_error');
  popupError.classList.remove('popup__error_visible');
  popupError.textContent = '';
}



enableValidation(settings);













