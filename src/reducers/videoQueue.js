const videoQueue = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":
      return action.videos
    default:
      return state
  }
}
export default videoQueue
