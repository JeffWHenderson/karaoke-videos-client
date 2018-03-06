import React from 'react'
import { connect } from 'react-redux'

import { getVideos, queueVideo, unqueueVideo, favoriteVideo, unfavoriteVideo } from '../actions/videos'
import { mountVideo } from '../actions/videoPlayer'
import VideoCard from '../components/VideoCard'
import  VideoQueue  from '../components/VideoQueue'
// import {postVideoPlayCount} from '../actions/videos' // postVideoPlayCount,

class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {
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

  render() {
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
            {this.props.sortedVideos.map((video, index) =>
              <div onClick={this.handleClick} key={video.id} >
                <VideoCard index={index} /* this was sending a video. now it sends a reference because the VideoCard has access to State */ />
              </div>
            )}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    sortedVideos: state.videos.sort((a, b) => ( b.play_count - a.play_count)), // state.videos.each(video.play_count)
    videoQueue: state.videoQueue
  })
}

export default connect(mapStateToProps, { unfavoriteVideo, favoriteVideo, unqueueVideo, queueVideo, getVideos, mountVideo })(Videos)
