const initialState = {
  title: '',
  artist: '',
  img_url: '',
  youtube_url: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'UPDATED_DATA':
        return action.videoFormData
      case "RESET_VIDEO_FORM":
        return state
      default:
        return state
    }
}
