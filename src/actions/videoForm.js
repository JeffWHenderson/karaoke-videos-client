// ** action Creators **
export const updateVideoFormData = (videoFormData) => {
  return {
    type: 'UPDATED_DATA',
    videoFormData
  }
}

export const resetVideoForm = () => {
  return {
    type: 'RESET_VIDEO_FORM'
  }
}
