const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return [...state, action.video] //state.concat(action.video)
    case "ADD_TO_PLAY_COUNT":
      let nv = state.filter((video, index) => (video.id === parseInt(action.payload.id)))
      let indexOfVideo = state.indexOf(nv[0])
      let newState = [...state]
      newState.indexOf(nv[0])
      newState[indexOfVideo].play_count = action.payload.nextPlayCount
      return newState
    default:
      return state
  }
}
export default videosReducer
