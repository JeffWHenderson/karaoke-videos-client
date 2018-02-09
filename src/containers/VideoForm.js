import React from "react"
import { connect } from 'react-redux'
import { updateVideoFormData } from '../actions/videoForm'

class VideoForm extends React.Component {
  handleOnChange = (e) => {
    const {name, value } = e.target
    const currentVideoFormData = Object.assign({}, this.props.videoFromData, {
      [name]: value
    })
    this.props.updateVideoFormData(currentVideoFormData)
  }

  render() {
    const { name, price, img_url, youtube_url } = this.props.videoFormData

    return (
      <div>
      Add A Karaoke Video From Youtube
        <form>
          <input type="text" name="title" value="title" onChange={this.handleOnChange} />
          <input type="text" name="artist" value="artist" onChange={this.handleOnChange} />
          <input type="text" name="youtube_url" value="youtube_url" onChange={this.handleOnChange} />
          <input type="text" name="img_url" value="img_url" onChange={this.handleOnChange} />
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
export default connect(mapStateToProps, { updateVideoFormData })(VideoForm)
