import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Prompt from './components/Prompt'
import { getUserData } from './utils/api';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      playerData: null
    }
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  resetInputField = () => {
    this.setState({
      username: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    getUserData(this.state.username)
      .then(responseData => {
        this.setState({
          playerData: responseData
        })
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
    )
  }
}
