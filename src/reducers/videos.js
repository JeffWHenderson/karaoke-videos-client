const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    default:
      return state
  }
}
export default videosReducer
