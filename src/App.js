import React, { Component } from 'react';
import './App.css';
import PromptContainer from './containers/PromptContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <PromptContainer />
      </div>
    )
  }
}
