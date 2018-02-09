import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import videos from './reducers/videos'
import videoFormData from './reducers/videoFormData'

const reducers = combineReducers({
  videos,
  videoFormData
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

// let videos = videosReducer(undefined, {type: "@@INIT"})

// var store = {
//   videos: [{...}],
//   videoFormData: [
//     title: '',
//     artist: '',
//     youtube_url: '',
//     img_url: ''
//   ],
//   currentVideos: [...]
//   }
// }
