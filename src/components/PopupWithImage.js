import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  openPopup(name, link) {
    super.openPopup();

    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = this._name;
  }
}
