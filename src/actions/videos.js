//


// ** async actions
const getVideos = () => {
  dispatch => {
    fetch('http://localhost:3001/api/videos')
    .then(res => res.json())
    .then(videos => dispatch(setVideos)) // may need to remove
    .catch(err => console.log(err))
  }
}
