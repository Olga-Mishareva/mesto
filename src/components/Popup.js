export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
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

  // закрытие с Esc
  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  // обр. закрытия по Overlay и по крестику
  setEventListeners() {
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
