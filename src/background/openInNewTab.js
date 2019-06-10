import { isNewTabUrl } from './utils';

export const openInNewTab = tab => {
  if (isNewTabUrl(tab.url)) {
    return chrome.tabs.update(tab.id, {
      url: chrome.extension.getURL('index.html'),
    });
  }

  chrome.tabs.create({
    url: chrome.extension.getURL('index.html'),
  });
};
