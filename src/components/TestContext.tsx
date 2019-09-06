import React from 'react';
import { useBookmark } from '../context/bookmark-context';
import ConsoleLog from './ConsoleLog';

const TestContext = () => {
  const { bookmarks }: any = useBookmark();
  return (
    <>
      <ConsoleLog>{bookmarks}</ConsoleLog>
    </>
  );
};

export default TestContext;
