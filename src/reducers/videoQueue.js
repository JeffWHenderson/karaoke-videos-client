const videoQueue = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":
      return [...state, action.video]
    case "REMOVE_QUEUE_SUCCESS":
      return [...videoQueue]  // refactor here when I add multiple videos to the video Queue
    default:
      return state
  }
}
export default videoQueue
