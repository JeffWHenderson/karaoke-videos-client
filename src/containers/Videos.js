import React from 'react'
import { connect } from 'react-redux'
import { getVideos } from '../actions/videos'
import VideoCard from '../components/VideoCard'
import { mountVideo } from '../actions/videoPlayer'
import  VideoQueue  from '../components/VideoQueue'
//import VideoForm from './VideoForm'

class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {
    event.preventDefault()
    let href = event.target.getAttribute('href')
    if(href){
      this.props.mountVideo(href)
    } else if(event.target.name === 'queue') {
      console.log("queue")
    } else if(event.target.name === 'favorite'){
        console.log("favorite")
    } else {
      console.log("queue-remove")
    }
  }

  render() {
    return(
      <div>
        <h1>Videos</h1>
        {this.props.videos.map((video) =>
          <div onClick={this.handleClick} >
            <VideoCard video={video} />
          </div>
        )}
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

export default connect(mapStateToProps, { getVideos, mountVideo })(Videos)
