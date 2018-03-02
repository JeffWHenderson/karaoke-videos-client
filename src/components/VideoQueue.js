import React from 'react'

const VideoQueue = ({video}) => {
  return (
    <div target="_blank" /*href={videos.video.youtube_url}*/ className="video-queue-card" key={video.id}  >
      <h4>{video.title}</h4>
      <p>artist: {video.artist}</p>
      <button name="queue-remove" data-title={video.title} data-artist={video.artist} data-youtube_url={video.youtube_url}>Remove</button>
      <button
        name="play"
        data-videoid={video.videoid}
        data-playcount={video.playcount}
        href={video.youtube_url} >
        play
      </button>
    </div>
  )
}

export default VideoQueue
