import React from 'react'
import { connect } from 'react-redux'
import { getVideos } from '../actions/videos'
import VideoCard from '../components/VideoCard'
import VideoForm from './VideoForm'

class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  render() {
    return(
      <div>
        <h1>Videos</h1>
        {this.props.videos.map((video) => <VideoCard video={video} /> )}



      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps, { getVideos })(Videos)
