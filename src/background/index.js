import { overrideNewTabPage } from './overrideNewTabPage';
import { openInNewTab } from './openInNewTab';

chrome.tabs.onCreated.addListener(overrideNewTabPage);

chrome.browserAction.onClicked.addListener(openInNewTab);

navigator.serviceWorker
  .register('./worker.js')
  .then(() => console.log('service worker loaded'));
