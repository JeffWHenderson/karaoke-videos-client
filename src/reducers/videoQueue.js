const videoQueue = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":
      return [...videoQueue, action.video]
    case "REMOVE_QUEUE_SUCCESS":
      return [...videoQueue]
    default:
      return state
  }
}
export default videoQueue
