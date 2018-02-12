import React from 'react'

const NowPlaying = ({video}) => (
  <div className="video-player">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SDcqTNKf-o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    console.log(video)
  </div>
)

export default NowPlaying
