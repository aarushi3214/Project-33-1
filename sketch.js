const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var snow;
var engine;

function preload(){
  bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bg);  
  drawSprites();

  if(frameCount %40 === 0){
      snow.push(new Snow(random(100,600),10,10));
  }

  for (var h=0; h<snow.length; h++){
    snow[h].display();
  }
}