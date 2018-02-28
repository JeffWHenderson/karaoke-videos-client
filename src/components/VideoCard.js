import React from 'react'

class VideoCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const { video } = this.props
    const favoriteOrUnfavorite = video.favorite ? "Unfavorite" : "Favorite" // this is new, gets rid of need for a favorite card
    return(
        <div target="_blank" /*href={video.youtube_url}*/ className="video-card" key={video.id} >
          <h3>{video.title}</h3>
          <p>artist: {video.artist}</p>
          <button
            name="queue" data-title={video.title} data-artist={video.artist} data-youtube_url={video.youtube_url}>Queue
          </button>
          <button
            href={video.youtube_url}
            >play
          </button>
          <button
            data-videoid={video.id}
             name={favoriteOrUnfavorite}
            >{favoriteOrUnfavorite}
          </button>
          <br />
          <button onClick={this.handleClick}>click me!</button> Play Count: {this.state.counter}
        </div>
    )
  }
}
export default VideoCard
