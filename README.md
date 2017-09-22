[![NPM Version](https://img.shields.io/npm/v/@yr/classlist.svg?style=flat)](https://npmjs.org/package/@yr/classlist)
[![Build Status](https://img.shields.io/travis/YR/classlist.svg?style=flat)](https://travis-ci.org/YR/classlist?branch=master)

Ponyfill to fix [`element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) browser inconsistencies. Fixes multiple arguments for `add()/remove()`, adds missing `force` argument for `toggle()`, and shadows `contains()/replace()` for convenience.

*__Note__: does not fix missing `classList` on SVG/MathML elements on some platforms.*

## Usage

```js
const classList = require('@yr/classlist');

// Add/remove multiple classes
classList.add(element, 'foo', 'bar');
classList.remove(element, 'foo', 'bar');
// Respect 'force' argument
classList.toggle(element, 'foo', Math.random() > 0.5);
```