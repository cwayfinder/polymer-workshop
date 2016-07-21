class SimpleElement extends HTMLElement {
  createdCallback() {
    const firstName = this.getAttribute('first-name');
    const lastName = this.getAttribute('last-name');

    this.textContent = `Name is ${firstName} ${lastName}`;

    this.style.color = 'red';
  }
}

protoElement = document.registerElement('simple-element', SimpleElement);
