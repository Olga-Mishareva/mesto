export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // console.log(this._items)
    this._items.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(elem) {
    this._container.prepend(elem);
  }

}

