// import url from 'url';

// export type itemType = {
//   name?: string;
//   url: string;
//   folder?: string;
//   id?: string;
//   date_added: string | number;
//   date_modified: string | number;
//   sync_transaction_version?: string | number;
//   type?: string;
// };

// export const getFavicon = (link: string) => {
//   if (link && link.length) {
//     const o = url.parse(link);

//     if (o) {
//       const protocol = o.protocol;
//       const hostname = o.hostname;

//       return `${protocol}//${hostname}/favicon.ico`;
//     }
//   }

//   return '';
// };

// export const normalize = (item: itemType) => ({
//   title: item.name,
//   url: item.url,
//   favicon: getFavicon(item.url),
//   folder: item.folder || '',
//   id: item.id,
//   date_added: item.date_added || 0,
//   date_modified: item.date_modified || 0,
//   sync_transaction_version: item.sync_transaction_version || 0,
//   type: item.type || '',
// });

// export const removeDuplicates = (array: any, prop: any) => {
//   return array.filter((obj: any, pos: any, arr: any) => {
//     return arr.map((mapObj: any) => mapObj[prop]).indexOf(obj[prop]) === pos;
//   });
// };

// export const getChildren = (children: any): Array<object> => {
//   let bookmarks = [];

//   for (let i = 0; i < children.length; i++) {
//     const child = children[i];
//     if (child.type === 'folder') {
//       const gc = getChildren(child.children);
//       for (let j = 0; j < gc.length; j++) {
//         const fgc = Object.assign({}, gc[j], {
//           folder: child.name,
//           date_added: chromeTimeParser(child.date_added),
//           id: child.id,
//           date_modified: chromeTimeParser(child.date_modified),
//         });
//         bookmarks.push(fgc);
//       }
//     } else {
//       bookmarks.push(child);
//     }
//   }

//   return bookmarks;
// };

export const chromeTimeParser = (webkitTimestamp: number | string): number => {
  return new Date(webkitTimestamp).getTime();
};
