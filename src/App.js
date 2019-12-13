import React, { Component } from 'react';
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
          Currently couter display {this.state.count < 0 ? 0 : this.state.count}
        </div>
        
        {this.state.count < 0 &&
          <div data-test="error">
            The counter can't go below zero
          </div>
        }

        <button 
          data-test="button-increment"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>

        <button
          data-test="button-decrement"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrement
        </button>
      </div>
    )
  }
}

export default App;
