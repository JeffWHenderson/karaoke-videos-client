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

const updateFavorite = (video) => {
  return {
    type: 'UPDATE_FAVORITE_SUCCESS',
    video
  }
}

export const queueVideo = (video) => {
  return {
    type: "ADD_TO_QUEUE_SUCCESS",
    video
  }
}

export const unqueueVideo = () => {
  return {
    type: "REMOVE_QUEUE_SUCCESS",
            // refactor here when I add multiple videos to the queue
  }
}

// ** async actions
export const getVideos = () => {
  return dispatch => {
    fetch('http://localhost:3001/api/videos')
    .then(res => res.json())
    .then(videos => dispatch(setVideos(videos))) // may need to remove
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
    // .then(res => res.json())
    // .then(video => {
    //   dispatch(updateFavorite(video))
    // })
    .catch(error => console.log("error"))
  }
}
