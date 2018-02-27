const initialState = {
  title: '',
  artist: '',
  img_url: '',
  youtube_url: ''
}

const videoFormData = (state = initialState, action) => {
    switch(action.type) {
      case 'UPDATED_DATA':
        return action.videoFormData
      case "RESET_VIDEO_FORM":
        return state
      default:
        return state
    }
}
export default videoFormData
