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
    } else {
      console.log(event.target.parentNode)
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
        <VideoQueue />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps, { getVideos, mountVideo })(Videos)
