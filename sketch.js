const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;



var girl,girlImg,bg;
var snow=[];

function preload(){
  bg=loadImage("snow1.jpg");
  girlImg=loadAnimation("fairy.png");
}


function setup() {
  createCanvas(800,400);
  
  engine= Engine.create();
  world=engine.world;

  ground=new Ground(400,400,800,10);
  girl=createSprite(400, 200, 50, 50);
  girl.addAnimation("girl",girlImg);
  girl.scale=0.1;
 // snow=new Snow(300);
}

function draw() {
  Engine.update(engine);
  background(bg); 
  if(keyDown("LEFT_ARROW")){
	  girl.x=girl.x-5;
	  
  }
  console.log(girl.x);
  if(keyDown("RIGHT_ARROW")){
  	girl.x=girl.x+5;
	
  }
  snowfall();
  //snow.display();
  drawSprites();
}
function snowfall(){
if(frameCount%30===0){
 
  snow.push(new Snow(random(50,750)));
  
  console.log(snow);
}
for(var i=0;i<snow.length;i++){
  snow[i].display();
}
}
