import React from 'react'

const NowPlaying = (video_object) => {
  const src = `src="https://www.youtube.com/embed/${video_object.video}"`

  return (
    <div>
      <h1 style={{color: 'white'}}> {src}</h1>
      <div className="video-player">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2SDcqTNKf-o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  )
}
export default NowPlaying
