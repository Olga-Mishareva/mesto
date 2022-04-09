import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleSubmit }, popupSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitBtn = this._popup.querySelector('.popup__submit-button');
    this._btnText = this._submitBtn.textContent;
  }

  // получает на вход функцию и заменяет ей стандартный сабмит для попапа удаления карточки
  updateSubmitHandler(fn) {
    this._handleSubmit = fn;
  }

  // собирает данные с полей input в объект
  _getInputValues() {
    this._inputData = {};
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._inputList.forEach(input => {
      this._inputName = input.getAttribute('name');
      this._inputData[this._inputName] = input.value;
    });

    return this._inputData;
  }

  // навешивает еще и обработчик формы
  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  // добавляет сброс формы
  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }

  // показывает процесс загрузки
  renderLoading(loading) {
    if(loading) {
      this._submitBtn.textContent = 'Сохранение...';
    }
    else {
      this._submitBtn.textContent = this._btnText;
    }
  }
}
