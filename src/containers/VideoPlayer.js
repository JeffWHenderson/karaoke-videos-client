import React from 'react'

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className="video-player">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WmzH0aKzifk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoPlayer
