const raf = (global.requestAnimationFrames = callback => {
  setTimeout(callback, 0)
})

export default raf
