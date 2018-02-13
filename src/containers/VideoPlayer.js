import React from 'react'
import { connect } from 'react-redux'
    import { mountVideo } from '../actions/videoPlayer'
import NowPlaying from '../components/VideoPlayer'

export class VideoPlayer extends React.Component {

  componentDidMount() {
    this.props.mountVideo
  }

  render() {
    return (
      <div className="video-player">
        < NowPlaying video="eoaTHw5C3Yk" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({state})
}
//export default connect(mapStateToProps, { NowPlaying })(VideoPlayer)
export default VideoPlayer
