const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return [...state, action.video] //state.concat(action.video)
    case "ADD_TO_PLAY_COUNT":
     return state.map(video => video.id === action.payload.id ? action.payload : video)
    default:
      return state
  }
}
export default videosReducer
