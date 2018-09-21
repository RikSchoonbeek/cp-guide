import React, { Component } from 'react';
import './App.css';
import Sound from 'react-sound'
import SoundComponent from './Components/SoundComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstStep: 1,
      lastStep: 17,
      playStatus: Sound.status.STOPPED,
    }
  }
  nextStep = () => {
    if (this.state.currentStep < this.state.lastStep) {
      let nextStep = this.state.currentStep + 1
      this.setState({currentStep: nextStep})
    }
  }
  previousStep = () => {
    if (this.state.currentStep > this.state.firstStep) {
      let nextStep = this.state.currentStep - 1
      this.setState({currentStep: nextStep})
    }
  }
  startPlaying = () => {
    this.setState({playStatus: Sound.status.PLAYING})
  }
  render() {
    return (
      <div className="App p-1">
          <h1>Completion Process Steps Guide</h1>
          <h2>Current Step: {this.state.currentStep}</h2>
          <button onClick={this.previousStep} type="button" className="btn btn-primary px-4 py-3 m-2"><i className="fas fa-arrow-left"></i></button>
          <button onClick={this.startPlaying} type="button" className="btn btn-primary px-4 py-3 m-2"><i className="fas fa-play"></i></button>
          <button onClick={this.nextStep} type="button" className="btn btn-primary px-4 py-3 m-2"><i className="fas fa-arrow-right"></i></button>
          <SoundComponent currentStep={this.state.currentStep}
                          playStatus={this.state.playStatus}/>
          <p>This app is made by Rik Schoonbeek, just for personal use. The content of the spoken audio is taken from the book "The Completion Process", written by Teal Swan. I am not claiming ownership of it.</p>
        <p>The only reason I am serving this web page online is because it is made with create-react-app, and the build html file can not be opened locally. Not without considerable study on how to get that to work at least. :P</p>
          <p>This web page should not be shared. So if you find that someone shares this page with you, please let me know at rik.schoonbeek at gmail.com</p>
      </div>
    );
  }
}

export default App;
