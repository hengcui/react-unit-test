import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <div data-test="counter">Currently couter display</div>
        <button data-test="button-increment">
          Increment
        </button>
      </div>
    )
  }
}

export default App;
