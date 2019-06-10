import { isNewTabUrl } from './utils';

const shouldUseNewTabPage = () => {
  const useNewTabPage = JSON.parse(localStorage.getItem('useNewTabPage'));

  return useNewTabPage !== null ? useNewTabPage : true;
};

export const overrideNewTabPage = tab => {
  if (shouldUseNewTabPage() && isNewTabUrl(tab.url)) {
    chrome.tabs.update(tab.id, {
      url: chrome.extension.getURL('index.html'),
    });
  }
};
