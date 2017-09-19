'use strict';

module.exports = {
  contains(element, token) {
    return element.classList.contains(token);
  },
  add(element, ...tokens) {
    // Some browsers don't support multiple tokens...
    for (let i = 0, n = tokens.length; i < n; i++) {
      element.classList.add(tokens[i]);
    }
  },
  remove(element, ...tokens) {
    // Some browsers don't support multiple tokens...
    for (let i = 0, n = tokens.length; i < n; i++) {
      element.classList.remove(tokens[i]);
    }
  },
  replace(element, oldToken, newToken) {
    element.classList.replace(oldToken, newToken);
  },
  toggle(element, token, force) {
    // Some browser don't support 'force' argument
    if (force != null) {
      element.classList[force ? 'add' : 'remove'](token);
      return !!force;
    }
    return element.classList.toggle(token);
  }
};