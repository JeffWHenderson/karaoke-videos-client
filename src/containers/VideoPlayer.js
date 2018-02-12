import React from 'react'
import NowPlaying from '../components/NowPlaying'

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.setState({video: {title: "mulan"}})
    debugger
  }

  render() {
    return (
      <div className="video-player">
        < NowPlaying video={this.props.video} />
      </div>
    )
  }
}

export default VideoPlayer
