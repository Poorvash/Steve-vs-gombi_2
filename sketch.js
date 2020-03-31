const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var steve;
var steveFace;
var smallGombi;
var gomii;
//var bird2,bird3;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //GetBackgroundImg();
    steveFace=loadImage("Steve with gun.png");
    smallGombi=loadImage("gombi.png");
    gomii=loadImage("gombiR.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    steve= createSprite(displayWidth/2,displayHeight/2,70,70);
     steve.addImage(steveFace);
     steve.scale=0.15;
     

    
}

function draw(){
    background("blue");   
    //steve.x=mouseX;
    //steve.y=mouseY;
    if(keyDown("w")){
       steve.y=steve.y-5
    }
        if(keyDown("d")){
            steve.x=steve.x+5
        }
        if(keyDown("s")){
          steve.y=steve.y+5
          }
        if(keyDown("a")){
          steve.x=steve.x-5
        }
    spawngombi();
    sPawnZombie();
    drawSprites();
}


function sPawnZombie(){
  if(frameCount%138==0){
     var gombi=createSprite(50,70);
       gombi.x=Math.round(random(50,displayWidth-50));
     //if(rand===1){
        gombi.velocityY=5
     //}else{
      // gombi.velocityX=-5
    // }
     gombi.addImage(smallGombi);
     gombi.scale=0.5;
   }

  
}

function spawngombi(){
  if(frameCount%138==0){
     var gombi=createSprite(displayWidth-50,70);
       gombi.y=Math.round(random(50,displayHeight-50));
     //if(rand===1){
       // gombi.velocityY=5
     //}else{
       gombi.velocityX=-5
    // }
     gombi.addImage(gomii);
     gombi.scale=0.2;
   }
  }
