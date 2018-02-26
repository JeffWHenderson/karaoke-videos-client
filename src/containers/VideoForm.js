import React from "react"
import { connect } from 'react-redux'

import { createVideo } from '../actions/videos'
import { updateVideoFormData } from '../actions/videoForm'


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
          <label htmlFor="title" >Title:  </label>
            <input type="text" onChange={this.handleOnChange} name="title" value={title} />
            <br />
          <label htmlFor="artist" >Artist: </label>
            <input type="text" onChange={this.handleOnChange} name="artist" value={artist} />
            <br />
          <label htmlFor="youtube_url" >URL:    </label>
            <input type="text" onChange={this.handleOnChange} name="youtube_url" value={youtube_url} />
            <br />
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
