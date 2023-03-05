
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let groundObject;
let leftsideObject;
let rightsideObject;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2 
	}


	ball = Matter.Bodies.circle(250,200,40,ball_options);
	World.add(world, ball);
	
	groundObject = new Ground(400, 700, 800, 50);
	leftsideObject = new Ground(500, 600, 20, 200);
	rightsideObject = new Ground(700, 600, 20, 200);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 40);

  function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: +85, y: -85});
	}
}

  drawSprites();
  groundObject.display()
  leftsideObject.display()
  rightsideObject.display()
  
}



