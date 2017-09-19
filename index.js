'use strict';

module.exports = {
  contains: function contains(element, token) {
    return element.classList.contains(token);
  },
  add: function add(element) {
    for (var _len = arguments.length, tokens = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      tokens[_key - 1] = arguments[_key];
    }

    // Some browsers don't support multiple tokens...
    for (var i = 0, n = tokens.length; i < n; i++) {
      element.classList.add(tokens[i]);
    }
  },
  remove: function remove(element) {
    for (var _len2 = arguments.length, tokens = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      tokens[_key2 - 1] = arguments[_key2];
    }

    // Some browsers don't support multiple tokens...
    for (var i = 0, n = tokens.length; i < n; i++) {
      element.classList.remove(tokens[i]);
    }
  },
  replace: function replace(element, oldToken, newToken) {
    element.classList.replace(oldToken, newToken);
  },
  toggle: function toggle(element, token, force) {
    // Some browser don't support 'force' argument
    if (force != null) {
      element.classList[force ? 'add' : 'remove'](token);
      return !!force;
    }
    return element.classList.toggle(token);
  }
};