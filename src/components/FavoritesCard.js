import React from 'react'

const FavoritesCard = ({ video }) => {
  debugger
  return(
    <div target="_blank" /*href={video.youtube_url}*/ className="video-card" key={video.id} >
      <h3>{video.title}</h3>
      <p>artist: {video.artist}</p>
      <button href={video.youtube_url} >play</button>
    </div>
  )
}
export default FavoritesCard
