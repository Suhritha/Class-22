const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground,ball
var engine,world,object

function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world;
  var groundOptions={
  	isStatic: true 
  }
  ground= Bodies.rectangle(200,390,50,50,groundOptions)
  var ballOptions={
  	restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ground)
  World.add(world,ball)
  
 

}

function draw() {
  background("blue");

 Engine.update(engine)

  rectMode(CENTER)

  rect(ground.position.x,ground.position.y,100,100)
 
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}
