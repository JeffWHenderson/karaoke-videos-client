import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import videos from './reducers/videos'
import videoFormData from './reducers/videoFormData'
import videoPlayer from './reducers/videoPlayer'
import videoQueue from './reducers/videoQueue'

const reducers = combineReducers({
  videos,
  videoFormData,
  videoPlayer,
  videoQueue
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
