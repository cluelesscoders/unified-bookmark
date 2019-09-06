import React, { useContext } from 'react';
import { BookmarkContext } from '../context/bookmark-context';

const ConsoleLog = ({ children }: any): any => {
  // tslint:disable-next-line: no-console
  console.log(children);
  return false;
};

const TestContext = () => {
  const { bookmarks }: any = useContext(BookmarkContext);
  return (
    <>
      <ConsoleLog>{bookmarks}</ConsoleLog>
    </>
  );
};

export default TestContext;
