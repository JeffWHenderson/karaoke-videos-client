const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return [...state, action.video] //state.concat(action.video)
    case 'UPDATE_FAVORITE_SUCCESS':
      return state.concat(action.video)
    case "ADD_TO_PLAY_COUNT":
      debugger
      return [state]
    default:
      return state
  }
}
export default videosReducer
