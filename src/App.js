import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Prompt from './components/Prompt'
import { getUserData } from './utils/api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleInputChange = (change) => {
    this.setState({
      username: change.target.value
    })
  }

  handleSubmit = (trigger) => {
    trigger.preventDefault()
    getUserData(this.state.username)
      .then(responseData => {
        if (!responseData)
          console.log('player not found')
        else
          console.log(responseData)

      })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>summer overwatch app</h2>
        </div>
          <Prompt
            onSubmitTag={this.handleSubmit}
            onUpdateTag={this.handleInputChange}
            value={this.state.username}
          />
      </div>
    );
  }
}

export default App;
