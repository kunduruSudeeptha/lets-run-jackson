
var path,path_moving;
var runner,runner_moving;
var wall

function preload(){
  path=loadImage("path.png");
  runner_moving=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(350,600);
  
  wall=createSprite(1,2,670,5);
  wall.shapeColor="white";

  path_moving=createSprite(180,200);
  path_moving.addImage(path);
  path_moving.velocityY=4;
  path_moving.scale=1.2;

  runner=createSprite(300,395,20,50);
  runner.scale=0.05;
  runner.addAnimation("moving",runner_moving);

  runner.velocityY=-4;

  createEdgeSprites()
}

function draw() {
  background(path);
   
  if (runner.isTouching(wall))
  {
    runner.x=300;
    runner.y=550;
    path_moving.y=3
  }

  if (path.y>600){
    path.y=path.height/2;
  }

  drawSprites();
}
