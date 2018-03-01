import React from 'react'
import { connect } from 'react-redux'

// import postVideoPlayCount from "../actions/videos"

class VideoCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter: this.props.video.play_count // getting play_count from Rails API
    }
  }
  //==========================================================
  incrementPlayCount = (nextPlayCount) =>  {
    debugger
     type: "ADD_TO_PLAY_COUNT",
     nextPlayCount // this takes the new number for play count
  }

  postVideoPlayCount = (playCount, videoId) => {
    let nextPlayCount = playCount + 1
    return dispatch => {
      return fetch(`http://localhost:3001/api/videos/${videoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({video: {play_count: nextPlayCount}})
        })
        .then(
          //() => dispatch(this.incrementPlayCount(nextPlayCount))
          this.setState({
            counter: nextPlayCount//this.state.counter + 1
          })
        )
        .catch(error => console.log("error"))
    }
  }

  //==========================================================

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
            name="play"
            href={video.youtube_url}
            >play
          </button>
          <button
            data-videoid={video.id}
             name={favoriteOrUnfavorite}
            >{favoriteOrUnfavorite}
          </button>
          <br />
          <button  onClick={this.postVideoPlayCount(this.state.counter, video.id)}>click me!</button> Play Count: {this.state.counter}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    playCount: state.playCount.playCount
  })
}

export default connect(mapStateToProps)(VideoCard)
