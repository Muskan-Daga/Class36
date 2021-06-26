class Player{
    constructor(){
    }

    getCount(){
        var PlayerCountref=database.ref("PlayerCount");
        PlayerCountref.on("value" , function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    update(name){
        var PlayerIndex="Player"+playerCount;
        database.ref(PlayerIndex).set({
            name : name
        })
    }
}