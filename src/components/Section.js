export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // применяет функцию, прописанную при создании класса к каждому элементу
  // (создание карточки и вставка в DOM)
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    })
  }

  // вставка в DOM
  addItem(elem) {
    this._container.prepend(elem);
  }

}

