
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup 
var FoodGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running); 
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
obstacleGroup=new Group();
FoodGroup= new Group();
  }


function draw() {
background(220);
  
if(ground.x<0){
  ground.x=ground.width/2;
}
  
if(keyDown("space")){
  monkey.velocityY=-4;
}  
  monkey.velocityY=monkey.velocityY+0.8;
      monkey.collide(ground);
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" +score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time" + survivalTime, 100,50);
  

  spawnFood();
  spawnObstacle();
 drawSprites(); 
}

function spawnFood(){
  if(frameCount %80 === 0){
    banana=createSprite(200,200,10,10);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.addImage(bananaImage);
    banana.velocityX=-2;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}
function spawnObstacle(){
if(frameCount %300 === 0){
   var obstacle=createSprite(200,330,10,40);
   obstacle.velocityX = -3
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
  obstacle.addImage(obstacleImage);
   
    obstacleGroup.add(obstacle);
}
}