import { combineReducers } from 'redux';

import videos from './videos'
import videoFormData from './videoFormData'
import videoPlayer from './videoPlayer'
import videoQueue from './videoQueue'
import playCount from './playCount'

const rootReducer = combineReducers({
  videos,
  videoFormData,
  videoPlayer,
  videoQueue,
  playCount
})

export default rootReducer
