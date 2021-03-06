import React from 'react'
import { connect } from 'react-redux'
import {postVideoPlayCount} from "../actions/videos"

class VideoCard extends React.Component {

   handlePlayClick = (event) => {
     let data = event.target.dataset
     this.props.postVideoPlayCount(data.playcount, data.videoid)
   }
//////////////////////////////////this is all just a live code challenge ///////////
   // callApi = () => {
   //   console.log('a')
   //     fetch('http://localhost:3001/api/videosfffdgf')
   //     .then(res => {
   //
   //       if (res.ok) {
   //
   //         console.log('b')
   //
   //         return res.json()
   //       }
   //       throw new Error(res.statusText)
   //     })
   //     .then(videos => console.log('c', videos))
   //     .catch(err => console.log('d', err))
   //     console.log('e')
   //
   // }
   //
   //
   //     <button
   //       onClick={this.callApi} // event handler
   //       name="Call Api"
   //
   //       >Call Api
   //     </button>

  render() {
    const video = this.props.videos[this.props.index]
    const favoriteOrUnfavorite = video.favorite ? "Unfavorite" : "Favorite"
          // this is new, gets rid of need for a favorite card

    return(
        <div target="_blank" className={favoriteOrUnfavorite} key={video.id} >
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
            onClick={this.handlePlayClick} // event handler
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
