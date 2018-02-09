export default (state = {
  title: '',
  artist: '',
  img_url: '',
  youtube_url: ''
}, action) => {
    switch(action.type) {
      case 'UPDATED_DATA':
        return action.videoFormData
      default:
        return state
    }
}
