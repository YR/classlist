Element class attribute manipulation

## Usage

```javascript
var classList = require('dom.classlist')
  , el = document.getElementById('myElement');

el.className = 'my-class some-class another-class';
classList.hasClass(el, 'my-class'); // => true
classList.addClass(el, 'yet-another-class'); // 'my-class some-class another-class yet-another-class'
classList.matchClass(el, 'yet-another'); // => 'yet-another-class'
classList.removeClass(el, 'yet-another-class'); // 'my-class some-class another-class'
classList.toggleClass(el, 'my-class'); // 'some-class another-class'
classList.replaceClass(el, 'some-class', 'some-other-class'); // 'some-other-class another-class'
classlist.addTemporaryClass(el, 'anim-class', 2000); // add 'anim-class' then remove after 2000ms
```

## API

**hasClass(element, clas)**: `Boolean` indicating whether `element` has `clas` applied

**matchClass(element, pattern)**: retrieve first class that matches simple string `pattern`

```javascript
classList.matchClass(el, 'my-'); // => 'my-class'
```

**addClass(element, clas)**: add `clas` to `element`

**removeClass(element, clas)**: remove `clas` from `element`

**toggleClass(element, clas)**: add/remove `clas` from `element`

**replaceClass(element, clasOld, clasNew)**: replace `clasOld` with `clasNew`

**addTemporaryClass(element, clas, duration)**: add `clas` to `element`, removing after `duration` (in milliseconds)