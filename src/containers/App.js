import React from 'react';
import '../App.css'
import { Link, Route } from 'react-router-dom'

import Videos from './Videos'
import VideoForm from './VideoForm'
import VideoPlayer from './VideoPlayer'
import VideoQueue from './VideoQueue'



class App extends React.Component {

  render() {
    return(
      <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/videos">All Videos</Link>
        <Link to="/videos/new">Create Video</Link>
        </nav>
        <div className="App">
          <VideoPlayer />
          <VideoForm />
          <Videos />
          <VideoQueue />
        </div>
      </div>
    )
  }
}

export default App
