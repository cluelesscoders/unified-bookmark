import { chromeTimeParser } from '../../utils';

const changeTimeStamps = (data: any) => {
  return (
    data &&
    data.map((item: any) => {
      if (item && item.dateAdded) {
        item.dateAdded = chromeTimeParser(item.dateAdded);
      }

      return item;
    })
  );
};

const getBookmarkTree = () => {
  return new Promise((resolve, reject) => {
    if (!chrome) {
      reject(new Error('chrome apis not supported'));
    }

    if (!chrome.bookmarks) {
      reject(new Error('chrome bookmarks api permission required'));
    }

    chrome.bookmarks.getTree(data => {
      const item = changeTimeStamps(data);

      resolve(item);
    });
  });
};

export { getBookmarkTree };
