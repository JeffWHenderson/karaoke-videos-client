import React from 'react'

const VideoQueue = videos => (
  <div target="_blank" /*href={videos.video.youtube_url}*/ className="video-queue-card" key={videos.video.id} >
    <h4>{videos.video.title}</h4>
    <p>artist: {videos.video.artist}</p>
    <button name="queue-remove">Remove</button>
    <button href={videos.video.youtube_url} >play</button>
  </div>
  )

export default VideoQueue
