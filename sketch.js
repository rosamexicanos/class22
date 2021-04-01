const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var ground
var ball
function setup() { 
  createCanvas(400,400);
  engine = Engine.create();
  world = engine. world
  var obj_option = {
    isStatic: true
  }
  object = Bodies.rectangle(200,100,50,50,obj_option)
  World.add(world,object)
  var ground_option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_option)
  World.add(world,ground)
  var ball_option = {
restitution: 1.0
  }
  ball = Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)
  console.log(object)
  console.log(object.type)
  console.log(object.position)
}
function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  fill("red")
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}