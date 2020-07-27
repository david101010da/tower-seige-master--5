const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground,ground1,ground2;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var engine,world;
var bird;
var slingShot;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(100,400,2000,10);
  ground1 = new Ground(500,200,100,10);
  ground2 = new Ground(650,100,100,10);

  box = new Box(470,170,50,50);
  box1 = new Box(480,170,50,50);
  box2 = new Box(520,170,50,50);
  box3 = new Box(475,140,50,50);
  box4 = new Box(505,140,50,50);
  box5 = new Box(490,110,50,50);
  box6 = new Box(610,80,50,50);
  box7 = new Box(640,80,50,50);
  box8 = new Box(670,80,50,50);
  box9 = new Box(625,50,50,50);
  box10 = new Box(655,50,50,50);
  box11 = new Box(640,20,50,50);


  bird = new Bird(50,200,150,150);

  slingShot = new SlingShot(bird.polygon,{x:50,y:300});

}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display(); 
  ground1.display();
  ground2.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  bird.display();
  slingShot.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(bird.polygon, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingShot.fly();
  gameState = "launched";

}

function keyPressed(){
  if(keyCode === 32){
     gameState = "onSling";
     Matter.Body.setPosition(bird.polygon,{x:50,y:300});
     slingShot.attach(bird.polygon);

  }
};


