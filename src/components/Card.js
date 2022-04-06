export default class Card {
  constructor({ name, link, cardId, ownerId, userId }, templateSelector, handleCardClick, handleDeleteClick) {
    this._name = name;
    this._link = link;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
    if(this._userId !== this._ownerId) {
      this._trash.classList.remove('place__trash_type_active');
    }
    this._element.querySelector('.place__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setListeners();
    // console.log(this._element)
    return this._element;
  }

  // навешивает обработчики событий на карточку
  _setListeners() {
    this._stroke.addEventListener('click', (evt) => {
      this._likeCard(evt);
    });
    this._trash.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });
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

