class StarRating extends HTMLElement {
  attachedCallback() {
    this._root = this.createShadowRoot();
    this._root.appendChild(this._getTemplate('#star-rating-template'));

    this._stars = Array.from(this._root.querySelectorAll('.star'));
    this._toggleStars(this.getAttribute('value'));
    this._applyDOMEvents();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value') {
      this._toggleStars(newVal);
    }
  }

  _getTemplate(selector) {
    const template = document.querySelector(selector);
    return document.importNode(template.content, true);
  }

  _toggleStars(val) {
    const toggleSelection = (item, index) => item.classList[index < val ? 'add' : 'remove']('selected');
    this._stars.forEach(toggleSelection);
  }

  _applyDOMEvents() {
    this._stars.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.setAttribute('value', index + 1);
      });
    });
  }
}

document.registerElement("star-rating", StarRating);
