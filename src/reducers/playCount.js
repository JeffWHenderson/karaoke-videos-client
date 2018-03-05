const initialState = {
  playCount: 0
}

const playCount = (state = initialState, action) => {
    switch(action.type) {
      // case 'ADD_TO_PLAY_COUNT':
      //   debugger
      //   return action.videoFormData
      default:
        return state
    }
}
export default playCount
