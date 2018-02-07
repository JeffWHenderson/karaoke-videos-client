import React from 'react';
import '../App.css'
import Videos from './Videos'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/videos')
    .then(res => res.json())
    .then(videos => this.setState({ videos }))
  }

  render() {
    //console.log(this.state) // test test test
    return(
      <div className="App">
        <Videos videos={this.state.videos} />
      </div>
    )
  }
}

export default App
