function MediaPlayer(config){
   // console.log(config)
   this.media = config.element
   this.plugins = config.plugins || []

   this._initPlugins()
}
MediaPlayer.prototype._initPlugins = function() {
   // const media = this.media
   const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
         return this.media.muted
      },
      set muted(value) {
         this.media.muted = value
      }
   }

   this.plugins.forEach(plugin => {
      plugin.run(player)
   })
}

MediaPlayer.prototype.play = function() {
   this.media.play()
}

MediaPlayer.prototype.pause = function() {
   this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
   this.media.paused ?
      this.media.play()
      : this.media.pause()
}

MediaPlayer.prototype.mute = function() {
   this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
   this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
   this.media.muted?
      this.unmute()
      : this.mute()
}

export default MediaPlayer