class Player { 
    constructor(player) {
        this.player = player; 
        this.x = player.x;
        this.y = player.y;
    }
    update(i,j){
        database.ref(this.player).set({
          x:this.x + i,
          y:this.y + j,
        });
    }
    getPlayerInfo(){
        var playerInfoRef = database.ref(this.player);
        playerInfoRef.on("value",(data)=>{
            PC = data.val();
            this.x = PC.x;
            this.y = PC.y;
        })
      }
    updateState(state) {
        gameState = state
        database.ref("/").update({
            gameState:state
        })
    }
}