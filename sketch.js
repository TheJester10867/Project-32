const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var START = 0, CUTSCENE = 1, L1B = 2, CUTSCENE2 = 3, LEVEL1S = 4, LEVEL1 = 5;
var gameState = START;
var bg1, bg2, bg3, bgImg, sBGImg;
var playImg, play;
var e, e_idle;
var textBlock1, tBImg, textBlock2, textBlock3, textBlock4, textBlock5, textBlock6, tB2Img, textBlock7;
var parsletongue, cinzel;
var sat;
var boom;
var ninja, ninja_idle, ninja_run;
var ground;

function preload(){
  bgImg = loadImage("bg.png");
  bgImg.scale = 0.5;
  sBGImg = loadImage("Space/spaceBG.png");
  tBImg = loadImage("DialogueBox/fneh.png");
  tB2Img = loadImage("DialogueBox/bleh.png");
  
  playImg = loadImage("start.png");
  e_idle = loadAnimation("Earth/earth00.png", "Earth/earth01.png", "Earth/earth02.png", "Earth/earth03.png", 
  "Earth/earth04.png", "Earth/earth05.png", "Earth/earth06.png", "Earth/earth07.png", "Earth/earth08.png",
  "Earth/earth09.png", "Earth/earth10.png", "Earth/earth11.png", "Earth/earth12.png", "Earth/earth13.png",
  "Earth/earth14.png", "Earth/earth15.png", "Earth/earth16.png", "Earth/earth17.png", "Earth/earth18.png",
  "Earth/earth19.png", "Earth/earth20.png", "Earth/earth21.png", "Earth/earth22.png", "Earth/earth23.png",
  "Earth/earth24.png", "Earth/earth25.png", "Earth/earth26.png", "Earth/earth27.png", "Earth/earth28.png",
  "Earth/earth29.png", "Earth/earth30.png", "Earth/earth31.png", "Earth/earth32.png", "Earth/earth32.png",
  "Earth/earth33.png", "Earth/earth34.png", "Earth/earth35.png", "Earth/earth36.png", "Earth/earth37.png",
  "Earth/earth38.png", "Earth/earth39.png", "Earth/earth40.png", "Earth/earth41.png", "Earth/earth42.png",
  "Earth/earth43.png", "Earth/earth44.png", "Earth/earth45.png", "Earth/earth46.png", "Earth/earth47.png",
  "Earth/earth48.png", "Earth/earth49.png");
  ninja_idle = loadAnimation("Ninja/Idle/idle0.png", "Ninja/Idle/idle1.png", "Ninja/Idle/idle2.png", "Ninja/Idle/idle3.png",
  "Ninja/Idle/idle4.png", "Ninja/Idle/idle5.png", "Ninja/Idle/idle6.png", "Ninja/Idle/idle7.png", "Ninja/Idle/idle8.png",
  "Ninja/Idle/idle9.png");
  ninja_run = loadAnimation("Ninja/Run/run0.png", "Ninja/Run/run1.png", "Ninja/Run/run2.png", "Ninja/Run/run3.png", 
  "Ninja/Run/run4.png", "Ninja/Run/run5.png", "Ninja/Run/run6.png", "Ninja/Run/run7.png", "Ninja/Run/run8.png",
  "Ninja/Run/run9.png");
  parsletongue = loadFont("Fonts/PARSELTO.ttf");
  cinzel = loadFont("Fonts/cinzel.ttf");
}

function setup(){
  createCanvas(920, 702);
  engine = Engine.create();
  world = engine.world;

  sat = new Satellite(460, 752, 20, 20);
}

function draw(){
  if (gameState === START){
    background(sBGImg);
  } else if (gameState === CUTSCENE){
    background(0);
  } else if (gameState === L1B){
    background(0);
  } else if (gameState === CUTSCENE2){
    background(0);
  } else if (gameState === LEVEL1){
    background(0);
  }

  Engine.update(engine);

  sat.display();

  drawSprites();

  if (frameCount === 1 && gameState === START){
    textBlock1 = createSprite(460, 75);
    textBlock1.addImage("DialogueBox/fneh.png", tBImg);
  }
  if (frameCount === 2 && gameState === START){
    textBlock2 = createSprite(460, 196.5);
    textBlock2.addImage("DialogueBox/fneh.png", tBImg);
  }
  if (frameCount >= 3 && gameState === START){
    textFont(parsletongue);
    textSize(40);
    stroke(0);
    strokeWeight(2);
    text("Greetings, friend. We were counting on your arrival!...", 70, 90);
  }
  if (frameCount >= 4 && gameState === START){
    text("As you might have already heard, Earth is in peril...", 85, 211.5);
  }
  if (frameCount === 5 && gameState === START){
    textBlock3 = createSprite(460, 318);
    textBlock3.addImage("DialogueBox/fneh.png", tBImg);
  }
  if (frameCount >= 7 && gameState === START){
    text("Our planet has been the victim of an intergalactic invasion", 35, 333);
  }
  if (frameCount === 10 && gameState === START){
    textBlock4 = createSprite(460, 439.5);
    textBlock4.addImage("DialogueBox/fneh.png", tBImg);
  }
  if (frameCount >= 12 && gameState === START){
    text("And no less, from the Baloryxes of Sollaug", 130, 454.5);
  }
  if (frameCount === 14 && gameState === START){
    textBlock5 = createSprite(460, 561);
    textBlock5.addImage("DialogueBox/fneh.png", tBImg);
  }
  if (frameCount >= 17 && gameState === START){
    text("We need you make your way to Sollaug and kill Ephialtis", 40, 576);
  }
  if (frameCount === 20 && gameState === START){
    gameState = CUTSCENE;
    textBlock1.destroy();
    textBlock2.destroy();
    textBlock3.destroy();
    textBlock4.destroy();
    textBlock5.destroy();
  }
  if (frameCount >= 25 && gameState === CUTSCENE){
    Matter.Body.setStatic(sat.body, false);
    sat.body.position.y = sat.body.position.y - 0.5;
    console.log(sat.body.position.y);
  }
  if (sat.body.position.y <= -15){
    World.remove(world, sat.body);
    sat.body.position.x = undefined;
    sat.body.position.y = undefined;
    frameCount = 0;
  }
  if (frameCount === 18 && gameState === CUTSCENE){
    gameState = L1B;
  }
  if (frameCount === 20 && gameState === L1B){
    textBlock6 = createSprite(460, 304.5);
    textBlock6.scale = 1;
    textBlock6.addImage("DialogueBox/bleh.png", tB2Img);
    textBlock7 = createSprite(460, 396.5);
    textBlock7.scale = 1;
    textBlock7.addImage("DialogueBox/bleh.png", tB2Img);
  }
  if (frameCount >= 22 && gameState === L1B){
    textFont(cinzel);
    textSize(60);
    fill(0);
    text("LEVEL 1", 363, 327);
    textSize(20);
    text("Try to find the Baloryx's Interplanetary Travel Station", 125, 405);
  }
  if (frameCount === 35 && gameState === L1B){
    gameState = CUTSCENE2;
  }
  if (frameCount === 40 && gameState === CUTSCENE2){
    textBlock6.destroy();
    textBlock7.destroy();
  }
  if (frameCount === 42 && gameState === CUTSCENE2){
    e = createSprite(460, 351, 20, 20);
    e.addAnimation("idle", e_idle);
    e.scale = 2.5;
  }
  if (frameCount >= 60 && frameCount < 145 && gameState === CUTSCENE2){
    e.scale = e.scale + 0.085;
  }
  if (frameCount >= 145 && frameCount < 210 && gameState === CUTSCENE2){
    e.scale = e.scale + 0.65;
    console.log(e.scale);
  }
  if (frameCount === 210 && gameState === CUTSCENE2){
    boom = createSprite(460, 351, 23, 17.55);
    boom.shapeColor = rgb(99, 171, 63);
    boom.scale = 1;
  }
  if (frameCount >= 210.2 && gameState === CUTSCENE2){
    e.scale = e.scale + 30;
    boom.scale = boom.scale + 3;
    console.log(boom.scale);
    console.log(frameCount);
  }
  if (frameCount === 230 && gameState === CUTSCENE2){
    e.destroy();
  }
  if (frameCount === 260 && gameState === CUTSCENE2){
    boom.destroy();
    gameState = LEVEL1S;
  }
  if (frameCount === 300 && gameState === LEVEL1){
    bg1 = createSprite(624, 351, 0, 0);
    bg1.addImage("bg.png", bgImg);
    bg1.scale = 0.65;
    bg2 = createSprite(1872, 351, 0, 0);
    bg2.addImage("bg.png", bgImg);
    bg2.scale = 0.65;
    bg3 = createSprite(3120, 351, 0, 0);
    bg3.addImage("bg.png", bgImg);
    bg3.scale = 0.65;
    play = createSprite(460, 351, 20, 20);
    play.addImage("start.png", playImg);
    play.scale = 0.45;
    ninja = createSprite(120, 550);
    ninja.addAnimation("idle", ninja_idle);
    ninja.addAnimation("run", ninja_run);
    ninja.scale = 0.2;
    ninja.velocityY = ninja.velocityY + 9.8;
    ground = createSprite(600, 625, 1200, 20);
    ground.shapeColor = "orange";
  }
  if (frameCount >= 300 && gameState === LEVEL1){
    ninja.collide(ground);
  }
  if (mousePressedOver(play)){
    gameState = LEVEL1;
    play.destroy();
    frameCount = 0;
  }
  if (gameState === LEVEL1){
    if (keyCode === 32){
      ninja.velocityY = 20;
    }
    if (keyCode === RIGHT_ARROW){
      ninja.changeAnimation("run", ninja_run);
      ninja.x = ninja.x + 3;
      bg1.x -= 2;
      bg2.x -= 2;
      bg3.x -= 2;
    }
    if (keyCode === LEFT_ARROW){
      ninja.changeAnimation("run", ninja_run);
      ninja.rotateY(PI/2);
      ninja.x = ninja.x - 3;
      if (bg1.x > 351 && bg2.x > 351 && bg3.x > 351){
        bg1.x += 2;
        bg2.x += 2;
        bg3.x += 2;
      }
    }
  }
}
//FIX FRAMECOUNTS