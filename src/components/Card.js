export default class Card {
  constructor(data, templateSelector, handleCardClick, handleCardLike, handleDeleteClick) {
    const { name, link, likes, cardId, ownerId, userId } = data;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
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
    this._like = this._element.querySelector('.place__like-counter');

    this._trash = this._element.querySelector('.place__trash_type_active');
    if(this._userId !== this._ownerId) {
      this._trash.classList.remove('place__trash_type_active');
    }
    this._element.querySelector('.place__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._toggleStrokeState();
    this._setLikes();
    this._setListeners();

    return this._element;
  }

  // добавляет изначальные лайки к карточке
  _setLikes() {
    if(this._likes.length > 0) {
      this._like.classList.add('place__like-counter_visible');
      this._like.textContent = this._likes.length;
    }
  }

  // навешивает обработчики событий на карточку
  _setListeners() {
    this._stroke.addEventListener('click', () => {
      this._handleCardLike(this._cardId);
    });
    this._trash.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // проверяет, если ли мой лайк на карте
  isLiked() {
    return this._likes.find((item) => item._id === this._userId);
  }

  // проверяет и изменяет цвет лайка
  _toggleStrokeState() {
    if(this.isLiked()) {
      this._stroke.classList.add('place__stroke_liked');
    }
    else {
      this._stroke.classList.remove('place__stroke_liked');
    }
  }

  // обновляет количество лайков
  toggleCardLike(newLikes) {
    this._likes = newLikes;
    if(this._likes.length > 0) {
      this._like.classList.add('place__like-counter_visible');
    }
    else {
      this._like.classList.remove('place__like-counter_visible');
    }
    this._like.textContent = this._likes.length;
    this._toggleStrokeState();
  }

  // удаление карты
  removeCard() {
    this._element.remove();
    this._element = null;
  }
}

