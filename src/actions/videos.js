// this is for the play count feature.
const incrementPlayCount = (nextPlayCount) => {
  type: "ADD_TO_PLAY_COUNT",
  nextPlayCount // this takes the new number for play count
}

const postVideoPlayCount = (nextPlayCount) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/videos/19`, { // don't forget to make this dynamic and take out the hard coded 19
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ video: {favorite: false} }) //{play_count: nextPlayCount}
    })
    .then(res => {
      res.json()
    })
    .then(video => {
      dispatch(incrementPlayCount(nextPlayCount))
      //dispatch(getVideos)  // i may need this so I can rerender if Redux doesn't do that for me
    })
    .catch(error => console.log(error))
  }
}
     export default postVideoPlayCount

// ** action Creators
const setVideos = (videos) => {
  return (
    {
      type: "GET_VIDEOS_SUCCESS",
      videos
    }
  )
}

const addVideo = (video) => {
  return {
    type: 'CREATE_VIDEO_SUCCESS',
    video
  }
}

export const queueVideo = (video) => {
  return {
    type: "ADD_TO_QUEUE_SUCCESS",
    video
  }
}

export const unqueueVideo = (video) => {
  return {
    type: "REMOVE_QUEUE_SUCCESS",
    video
  }
}

// ** async actions
export const getVideos = () => {
  return dispatch => {
    fetch('http://localhost:3001/api/videos/19') // take out the /19 (this is just for extending a feature as a unit.)
    .then(res => res.json())
    .then(videos => dispatch(setVideos([videos]))) // take out the bracets around videos
    .catch(err => console.log(err))
  }
}

export const createVideo = video => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({video: video })
    })
    .then(res => res.json())
    .then(video => {
      dispatch(addVideo(video))
      //dispatch(getVideos)
    })
    .catch(error => console.log(error))
  }
}

export const favoriteVideo = videoid => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/videos/${videoid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({video: {favorite: true}})
    })
    .then(() => dispatch(getVideos()))
    .catch(error => console.log("error"))
  }
}

export const unfavoriteVideo = videoid => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/videos/${videoid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({video: {favorite: false}})
    })
    .then(() => dispatch(getVideos()))
    .catch(error => console.log("error"))
  }
}
