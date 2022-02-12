const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function enableValidation(formElement, inputElement, submitBtn, inactivSubmitBtn, invalidInpun, errorElement) {
// находим все формы
// в кажд. форме находим все инпуты
// на кажд. инп. вешаем обработчик события инп.
// в кот. проверяем валидность каждого нажатия
// и выдаем спан, подчеркивание - showError, и откл. кнопки - toggle
const formList = Array.from(document.querySelectorAll('.popup__form'));
//console.log(formList)
formList.forEach((formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitBtn = formElement.querySelector('.popup__submit-button');


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkValidity(inputList, submitBtn, inputElement);
      switchSubmitBtnState(inputList, submitBtn);
    });
  });
  //console.log(inputList)
  //console.log(submitBtn)

})
}

function checkValidity (inputList, submitBtn, inputElement) {
  if(!inputElement.validity.valid) {
    showError(inputElement, inputElement.validationMessage);

    // console.log(inputElement.validationMessage)
  }
  else {
    hideError(inputElement);

  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function switchSubmitBtnState(inputList, submitBtn) {
  if(hasInvalidInput(inputList)) {
    //console.log(hasInvalidInput(inputList))
    submitBtn.classList.add('popup__submit-button_disabled');
  }
  else {
    //console.log(hasInvalidInput(inputList))
    submitBtn.classList.remove('popup__submit-button_disabled');
  }
}

function showError(inputElement, errorMassage) {
  // console.log(inputElement)

  inputElement.classList.add('popup__input_type_error');
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  popupError.classList.add('popup__error_visible');
  popupError.textContent = errorMassage;
}

function hideError(inputElement) {
  const popupError = document.querySelector(`.popup__error_type_${inputElement.id}`);
  // console.log(popupError)
  inputElement.classList.remove('popup__input_type_error');
  popupError.classList.remove('popup__error_visible');
  popupError.textContent = '';
}




enableValidation(settings);













