const initialVideo = {
  youtube_url: "https://www.youtube.com/embed/2SDcqTNKf-o"
}

const videoPlayer = (state = {}, action) => {
  switch(action.type) {
    case 'MOUNT_VIDEO_SUCCESS===============':
      console.log(action)
    case 'CREATE_VIDEO_SUCCESS':
      return state.concat(action.video)
    default:
      console.log("action is " + action)
      console.log("state is " + state)
      return state
  }
}
export default videoPlayer
