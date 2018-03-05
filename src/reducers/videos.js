const videosReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'CREATE_VIDEO_SUCCESS':
      return [...state, action.video] //state.concat(action.video)
    case 'UPDATE_FAVORITE_SUCCESS':
      let index = state.findIndex((video, index) => {return (video.id === parseInt(action.videoId))})
      let newState = state
      newState[index].favorite = true
      return newState
  // case "ADD_TO_PLAY_COUNT": // THIS IS NOT BEING USED EITHER
  //   debugger
  //   return [...state, {video: {title: "test", artist: "test", youtube_url:"test=t", favorite:true, play_count:0}}]
    default:
      return state
  }
}
export default videosReducer
