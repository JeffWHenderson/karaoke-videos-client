import React from 'react'
import VideoCard from '../components/VideoCard'

const Videos = (props) => (
  <div>
    <h1>Videos Component</h1>
    {props.videos.map((video) => <VideoCard video={video} /> )}


      <iframe width="560" height="315" src="https://www.youtube.com/embed/WmzH0aKzifk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  </div>
)

export default Videos
