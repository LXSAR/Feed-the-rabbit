var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,leafImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(220);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  spawnApples();
  spawnLeaves();
  drawSprites();
}

function spawnApples(){
  
  if(frameCount % 80 === 0){
    apple = createSprite(180,30,10,10)
    apple.velocityY = 4
    apple.addImage(appleImg)
    apple.scale = 0.09
    apple.x = Math.round(random(25,600))
    apple.lifetime = 200
 }

}

function spawnLeaves(){

  if(frameCount % 80 === 0){
    leaves = createSprite(180,30,10,10)
    leaves.velocityY = 4
    leaves.addImage(leafImg)
    leaves.scale = 0.09
    leaves.x = Math.round(random(25,500))
    leaves.lifetime = 200
 }

}  

