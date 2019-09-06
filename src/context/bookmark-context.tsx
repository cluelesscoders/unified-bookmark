import React, { useContext } from 'react';

export interface BookmarkContextInterface {
  bookmarks: any;
}

export const BookmarkContext = React.createContext<BookmarkContextInterface>({
  bookmarks: {},
});

export const BookmarkContextProvider = BookmarkContext.Provider;
export const BookmarkContextConsumer = BookmarkContext.Consumer;

export const BookmarkProvider = ({ intialState, children }: any) => (
  <BookmarkContextProvider value={intialState}>
    {children}
  </BookmarkContextProvider>
);

export function withBookmarkContext(Component: any) {
  return function ComponentWithProps(props: any) {
    return (
      <BookmarkContextConsumer>
        {ctx => <Component {...props} context={ctx} />}
      </BookmarkContextConsumer>
    );
  };
}

export const useBookmark = () => useContext(BookmarkContext);
