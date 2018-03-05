import React from 'react'
import { connect } from 'react-redux'
import {postVideoPlayCount} from "../actions/videos"

class VideoCard extends React.Component {

  handlePlayClick = (count, videoId) => {
    this.props.postVideoPlayCount(count, videoId)
    console.log("the button was clicked")
  }

  render() {
    const video = this.props.videos[this.props.index] // this is funky but its my solution to making this stateful (otherwise all the state would just be in the Videos.js)
    const favoriteOrUnfavorite = video.favorite ? "Unfavorite" : "Favorite" // this is new, gets rid of need for a favorite card

    return(
        <div target="_blank" /*href={video.youtube_url}*/ className={favoriteOrUnfavorite} key={video.id} >
          <h3>{video.title}</h3>
          <p>artist: {video.artist}</p>
          <button
            name="queue"
            data-title={video.title}
            data-artist={video.artist}
            data-youtube_url={video.youtube_url}
            data-videoid={video.id}
            data-playcount={video.play_count}
            >Queue
          </button>
          <button
            onClick={this.handlePlayClick(video.play_count, video.id)} // this is for the handler
            name="play"
            data-videoid={video.id}
            data-playcount={video.play_count}
            href={video.youtube_url}
            >play
          </button>
          <button
            data-videoid={video.id}
             name={favoriteOrUnfavorite}
            >{favoriteOrUnfavorite}
          </button>
          <br />
           Play Count: {video.play_count}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    playCount: state.playCount.playCount,
    videos: state.videos
  })
}

export default connect(mapStateToProps, { postVideoPlayCount })(VideoCard)




// //==========================================================
// incrementPlayCount = (nextPlayCount) =>  {
//    type: "ADD_TO_PLAY_COUNT",
//    nextPlayCount // this takes the new number for play count
// }

// postVideoPlayCount = (playCount, videoId) => {
//   let nextPlayCount = playCount + 1
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/videos/${videoId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({video: {play_count: nextPlayCount}})
//       })
//       .then(
//         //() => dispatch(this.incrementPlayCount(nextPlayCount))
//         this.setState({
//           counter: nextPlayCount//this.state.counter + 1
//         })
//       )
//       .catch(error => console.log("error"))
//   }
// }

//==========================================================
