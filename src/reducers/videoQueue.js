const videoQueue = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":

      return [...videoQueue, action.video]
    default:
      return state
  }
}
export default videoQueue
