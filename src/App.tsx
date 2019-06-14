import React from 'react';
import { getBookmarkTree } from './browsers/chrome';

export class App extends React.Component {
  public async componentDidMount() {
    const data = await getBookmarkTree();
    console.log(data);
  }
  public render() {
    return (
      <div className="App">
        <p>Testing REACT APP</p>
      </div>
    );
  }
}
