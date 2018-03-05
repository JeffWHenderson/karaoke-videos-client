import React from 'react'
import YouTube from 'react-youtube'

const NowPlaying = (video_object) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <YouTube
      videoId={video_object.video}      // defaults -> null
      id={null}                         // defaults -> null
      className={null}                  // defaults -> null
      opts={opts}                       // defaults -> {}
      // onEnd={func}                   // defaults -> noop
    />
  )
}
export default NowPlaying
