
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,350,20);
	ground = new Ground(600,height,800,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  drawSprites();
}