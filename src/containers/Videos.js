import React from 'react'
import { connect } from 'react-redux'
import { getVideos } from '../actions/videos'
import VideoCard from '../components/VideoCard'
import { mountVideo } from '../actions/videoPlayer'
import  VideoQueue  from '../components/VideoQueue'
import {queueVideo} from '../actions/videos'
import FavoritesCard from '../components/FavoritesCard'
//import VideoForm from './VideoForm'

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
          that.props.queueVideo(event.target.dataset)
        } else if(event.target.name === 'favorite'){
            console.log("favorite")
        } else {
          console.log("queue-remove")
        }
      }
  }

  toggleLink = () => {
    return true
  }

  render() {
    return(
      <div>
      {
        (this.toggleLink()) ? (
          this.props.videos.map((video) =>
            <div onClick={this.handleClick} ><VideoCard video={video} /></div>)
        ) : (
            this.props.videos.filter(video => video.favorite === true).forEach(video => console.log(video))
        )
      }


        <div className="video-queue" onClick={this.handleClick}>
          {this.props.videoQueue.map((video) =>
            <VideoQueue video={video}
          /> )}
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

export default connect(mapStateToProps, { queueVideo, getVideos, mountVideo })(Videos)
