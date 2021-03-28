const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var bg1, bg2, bg3, bgImg;

function preload(){
  bgImg = loadImage("bg.png");
  bgImg.scale = 0.5;
}

function setup() {
  createCanvas(932, 702);
  engine = Engine.create();
  world = engine.world;

  back(bg1);
  back(bg2);
  back(bg3);  
}

function draw() {
  background(0);
  Engine.update(engine);

  drawSprites();
}

function back(bg){
  bg = createSprite(624, 351, 0, 0);
  bg.addImage("bg.png", bgImg);
  bg.scale = 0.65;
  bg.velocityX = -3;
}