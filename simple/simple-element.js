var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  this.textContent = 'Name is ' + this.getAttribute('first-name') + ' ' + this.getAttribute('last-name');
  this.style.color = 'red';
};

document.registerElement('simple-element', {
  prototype: proto
});
