function AutoPlay(){}

AutoPlay.prototype.run = function(player){
   console.log(player)
   if(!player.muted){
      player.muted = true
   }
   player.play();
}
export default AutoPlay
