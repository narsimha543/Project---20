var movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  //console.log(fixedRect.x);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //console.log(movingRect.x);
  

  
  gameObject1 = createSprite(1000, 400, 90, 150);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(1000, 700, 90, 150);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(1000, 100, 90, 150);
  gameObject3.shapeColor = "green";


}


function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x -fixedRect.x)

  if(isTouching(movingRect,gameObject1)){

    movingRect.shapeColor = "blue"
    gameObject1.shapeColor = "blue";
  }
    else {
    
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";

  }
  
 
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

    return true;
  }
  else {

    return false;

  }

}