import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div data-test="component-app">
        <div data-test="counter">
          Currently couter display {this.state.count}
        </div>

        <button 
          data-test="button-increment"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    )
  }
}

export default App;
