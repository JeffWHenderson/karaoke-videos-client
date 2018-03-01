const initialState = {
  play_count: 0
}

const playCount = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TO_PLAY_COUNT':
        return action.videoFormData
      case "RESET_VIDEO_FORM":
        return state
      default:
        return state
    }
}
export default playCount
