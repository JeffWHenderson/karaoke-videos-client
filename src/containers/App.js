import React from 'react';
import '../App.css'
import Videos from './Videos'
import VideoForm from './VideoForm'
import VideoPlayer from './VideoPlayer'

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Videos />
        <VideoForm />
        <VideoPlayer />
      </div>
    )
  }
}

export default App
