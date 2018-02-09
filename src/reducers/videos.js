const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return state.concat(action.video)
    default:
      return state
  }
}
export default videosReducer
