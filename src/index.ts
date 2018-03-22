export function contains(element: Element, token: string) {
  return element.classList.contains(token);
}

export function add(element: Element, ...tokens: Array<string>) {
  // Some browsers don't support multiple tokens...
  for (let i = 0, n = tokens.length; i < n; i++) {
    element.classList.add(tokens[i]);
  }
}

export function remove(element: Element, ...tokens: Array<string>) {
  // Some browsers don't support multiple tokens...
  for (let i = 0, n = tokens.length; i < n; i++) {
    element.classList.remove(tokens[i]);
  }
}

export function replace(element: Element, oldToken: string, newToken: string) {
  // 'replace'-function is missing in DOMTokenList. See: https://github.com/Microsoft/TypeScript/issues/22466
  // @ts-ignore
  element.classList.replace(oldToken, newToken);
}

export function toggle(element: Element, token: string, force?: boolean) {
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
