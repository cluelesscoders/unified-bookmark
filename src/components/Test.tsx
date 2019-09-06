import React from 'react';
import { withBookmarkContext } from '../context/bookmark-context';
import ConsoleLog from './ConsoleLog';

const Test = ({ context }: any) => {
  return <ConsoleLog>{context.bookmarks}</ConsoleLog>;
};

export default withBookmarkContext(Test);
