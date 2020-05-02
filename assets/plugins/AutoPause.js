// class AutoPause {
//   run(player) {
//     const observer = new IntersectionObserver(this.handlerIntersection, {
//       threshold: 0.25
//     })

//     observer.observe(player.media)
//   }

//   handlerIntersection(entries) {
//     const entry = entries[0]
//   }
// }

function AutoPause() {
  this.threshold = 0.25
  this.handlerIntersection = this.handlerIntersection.bind(this)
}

AutoPause.prototype.run = function(player) {
  this.player = player
  console.log(this.player)
  const observer = new IntersectionObserver(this.handlerIntersection, {
    threshold: this.threshold
  })

  observer.observe(this.player.media)
}

AutoPause.prototype.handlerIntersection = function(entries) {
  const entry = entries[0]
  console.log(entry)

  const isVisible = entry.intersectionRatio >= this.threshold

  if(isVisible) {
    this.player.play()
  } else {
    this.player.pause()
  }
}

export default AutoPause