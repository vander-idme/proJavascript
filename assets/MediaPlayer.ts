class MediaPlayer {
   media: HTMLMediaElement
   plugins: Array<any>

   constructor(config: { element: HTMLMediaElement; plugins: any[] }) {
      // console.log(config)
      this.media = config.element
      this.plugins = config.plugins || []
      this.initPlugins()
   }
   private initPlugins() {
      this.plugins.forEach(plugin => {
         plugin.run(this)
      })
   }
   play() {
      this.media.play()
   }
   pause() {
      this.media.pause()
   }
   togglePlay() {
      this.media.paused ?
         this.media.play()
         : this.media.pause()
   }
   mute() {
      this.media.muted = true
   }
   unmute() {
      this.media.muted = false
   }
   toggleMute() {
      this.media.muted ?
         this.unmute()
         : this.mute()
   }
}

export default MediaPlayer