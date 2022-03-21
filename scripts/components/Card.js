export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._trash = this._element.querySelector('.place__trash');

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
    this._trash.addEventListener('click', (evt) => {
      this._removeCard(evt);
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _likeCard(evt) {
    evt.target.classList.toggle('place__stroke_liked');
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }
}

