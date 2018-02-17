import React from 'react';
import '../styles/App.css'
import { Link, Route } from 'react-router-dom'

import Videos from '../containers/Videos'
import VideoForm from '../containers/VideoForm'
import VideoPlayer from '../containers/VideoPlayer'
import Welcome from './Welcome'

    import { BrowserRouter } from 'react-router-dom'
const App = () => (
  <BrowserRouter>
      <div>
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/videos">All Videos</Link>
          <Link className="nav-link" to="/videos/new">Add Video</Link>
        </nav>
        <div className="App">

            <Route path="/" component={VideoPlayer} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/new" component={VideoForm} />
        </div>
      </div>
    </BrowserRouter>
)

export default App
