import React from 'react'
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
  render() {
    return(
      <div>
        <h1>Videos Card Container</h1>
        {this.props.videos.map((video) => <VideoCard video={video} /> )}
        <VideoForm />

          <iframe width="560" height="315" src="https://www.youtube.com/embed/WmzH0aKzifk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      </div>
    )
  }
}



export default Videos
