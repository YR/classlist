'use strict';

var useNative = document.documentElement.classList != null,
    RE_TRIM = /^\s+|\s+$/g;

/**
 * Check if 'element' has class 'clas'
 * @param {Element} element
 * @param {String} clas
 * @returns {Boolean}
 */
exports.hasClass = function (element, clas) {
  if (useNative) {
    return element.classList.contains(clas);
  }

  var classes = element.className.replace(RE_TRIM, '').split(' ');

  return contains(classes, clas);
};

/**
 * Check if 'element' has a class matching 'pattern'
 * @param {Element} element
 * @param {String} pattern
 * @returns {String}
 */
exports.matchClass = function (element, pattern) {
  var classes = element.className.replace(RE_TRIM, '').split(' ');
  var clas = undefined;

  for (var i = 0, n = classes.length; i < n; i++) {
    clas = classes[i];
    if (clas.indexOf(pattern) !== -1) {
      return clas;
    }
  }
  return '';
};

/**
 * Add class 'clas' to 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.addClass = function (element, clas) {
  if (useNative) {
    element.classList.add(clas);
  } else {
    element.className += ' ' + clas;
  }
};

/**
 * Remove class 'clas' from 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.removeClass = function (element, clas) {
  if (clas) {
    if (useNative) {
      element.classList.remove(clas);
    } else {
      var classes = element.className.replace(RE_TRIM, '').split(' ');

      var results = [];

      for (var i = 0, n = classes.length; i < n; i++) {
        if (classes[i] !== clas) results.push(classes[i]);
      }
      element.className = results.join(' ');
    }
  }
};

/**
 * Toggle class 'clas' on 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.toggleClass = function (element, clas) {
  if (exports.hasClass(element, clas)) {
    exports.removeClass(element, clas);
  } else {
    exports.addClass(element, clas);
  }
};

/**
 * Replace class 'clasOld' with 'clasNew' on 'element'
 * @param {Element} element
 * @param {String} clasOld
 * @param {String} clasNew
 */
exports.replaceClass = function (element, clasOld, clasNew) {
  if (clasOld) {
    if (clasNew) {
      element.className = element.className.replace(clasOld, clasNew);
    } else {
      exports.removeClass(element, clasOld);
    }
  } else if (clasNew) {
    exports.addClass(element, clasNew);
  }
};

/**
 * Add class 'clas' to 'element', and remove after 'duration' milliseconds
 * @param {Element} element
 * @param {String} clas
 * @param {Number} duration
 */
exports.addTemporaryClass = function (element, clas, duration) {
  exports.addClass(element, clas);
  setTimeout(function () {
    exports.removeClass(element, clas);
  }, duration);
};

/**
 * Determine if 'arr' contains 'item'
 * @param {Array} arr
 * @param {Object|String|Number} item
 * @returns {Boolean}
 */
function contains(arr, item) {
  for (var i = 0, n = arr.length; i < n; i++) {
    if (arr[i] === item) return true;
  }
  return false;
}