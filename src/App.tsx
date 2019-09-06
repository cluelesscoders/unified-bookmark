import React, { Component } from 'react';
import { browser } from './browsers';
import Test from './components/Test';
import TestContext from './components/TestContext';
import { BookmarkProvider } from './context/bookmark-context';

export class App extends Component {
  public state = {
    bookmarks: {},
  };

  public async componentDidMount() {
    let data = await browser.getBookmarkTree();
    data = browser.filterBookmarks(data);

    // tslint:disable-next-line: no-console
    console.log(data);

    // this.setState({ bookmarks: data });
  }
  public render() {
    return (
      <BookmarkProvider intialState={this.state}>
        <div className="App">
          <p>Testing REACT APP</p>
          {this.state.bookmarks && (
            <div>
              <Test />
              <TestContext />
            </div>
          )}
        </div>
      </BookmarkProvider>
    );
  }
}
