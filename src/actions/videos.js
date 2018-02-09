// ** action Creators
const setVideos = (videos) => {
  return (
    {
      type: "GET_VIDEOS_SUCCESS",
      videos
    }
  )
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
      debugger
    })
    .catch(error => console.log(error))
  }
}
