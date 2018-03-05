import React from 'react'
import { connect } from 'react-redux'

import { getVideos, queueVideo, unqueueVideo, favoriteVideo, unfavoriteVideo } from '../actions/videos'
import { mountVideo } from '../actions/videoPlayer'

// import FavoritesCard from '../components/FavoritesCard'
import VideoCard from '../components/VideoCard'
import  VideoQueue  from '../components/VideoQueue'



import {postVideoPlayCount} from '../actions/videos'

class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {  //let that = this
    let data = event.target.dataset
    switch(event.target.name) {
      case "play":
        //this.props.postVideoPlayCount(data.playcount, data.videoid)
        return this.props.mountVideo(event.target.getAttribute('href'))
      case "queue":
        return  this.props.queueVideo(data)
      case "queue-remove":
        return this.props.unqueueVideo(data)
      case "Favorite":
        return this.props.favoriteVideo(data.videoid)
      case "Unfavorite":
        return this.props.unfavoriteVideo(data.videoid)
      default:
        console.log("the event wasn't caught in -Videos.js- handleClick function")
    }
  }

  render() { /////////// I can refactor the ternary out of this if I leave the sort alphabetical instead of by favorites.
    return(
      <div>

        <div className="video-queue" onClick={this.handleClick}>
          <h1>Video Queue</h1>
          {this.props.videoQueue.map((video) =>
            <VideoQueue video={video}
          /> )}
        </div>

        <div className="video-container">
            <h1>Karaoke Songs</h1>
            {this.props.videos.map((video, index) => (video.favorite === false) ?
              <div onClick={this.handleClick} >
                <VideoCard index={index} />
              </div>
            :
              <div onClick={this.handleClick} >
                <VideoCard index={index} />
              </div>
            )}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos,
    videoQueue: state.videoQueue
  })
}

export default connect(mapStateToProps, { postVideoPlayCount, unfavoriteVideo, favoriteVideo, unqueueVideo, queueVideo, getVideos, mountVideo })(Videos)
