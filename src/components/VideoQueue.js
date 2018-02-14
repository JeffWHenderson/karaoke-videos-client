import React from 'react'

const VideoQueue = videos => (
  <div target="_blank" /*href={videos.video.youtube_url}*/ className="video-queue-card" key={videos.video.id} >
    <h3>{videos.video.title}</h3>
    <p>artist: {videos.video.artist}</p>
    <button name="queue-remove">Remove</button>
    <button href={videos.video.youtube_url} >play</button>
  </div>
  )

export default VideoQueue
