var bg,balloon,balloonImg;
var database


function preload(){
bg=loadImage("HA1.png")
balloonImg=loadAnimation("HA2.png","HA3.png","HA4.png")

}

function setup() {
  database=firebase.database()
  createCanvas(500,500);
  balloon=createSprite(400, 200, 50, 50);
  balloon.addAnimation("balloon",balloonImg)
  balloon.scale=0.4

}

function draw() {
  background(bg);  
  if(keyDown( LEFT_ARROW)){
balloon.x = balloon.x-10
  }
  else if(keyDown( RIGHT_ARROW)){
    balloon.x = balloon.x+10
      }
    else if(keyDown( UP_ARROW)){
        balloon.y = balloon.y-10

          }
       else if(keyDown( DOWN_ARROW)){
            balloon.y = balloon.y+10
            
              }

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x+x,
    'y': height.y+y
  })
}

function readHeight (data){
  height=data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database")
}




  drawSprites();
}