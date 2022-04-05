export default class Card {
  constructor(data, templateSelector, handleCardClick, deleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._isOwner = data.isOwner;
    this._cardId = data.cardId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
  }

  // создет копию template
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector).content
    .querySelector('.place').cloneNode(true);

    return cardElement;
  }

  // создает карточку
  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.place__image');
    this._stroke = this._element.querySelector('.place__stroke');
    this._trash = this._element.querySelector('.place__trash_type_active');
    if(!this._isOwner) {
      this._trash.classList.remove('place__trash_type_active');
    }

    this._element.querySelector('.place__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setListeners();

    return this._element;
  }

  // навешивает обработчики событий на карточку
  _setListeners() {
    this._stroke.addEventListener('click', (evt) => {
      this._likeCard(evt);
    });
    // this._trash.addEventListener('click', (evt) => {
    //   console.log(this._cardId)

    //   // this._deleteCard(this._cardId);
    //   // this._removeCard(evt);
    // });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _likeCard(evt) {
    evt.target.classList.toggle('place__stroke_liked');
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}

