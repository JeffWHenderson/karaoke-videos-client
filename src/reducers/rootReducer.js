import { combineReducers } from 'redux';

import videos from './videos'
import videoFormData from './videoFormData'
import videoPlayer from './videoPlayer'
import videoQueue from './videoQueue'

const rootReducer = combineReducers({
  videos,
  videoFormData,
  videoPlayer,
  videoQueue
})

export default rootReducer
