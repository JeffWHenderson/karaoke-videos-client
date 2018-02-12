import React from 'react'
import { connect } from 'react-redux'
import { getVideos } from '../actions/videos'
import VideoCard from '../components/VideoCard'
import { mountVideo } from '../actions/videoPlayer'
//import VideoForm from './VideoForm'

class Videos extends React.Component {

  componentDidMount() {
    this.props.getVideos()
  }

  handleClick = (event) => {
    event.preventDefault()
    let href = event.target.getAttribute('href')
    console.log(this.props.mountVideo(href))
    this.setState({
      videoPlayer: href
    })

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
