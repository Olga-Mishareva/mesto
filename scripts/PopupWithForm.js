import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ handleSubmit }, popupSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

  }

  _getInputValues() {
    // собирает данные с полей input
  }

  _setEventListeners() {
    super._setEventListeners();

    // submit
  }

  closePopup() {
    super.closePopup();


  }


}
