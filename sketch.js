var  database;
var form,game,player;
var gameState=0;
var playerCount;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
   
}
