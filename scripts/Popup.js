export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  openPopup() {
    this._popup = document.querySelector(this._popupSelector);
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  closePopup() {
    this._popup = document.querySelector(this._popupSelector);
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _setEventListeners() {

  }

}
