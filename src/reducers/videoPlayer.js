const initialVideo = {
  videoIdentifier: "2SDcqTNKf-o"
}

const videoPlayer = (state = initialVideo, action) => {
  switch(action.type) {
    case 'MOUNT_VIDEO_SUCCESS':
      return {videoIdentifier: action.videoIdentifier}
    default:
      return state
  }
}
export default videoPlayer
