class SimpleElement extends HTMLElement {
  createdCallback() {
    this.textContent = `Name is ${this.getAttribute('first-name')} ${this.getAttribute('last-name')}`;
    this.style.color = 'red';
  }
}

protoElement = document.registerElement('simple-element', SimpleElement);
