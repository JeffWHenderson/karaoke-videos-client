import React from 'react'
import FavoritesCard from '../components/FavoritesCard'

class Favorites extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      FavoriteVideos: []
    }
  }

  componentDidMount() {
      fetch('http://localhost:3001/api/videos')
      .then(res => res.json())
      .then(data => {
        this.setState({
          FavoriteVideos: data.filter(video => video.favorite === true)
        })
      })
  }

  render() {
    return  (
        <div>
          {this.state.FavoriteVideos.map(video =>
            <div>
              <FavoritesCard video={video}   />
            </div>
          )}
        </div>

    )
  }
}

export default Favorites
