import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleSubmit }, popupSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

  }

  // собирает данные с полей input
  _getInputValues() {
    this._inputData = {};
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._inputList.forEach(input => {
      this._inputName = input.getAttribute('name');
      this._inputData[this._inputName] = input.value;
    });
    // console.log(this._inputData)
    return this._inputData;
  }

  _setEventListeners() {
    super._setEventListeners();

    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      // console.log(this._getInputValues())
      this._handleSubmit(this._getInputValues());
      this.closePopup();
    });

  }

  closePopup() {
    super.closePopup();

    // форма должна еще сбрасываться
  }


}
