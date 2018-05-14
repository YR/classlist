/**
 * Wrapper around {@link Element.classList.contains}.
 */
export function containsClass(element: Element, token: string) {
  return element.classList.contains(token);
}

/**
 * Add class name(s) from an element in a cross-browser safe way.
 * @see {@link Element.classList.add}
 * @param element {Element} The element to add class name(s) from
 * @param tokens {string} The class name(s) to add
 */
export function addClass(element: Element, ...tokens: Array<string>) {
  // Some browsers don't support multiple tokens...
  for (let i = 0, n = tokens.length; i < n; i++) {
    element.classList.add(tokens[i]);
  }
}

/**
 * Remove class name(s) from an element in a cross-browser safe way.
 * @see {@link Element.classList.remove}
 * @param element {Element} The element to remove class name(s) from
 * @param tokens {string} The class name(s) to remove
 */
export function removeClass(element: Element, ...tokens: Array<string>) {
  // Some browsers don't support multiple tokens...
  for (let i = 0, n = tokens.length; i < n; i++) {
    element.classList.remove(tokens[i]);
  }
}

/**
 * Wrapper around {@link Element.classList.replace}.
 */
export function replaceClass(element: Element, oldToken: string, newToken: string) {
  // @ts-ignore
  element.classList.replace(oldToken, newToken);
}

/**
 * Toggle class name on an element in a cross-browser safe way.
 * @see {@link Element.classList.toggle}
 * @param {Element} element - The element to toggle class on
 * @param {string} token - The class name to toggle
 * @param {boolean} [force] - If `true` always add the class name, if `false` always remove.
 * @return {boolean} `true` if the class was added, `false` otherwise
 */
export function toggleClass(element: Element, token: string, force?: boolean) {
  // Some browser don't support 'force' argument
  if (force === true) {
    element.classList.add(token);
    return true;
  } else if (force === false) {
    element.classList.remove(token);
    return false;
  } else {
    return element.classList.toggle(token);
  }
}
