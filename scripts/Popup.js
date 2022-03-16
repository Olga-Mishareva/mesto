export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  openPopup() {
    this._popup = document.querySelector(this._popupSelector);
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup = document.querySelector(this._popupSelector);
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this._popupOpened = document.querySelector('.popup_opened');
      closePopup(this._popupOpened);
    }
  }

  _setEventListeners() {

  }

}
