import React from 'react'

const VideoCard = ({ video }) => (
    <a target="_blank" href={video.youtube_url} className="video-card" key={video.id} >
      <h3>{video.title}</h3>
      <p>artist: {video.artist}</p>
    </a>
)

export default VideoCard
