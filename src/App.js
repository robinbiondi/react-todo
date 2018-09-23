import React, { Component } from 'react';
import './App.css';
import {Header, List} from 'Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
