import React from 'react'
import VideoCard from '../components/VideoCard'

const Videos = (props) => (
  <div>
    <h1>Videos Component</h1>
    {props.videos.map((video) => <VideoCard video={video} /> )}
  </div>
)

export default Videos
