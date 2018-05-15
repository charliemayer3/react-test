import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      info: []
    };
  };

  componentDidMount() {
    fetch('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
    .then(result => result.json())
    .then(info => this.setState({ info }));
  };

  render() {
    console.log(this.state.info)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.info.length ?
            this.state.info.map(item=><li key={item.id}>{item.body}</li>) 
            : <li>Loading...</li>
          }
        </ul>
      </div>
    );
  }
}

export default App;
