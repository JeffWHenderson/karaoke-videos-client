const videoQueue = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_QUEUE_SUCCESS":
      return [...state, action.video]
    case "REMOVE_QUEUE_SUCCESS":
      return state.filter(video => video.title !== action.video.title) 
    default:
      return state
  }
}
export default videoQueue
