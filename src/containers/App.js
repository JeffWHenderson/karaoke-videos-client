import React from 'react';
import '../App.css'
import Videos from './Videos'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     videos: []
  //   }
  // }

  // componentDidMount() {
  //   this.props.getVideos()
  // }

  render() {
    //console.log(this.state) // test test test
    return(
      <div className="App">
        <Videos />
      </div>
    )
  }
}

export default App
