export interface BookmarkElement {
  dateAdded: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
  url?: string;
}

export interface BookmarkChild {
  children: BookmarkElement[];
  dateAdded: number;
  dateGroupModified: number;
  id: string;
  index: number;
  parentId: string;
  title: string;
}

export interface BookmarkTree {
  children: BookmarkChild[];
  dateAdded: number;
  id: number;
  title?: string;
}

const filterBookmarks = (data: any) => {
  const result: any =
    data &&
    data.map((bookmarkTree: BookmarkTree) => {
      return (
        bookmarkTree &&
        bookmarkTree.children &&
        bookmarkTree.children.filter(i => i.children.length)
      );
    });

  return result;
};

// const getAllBookmarkElement
// const getAllBookmarkParentNode
// const getBookmarkTree

const getBookmarkTree = () => {
  return new Promise((resolve, reject) => {
    if (!chrome) {
      reject(new Error('chrome apis not supported'));
    }

    if (!chrome.bookmarks) {
      reject(new Error('chrome bookmarks api permission required'));
    }

    chrome.bookmarks.getTree(data => {
      resolve(data);
    });
  });
};

export { getBookmarkTree, filterBookmarks };
