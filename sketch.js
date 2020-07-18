
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var box, box2;
function setup() {
	createCanvas(550, 330);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Balls(100,220,11);
	ground= new Ground(300,311,600,44);
	Engine.run(engine); 
 var options ={
	isStatic: true
 }
	box = Bodies.rectangle(330,266, 11,44, options);	
	box2 = Bodies.rectangle(440,266, 11,44, options);
	World.add(world, box);
	World.add(world, box2);	
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites(); 
  ball.display();
  ground.display();
  fill("red");
  rect(box.position.x,box.position.y,11,44);
  rect(box2.position.x,box2.position.y,11,44);
 // rect(388,288,110,11)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:11,y:-11});
	}
}


