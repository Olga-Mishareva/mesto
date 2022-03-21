export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  openPopup() {
    this._popup = document.querySelector(this._popupSelector);
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });

  }

  closePopup() {
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
    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
      if(evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    });
  }

}
