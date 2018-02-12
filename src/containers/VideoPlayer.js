import React from 'react'
import { connect } from 'react-redux'
    import { mountVideo } from '../actions/videoPlayer'
import NowPlaying from '../components/VideoPlayer'

class VideoPlayer extends React.Component {

  componentDidMount() {
    this.props.mountVideo
  }

  render() {
    return (
      <div className="video-player">
        < NowPlaying video={this.props.video} />
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return({
//     videos: state.videos
//   })
// }
//
// export default connect(mapStateToProps, { getVideos })(Videos)
export default VideoPlayer
