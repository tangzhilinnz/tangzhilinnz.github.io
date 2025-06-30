// [typeof] always returns a string, which makes the comparison consistent.
// In a browser, typeof window returns "object". In a non-browser environment, typeof window returns "undefined".
// if without it, might throw a ReferenceError
export const isBrowser: boolean = typeof window !== 'undefined';
export const isMobile: boolean = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
export const isApple: boolean = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
