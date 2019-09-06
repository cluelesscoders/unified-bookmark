import React from 'react';
import { browser } from './browsers';

export class App extends React.Component {
  public async componentDidMount() {
    const data = await browser.getBookmarkTree();
    // tslint:disable-next-line:no-console
    console.log({ name: 'test', data });
  }
  public render() {
    return (
      <div className="App">
        <p>Testing REACT APP</p>
      </div>
    );
  }
}
