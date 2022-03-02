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

//const cardTemplate = document.querySelector('#card').content;
const cardsBox = document.querySelector('.place-grid__places');

class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector).content
    .querySelector('.place').cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate;

    this._element.querySelector('.place__title').textContent = this._name;
    this._image = this._element.querySelector('.place__image');
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._element;
  }


}
