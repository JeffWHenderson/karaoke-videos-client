import React from 'react'

const FavoritesCard = ({ video }) => {
  return(
    <div target="_blank" /*href={video.youtube_url}*/ className="favorite-card" key={video.id} >
      <h3>{video.title}</h3>
      <p>artist: {video.artist}</p>
      <button name="queue" data-title={video.title} data-artist={video.artist} data-youtube_url={video.youtube_url}>Queue</button>
      <button href={video.youtube_url} >play</button>
      <button videoId={video.id} name="unfavorite">Unfavorite</button>
    </div>
  )
}
export default FavoritesCard
