import React, { Component } from 'react';
import { browser } from './browsers';
import Test from './components/Test';
import TestContext from './components/TestContext';
import { BookmarkProvider } from './context/bookmark-context';

export class App extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      bookmarks: {},
    };
  }

  public async componentDidMount() {
    const data = await browser.getBookmarkTree();

    this.setState({ bookmarks: data });
  }
  public render() {
    return (
      <BookmarkProvider intialState={this.state}>
        <div className="App">
          <p>Testing REACT APP</p>
          <Test />
          <TestContext />
        </div>
      </BookmarkProvider>
    );
  }
}
