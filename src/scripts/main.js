'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const parentDiv = inputs[i].parentNode;
  const label = document.createElement('label');
  const id = inputs[i].getAttribute('id');
  const placeholder = inputs[i].getAttribute('name')
    .split('')
    .map(a => a === a.toUpperCase()
      ? `-${a}`
      : a)
    .join('')
    .replace('-', ' ');

  label.innerHTML = placeholder;
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  inputs[i].setAttribute('placeholder', placeholder.toUpperCase());
  parentDiv.prepend(label);
}
