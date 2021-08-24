export class Parser {
  constructor(body) {
    this.element = document.createElement('div');
    this.element.insertAdjacentHTML('beforeend', body);
  }

  _titleNode (node) {
    return node.querySelector("a[slot='title']");
  }

  _title (node) {
    return this._titleNode(node).childNodes[0].nodeValue.split("\n")[1].trim();
  }

  _url (node) {
    return this._attribute(this._titleNode(node), "href");
  }

  _attribute (node, attribute) {
    return node.attributes.getNamedItem(attribute).value;
  }
}