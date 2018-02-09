import React from 'react'
import { connect } from 'react-redux'

import VideoCard from '../components/VideoCard'
import VideoForm from './VideoForm'

class Videos extends React.Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //
  //   }
  // }
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VIDEOS_SUCCESS',
      videos: [ {title: "hello", artist: "adele"}, { title: "p", artist: "u"}, { title: "n", artist: "k"}]
    })
  }

  render() {
    return(
      <div>
        <h1>Videos Card Container</h1>
        {this.props.videos.map((video) => <VideoCard video={video} /> )}
        <VideoForm />
        <div className="current-video" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WmzH0aKzifk" frameborder="2" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps)(Videos)
