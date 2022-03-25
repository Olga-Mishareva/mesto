export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);

  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // закрытие с Esc
  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  // обр. закрытия по Overlay и по крестику
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    });
  }
}
