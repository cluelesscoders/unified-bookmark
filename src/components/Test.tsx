import React from 'react';
import {
  // BookmarkContextConsumer,
  withBookmarkContext,
} from '../context/bookmark-context';

const ConsoleLog = ({ children }: any): any => {
  // tslint:disable-next-line: no-console
  console.log(children);
  return false;
};

const Test = ({ context }: any) => {
  return <ConsoleLog>{context.bookmarks}</ConsoleLog>;
};

export default withBookmarkContext(Test);
