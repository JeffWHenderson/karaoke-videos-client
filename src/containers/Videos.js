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
    // this.props.dispatch
    //
    // export const addVideoToQueue = (video) => {
    //   return (
    //     type: "ADD_TO_QUEUE_SUCCESS",
    //     video
    //   )
    // }
  }

  handleClick = (event) => {
    event.preventDefault()
    let href = event.target.getAttribute('href')
    if(href){
      this.props.mountVideo(href)
    } else {
      console.log(event.target.parentNode)
    }
  }
        //this will work by making an array of queue and sending those props to videoQueue.
  render() {
    return(
      <div>
        <h1>Videos</h1>
        {this.props.videos.map((video) =>
          <div onClick={this.handleClick} >
            <VideoCard video={video} />
          </div>
        )}
        <div className="video-queue">
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
