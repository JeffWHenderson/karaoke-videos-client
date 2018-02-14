import React from 'react'

const VideoQueue = videos => (
  <div target="_blank" /*href={videos.video.youtube_url}*/ className="video-Queue" key={videos.video.id} >
    <h3>{videos.video.title}</h3>
    <p>artist: {videos.video.artist}</p>
    <button name="queue">Queue</button>
    <button href={videos.video.youtube_url} >play</button>
    <button name="favorite">Favorite</button>
  </div>
  )



export default VideoQueue


// <div className="video-queue">
//   <h2>{videos.video.title}</h2>
//   <p>{videos.video.artist}</p>
//   <p>{videos.video.youtube_url}</p>
// </div>
