export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element, order = true) {
    if (order) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

}