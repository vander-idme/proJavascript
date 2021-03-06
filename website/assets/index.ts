import MediaPlayer from '@vanderidme/platzimediaplayer'
import AutoPlay from '@vanderidme/platzimediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@vanderidme/platzimediaplayer/lib/plugins/AutoPause'
import Ads from '@vanderidme/platzimediaplayer/lib/plugins/Ads'

const video = document.querySelector('video')
const buttonPlay: HTMLElement = document.querySelector('#play')
const buttonMute: HTMLElement = document.querySelector('#mute')

const player = new MediaPlayer({
   element: video,
   plugins: [
      new AutoPlay(),
      new AutoPause(),
      new Ads()
   ]
})
buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()

// if('serviceWorker' in navigator){
//    navigator.serviceWorker.register('/sw.js').catch(error =>{
//       console.log(error.message)
//    })
// }