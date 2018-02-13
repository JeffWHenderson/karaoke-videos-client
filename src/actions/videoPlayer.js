export const mountVideo = (videoUrl = "QWoOAibRuvs") => {
  const videoIdentifier = videoUrl.substr(videoUrl.indexOf("=") + 1);
  return(
    {
      type: "MOUNT_VIDEO_SUCCESS",
      videoIdentifier
    }
  )
}
