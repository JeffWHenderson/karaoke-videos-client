import React from 'react'
import { connect } from 'react-redux'

import { getVideos, queueVideo, unqueueVideo, favoriteVideo, unfavoriteVideo } from '../actions/videos'
import { mountVideo } from '../actions/videoPlayer'

// import FavoritesCard from '../components/FavoritesCard'
import VideoCard from '../components/VideoCard'
import  VideoQueue  from '../components/VideoQueue'


class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {
    let that = this
    switch(event.target.name) {
      case "play":
        return that.props.mountVideo(event.target.getAttribute('href'))
      case "queue":
        return  that.props.queueVideo(event.target.dataset)
      case "queue-remove":
        return that.props.unqueueVideo(event.target.dataset)
      case "Favorite":
        return that.props.favoriteVideo(event.target.dataset.videoid)
      case "Unfavorite":
        return that.props.unfavoriteVideo(event.target.dataset.videoid)
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
            {this.props.videos.map(video => (video.favorite === false) ?
              <div className="gibberish" onClick={this.handleClick} >
                <VideoCard video={video} />
              </div>
            :
              <div className="NONgibberish" onClick={this.handleClick} >
                <VideoCard video={video} />
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

export default connect(mapStateToProps, { unfavoriteVideo, favoriteVideo, unqueueVideo, queueVideo, getVideos, mountVideo })(Videos)
