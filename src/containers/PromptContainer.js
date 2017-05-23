import React, { Component } from 'react';
import Prompt from '../components/Prompt'
import { getUserData, getTESTUserData } from '../utils/api';
import Heading from '../components/Heading';
import LoadingLogo from '../components/LoadingLogo';
import AvatarImg from '../components/AvatarImg';
import DataGrid from '../components/DataGrid';

const headingText = {
  padding: '0',
  margin: '0'
}

export default class PromptContainer extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      username: '',
      playerData: null,
      isLoading: false
    }
  }
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      isLoading: true
    })

    // THIS CODE ACTUALLY CALLS THE API
    getUserData(this.state.value)
      .then(responseData => {
        this.setState({
          playerData: responseData,
          isLoading: false,
          username: this.state.value,
          value: '',
        })
      })

    // THIS USES HARDCODED JASON DATA FROM THE API FOR NILBOG-1950
    /*
    this.setState({
      playerData: getTESTUserData(this.state.username),
      username: this.state.value,
      value: '',
      isLoading: false
    })
    */
  }

  logoutUser = () => {
    this.setState({
      username: '',
      playerData: null,
      isLoading: false
    })
  }

  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <Heading>
          { this.state.playerData ?
            <h2 style={headingText}>{this.state.username}</h2> :
            <h2 style={headingText}>summer overwatch app</h2> }
        </Heading>
        <div style={{position: 'relative'}}>
          { this.state.playerData ?
            <AvatarImg playerData={this.state.playerData}/> :
            <LoadingLogo loading={this.state.isLoading}/> }
        </div>
        { this.state.playerData ?
            <div><DataGrid userData={this.state.playerData}/><button className='btn' onClick={this.logoutUser}>Go Back</button></div> :
            <Prompt
              onSubmitTag={this.handleSubmit}
              onUpdateTag={this.handleInputChange}
              value={this.state.value} />
        }
      </div>
    )
  }
}
