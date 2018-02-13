import React from 'react';
import '../styles/App.css'
import { Link, Route } from 'react-router-dom'

import Videos from './Videos'
import VideoForm from './VideoForm'
import VideoPlayer from './VideoPlayer'

    import { BrowserRouter } from 'react-router-dom'
const App = () => (
  <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/videos">All Videos</Link><br />
          <Link to="/videos/new">Create Video</Link>
        </nav>
        <div className="App">
            <Route path="/" component={VideoPlayer} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/new" component={VideoForm} />
        </div>
      </div>
    </BrowserRouter>
)

export default App
