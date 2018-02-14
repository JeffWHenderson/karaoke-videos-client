import React from 'react'
import FavoritesCard from '../components/FavoritesCard'

class Favorites extends React.Component {

  componentDidMount() {

    const x = fetch('http://localhost:3001/api/videos')
      .then(res => res.json())
    // .then(videos => dispatch(setVideos(videos))) // may need to remove
    // .catch(err => console.log(err))
    debugger
  }
  render() {
    return  (
      <div>
        <FavoritesCard />
      </div>
    )
  }
}

export default Favorites
