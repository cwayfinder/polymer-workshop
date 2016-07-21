var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  const firstName = this.getAttribute('first-name');
  const lastName = this.getAttribute('last-name');

  this.textContent = 'Name is ' + firstName + ' ' + lastName;

  this.style.color = 'red';
};

document.registerElement('simple-element', {
  prototype: proto
});
