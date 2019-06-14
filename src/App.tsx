import React from 'react';

export class App extends React.Component {
  public componentDidMount() {
    // chrome.bookmarks.getTree(data => {
    //   // tslint:disable-next-line:no-console
    //   console.log(data);
    // });
  }
  public render() {
    return (
      <div className="App">
        <p>Testing REACT APP</p>
      </div>
    );
  }
}
