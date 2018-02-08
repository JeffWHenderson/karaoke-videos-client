import React from 'react'

const VideoCard = ({ video }) => (
  <div className="video-card" key={video.id}>
    <h3>{video.title}</h3>
    <p>artist: {video.artist}</p>
  </div>
)

export default VideoCard
