import React from 'react'

const NowPlaying = (video_object) => {
  const src = `src="https://www.youtube.com/embed/${video_object.video}"`

  return (

    <iframe
      src="https://www.youtube.com/embed/2SDcqTNKf-o"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  )
}
export default NowPlaying
