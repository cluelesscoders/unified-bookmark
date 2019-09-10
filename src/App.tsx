import React, { Component } from 'react';
import { browser } from './browsers';
import ErrorBoundary from './components/ErrorBoundary';
import Tree from './components/Tree';
import { BookmarkProvider } from './context/bookmark-context';

export class App extends Component {
  public state: any = {
    bookmarks: [],
  };

  public async componentDidMount() {
    let data = await browser.getBookmarkTree();
    data = browser.filterBookmarks(data);

    this.setState({ bookmarks: data });
  }
  public render() {
    return (
      <BookmarkProvider intialState={this.state}>
        <div className="App">
          <ErrorBoundary>
            {this.state.bookmarks && (
              <div>
                <Tree />
              </div>
            )}
          </ErrorBoundary>
        </div>
      </BookmarkProvider>
    );
  }
}
