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
