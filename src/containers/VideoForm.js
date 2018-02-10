import React from "react"
import { connect } from 'react-redux'
import { updateVideoFormData } from '../actions/videoForm'
import { createVideo } from '../actions/videos'

class VideoForm extends React.Component {

  handleOnChange = event => {
    const { name, value } = event.target
    const currentVideoFormData = {...this.props.videoFormData, [name]: value}
    this.props.updateVideoFormData(currentVideoFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createVideo(this.props.videoFormData)
  }

  render() {
    const { title, artist, img_url, youtube_url } = this.props.videoFormData

    return (
      <div>
      Add A Karaoke Video From Youtube
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="title" >title</label>
            <input type="text" onChange={this.handleOnChange} name="title" value={title} />
          <label htmlFor="artist" >Artist</label>
            <input type="text" onChange={this.handleOnChange} name="artist" value={artist} />
          <label htmlFor="youtube_url" >URL</label>
            <input type="text" onChange={this.handleOnChange} name="youtube_url" value={youtube_url} />
          <label htmlFor="img_url" >Image URL</label>
            <input type="text" onChange={this.handleOnChange} name="img_url" value={img_url} />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videoFormData: state.videoFormData
  }
}
export default connect(mapStateToProps, {
  updateVideoFormData,
  createVideo
})(VideoForm)
