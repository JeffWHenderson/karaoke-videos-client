import React from 'react'
import VideoCard from '../components/VideoCard'

const Videos = (props) => (
  <div>
    <h1>Videos Component</h1>
    {props.videos.map((video) =>
      <div className="video-card" key={video.id}>
        <h3>{video.title}</h3>
        <p>artist: {video.artist}</p>
      </div>
    )}
    <VideoCard />
  </div>
)

export default Videos
