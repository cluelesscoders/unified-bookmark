import Chrome from './browsers/chrome';

(async() => {
  const chr = new Chrome();

  const d = await chr.getBookmarkPath('Profile 1');

  const bookmarks = await d.getBookmarks();

  console.log(bookmarks);
})();
