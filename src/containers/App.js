import React from 'react';
import '../App.css'
import { Link, Route, Switch } from 'react-router-dom'

import Videos from './Videos'
import VideoForm from './VideoForm'
import VideoPlayer from './VideoPlayer'
import VideoQueue from './VideoQueue'



const App = () => (
      <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/videos">All Videos</Link>
        <Link to="/videos/new">Create Video</Link>
        </nav>
        <div className="App">
            <Route path="/" component={VideoPlayer} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/new" component={VideoForm} />
        </div>
      </div>
)

export default App
