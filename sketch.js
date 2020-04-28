var SunImage, Mercury, Venus, Earth, Sun, M, V, E, Background, radius

function preload(){
  SunImage = loadImage("Sun.png");
  Mercury = loadImage("Mercury1.png");
  Venus = loadImage("Venus.png");
  Earth = loadImage("Earth.png");
  Background = loadImage("Space.jpg");
} 

function setup() {
  createCanvas(800,400);

  M  = createSprite(350,200,50,50);
  M.addImage(Mercury);
  M.scale = 0.2;

  V = createSprite(550,200,50,50);
  V.addImage(Venus);
  V.scale = 0.15;

  E = createSprite(750,200,50,50);
  E.addImage(Earth);
  E.scale = 0.09;

  Sun = createSprite(0, 200, 50, 50);
  Sun.addImage(SunImage);
  Sun.scale = 1.0;
  Sun.setCollider("Circle",0,0,250);
  Sun.debug = true;
}




function draw() {
  background(Background);
  
  radius = radius + 10;

  if(frameCount%60===0){
    console.log(radius);

  Sun.scale = Sun.scale + 0.125
   //Sun.height = radius
    //Sun.setCollider("Circle",0,200,radius);
  }

  if(Sun.isTouching(M)){
    M.destroy();
  }

  if(Sun.isTouching(V)){
    V.destroy();
  } 

  if(Sun.isTouching(E)){
    E.destroy();
    Sun.scale = Sun.scale + 0 ;
  }
  drawSprites();
}

