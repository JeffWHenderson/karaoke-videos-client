// ** action Creators
const setVideos = (videos) => {
  return (
    {
      type: "GET_VIDEOS_SUCCESS",
      videos
    }
  )
}

// const updateFavorite = (videoId) => {
//   return {
//     type: "UPDATE_FAVORITE_SUCCESS",
//     videoId
//   }
// }

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
    fetch('http://localhost:3001/api/videos')
    .then(res => res.json())
    .then(videos => dispatch(setVideos(videos)))
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
      dispatch(addVideo(video)) // probably can do this a little bit better
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
    //  .then(() => dispatch(updateFavorite(videoid)))
        // should go back to the dispatch get videos.. just playing with a different pattern here.
    .then(() => dispatch(getVideos())) // there is a more creative way to do this
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
    .then(() => dispatch(getVideos())) // there is a more creative way to do this
    .catch(error => console.log("error"))
  }
}
// ====================================================================
// const incrementPlayCount = (nextPlayCount) =>  {
//   return {
//    type: "ADD_TO_PLAY_COUNT",
//    nextPlayCount // this takes the new number for play count
//  }
// }

// THIS ISN'T DOING ANYTHING AT THE MOMENT I CAN PROBABLY GET RID OF IT
// =====================================================================
export const postVideoPlayCount = (playCount, videoId) => {
  let nextPlayCount = parseInt(playCount, 10) + 1
  return dispatch => {
    return fetch(`http://localhost:3001/api/videos/${videoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({video: {play_count: nextPlayCount}})
      })
      .then(() => dispatch(getVideos())) //incrementPlayCount(nextPlayCount)
      .catch(error => console.log("error"))
  }
}
