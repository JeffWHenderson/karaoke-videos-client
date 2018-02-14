const videoQueue = (state = [{title: 'test', artist: 'tester', youtube_url: "12=3"}], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":
      return action.videos
    default:
      return state
  }
}
export default videoQueue
