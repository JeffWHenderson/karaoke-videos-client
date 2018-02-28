import React from 'react'
import { connect } from 'react-redux'

import { getVideos, queueVideo, unqueueVideo, favoriteVideo, unfavoriteVideo } from '../actions/videos'
import { mountVideo } from '../actions/videoPlayer'

// import FavoritesCard from '../components/FavoritesCard'
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
    if(href){  // this should refect if the play button is clicked preferably as a Switch Statement.
      this.props.mountVideo(href) // right here is where I can make the play Counter init
    } else {
        if(event.target.name === 'queue') {
            that.props.queueVideo(event.target.dataset)
        } else if(event.target.name === 'queue-remove'){
            that.props.unqueueVideo(event.target.dataset)
        } else if(event.target.name === 'Favorite'){
            that.props.favoriteVideo(event.target.dataset.videoid)
        } else if (event.target.name === 'Unfavorite'){
            that.props.unfavoriteVideo(event.target.dataset.videoid)
        } else {
          console.log("the event wasn't caught in -Videos.js- handleClick function")
        }
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
            {this.props.videos.map(video => (video.favorite === false) ?
              <div className="gibberish" onClick={this.handleClick} >
                <VideoCard video={video} />
              </div>
            :
              <div className="NONgibberish" onClick={this.handleClick} >
                <VideoCard video={video} />
              </div>
            )}
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

export default connect(mapStateToProps, { unfavoriteVideo, favoriteVideo, unqueueVideo, queueVideo, getVideos, mountVideo })(Videos)
