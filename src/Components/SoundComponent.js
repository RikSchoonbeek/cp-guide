import React, { Component } from 'react'
import Sound from 'react-sound'

export default class SoundComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Sound
        url={`/audio/${this.props.currentStep}.mp3`}
        playStatus={this.props.playStatus}
        playFromPosition={0}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    )
  }
}