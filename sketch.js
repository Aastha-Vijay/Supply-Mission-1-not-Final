
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, ball, basket1, basket2, basket3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,385,1200,10);
	ball = new paperBall(100,370,20);
	basket1 = new Basket(1150, 313, 15, 130, PI/6);
	basket2 = new Basket(1000, 313, 15, 130, PI/6);
	basket3 = new Basket(1075, 370, 130, 15, PI/6);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  ground.display();
  ball.display();
  basket1.display();
  basket2.display();
  basket3.display();
}



