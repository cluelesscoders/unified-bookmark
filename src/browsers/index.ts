import * as chrome from './chrome';
import * as firefox from './firefox';

export interface Browser {
  getBookmarkTree(): [];
}

let browser: Browser = {} as any;

if (/Chrome/.test(navigator.userAgent)) {
  browser = Object.assign(browser, chrome);
} else {
  browser = Object.assign(browser, firefox);
}

export { browser };