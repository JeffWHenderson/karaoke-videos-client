import React from 'react';
import '../styles/App.css'
import { Link, Route } from 'react-router-dom'

import Videos from '../containers/Videos'
import VideoForm from '../containers/VideoForm'
import VideoPlayer from '../containers/VideoPlayer'
import Favorites from '../containers/Favorites'

    import { BrowserRouter } from 'react-router-dom'
const App = () => (
  <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/videos">All Videos</Link><br />
          <Link to="/videos/new">Create Video</Link>
          <Link to="/videos/favorites">Create Video</Link>
        </nav>
        <div className="App">
            <Route path="/" component={VideoPlayer} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/new" component={VideoForm} />
            <Route exact path="/videos/favorites" component={Favorites} />
        </div>
      </div>
    </BrowserRouter>
)

export default App
