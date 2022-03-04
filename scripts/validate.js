import {FormValidator, settings} from './FormValidator.js';



// при вызове диструктурирует переданный объект
// достает из restSettings нужное и передает глубже в форме {...restSettings}

  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formValidation = validator.enableValidation(settings, formElement);
  })


















