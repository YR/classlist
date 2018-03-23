[![NPM Version](https://img.shields.io/npm/v/@yr/classlist.svg?style=flat)](https://npmjs.org/package/@yr/classlist)
[![Build Status](https://img.shields.io/travis/YR/classlist.svg?style=flat)](https://travis-ci.org/YR/classlist?branch=master)

Ponyfill to fix [`element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) browser inconsistencies. 
* Fixes multiple arguments for `add()/remove()` 
* Adds missing `force` argument for `toggle()` 
* Shadows `contains()/replace()` for convenience.

*__Note__: does not fix missing `classList` on SVG/MathML elements on some platforms.*

## Usage

```js
import { addClass, removeClass, toggleClass } from '@yr/classlist';

// Add/remove multiple classes
addClass(element, 'foo', 'bar');
removeClass(element, 'foo', 'bar');
// Respect 'force' argument
toggleClass(element, 'foo', Math.random() > 0.5);
```