import React from 'react';
import '../App.css'
import Videos from './Videos'

const videos = [
  {
    title: "hello",
    artist: "adele",

  },
  {
    title: "goodbye",
    artist: "beatles",

  }
]

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Videos videos={videos} />
      </div>
    )
  }
}

export default App
