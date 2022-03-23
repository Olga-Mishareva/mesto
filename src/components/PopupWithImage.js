import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  openPopup() {
    super.openPopup();

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');

    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupCaption.textContent = this._name;
  }
}
