const initialCards = [
  {
    name: 'Гора Ахун',
    link: './images/ana-kai-QXOl2IXJ_ow-unsplash.jpg',
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg',
  },
  {
    name: 'Конжаковский Камень',
    link: './images/daniil-silantev-hGQWGwtnbVw-unsplash.jpg',
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-h-M3O25tyvI-unsplash.jpg',
  },
  {
    name: 'Ольхон',
    link: './images/kir-simakov-OGc_X8PeikQ-unsplash.jpg',
  },
  {
    name: 'Юрюзань',
    link: './images/daniil-silantev-2avwToAG91M-unsplash.jpg',
  },
];


class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector).content
    .querySelector('.place').cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.place__title').textContent = this._name;
    this._image = this._element.querySelector('.place__image');
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setListeners();

    return this._element;
  }


  _setListeners() {
    this._element.addEventListener('click', (evt) => {
      if(evt.target === this._element.querySelector('.place__stroke')) {
        this._likeCard(evt);
      }
      else if(evt.target === this._element.querySelector('.place__trash')) {
        this._removeCard(evt);
      }
    })
  }

  _likeCard(evt) {
    evt.target.classList.toggle('place__stroke_liked');
  }

  _removeCard(evt) {
    evt.target.closest('.place').remove();
  }

}

export {Card, initialCards}
