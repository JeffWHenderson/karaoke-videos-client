import React from 'react'
import { connect } from 'react-redux'

import { getVideos } from '../actions/videos'
import { mountVideo } from '../actions/videoPlayer'
import {queueVideo} from '../actions/videos'
import {unqueueVideo} from '../actions/videos'

import FavoritesCard from '../components/FavoritesCard'
import VideoCard from '../components/VideoCard'
import  VideoQueue  from '../components/VideoQueue'


class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {
    event.preventDefault()
    let href = event.target.getAttribute('href')
    let that = this
    if(href){
      this.props.mountVideo(href)
    } else {
        if(event.target.name === 'queue') {
          console.log(event.target.dataset)
          that.props.queueVideo(event.target.dataset)
        } else if(event.target.name === 'favorite'){
            console.log("favorite")
        } else if(event.target.name === 'queue-remove'){
          that.props.unqueueVideo()     // this will need refactor if I add multiple videos to Queue
        } else {
          console.log("unfavorite")    // add a call to backend here
        }
      }
  }

  render() {
    return(
      <div>

        <div className="video-queue" onClick={this.handleClick}>
          {this.props.videoQueue.map((video) =>
            <VideoQueue video={video}
          /> )}
        </div>

      {this.props.videos.map(video => (video.favorite === false) ?
        <div onClick={this.handleClick} >
          <VideoCard video={video} />
        </div>
      :
        <div onClick={this.handleClick} >
          <FavoritesCard video={video} />
        </div>
      )}
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

export default connect(mapStateToProps, { unqueueVideo, queueVideo, getVideos, mountVideo })(Videos)
