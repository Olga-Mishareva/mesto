import {FormValidator, settings} from './FormValidator.js';


  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    validator.enableValidation(settings, formElement);
  })


















