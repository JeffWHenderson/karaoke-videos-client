const initialVideo = {
  youtube_url: "https://www.youtube.com/embed/2SDcqTNKf-o"
}

const videoPlayer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_PLAYER_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return state.concat(action.video)
    default:
      return state
  }
}
export default videoPlayer
