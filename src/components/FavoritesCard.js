import React from 'react'

const FavoritesCard = (video = {title: 'stub', artist: 'test', youtube_url: 'ww=wk'}) => {
// debugger
  return(
  <div>
    Favorites
    <p>{video.title}</p>
  </div>
)
}
export default FavoritesCard
