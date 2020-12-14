import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      string: 'Hello Ruby'
    }
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{this.state.string}</h3>
          <button onClick={() => this.setState({ string: 'Hello Baby Ruby' })}>Click Me</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div >
    );

  }

}
export default App;
