import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return 'hello world'
    default: return state
  }
}

const reducers = combineReducers({
  videos: videosReducer
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
