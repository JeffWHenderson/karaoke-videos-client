import React from "react"
import { connect } from 'react-redux'

class VideoForm extends React.Component {
  render() {
    const { name, price, img_url, youtube_url } = this.props.videoFormData

    return (
      <div>
      Add A Karaoke Video From Youtube
        <form>
          <input type="text" name="title" value="title" />
          <input type="text" name="artist" value="artist" />
          <input type="text" name="youtube_url" value="youtube_url" />
          <input type="text" name="img_url" value="img_url" />
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
export default connect(mapStateToProps)(VideoForm)
