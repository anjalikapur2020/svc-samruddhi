var play,next,volume,logo,name1,about,home,homeimg;
var wait,about,play, end;
var gameState="wait"
var timer=500
var restart, restartImg;
var paddle, padleanim, bulletPanim;
var ball, ballimg;
var serve, play, end;
var tile,tile2;
var rand;
var tilegroup,tilegroup2;
var bulletG, bulletG2;
var tileimg1,tileimg2,tileimg3,tileimg4,tileimg5,tileimg6,tileimg7,tileimg8,tileimg9,tileimg10,bombtileimg,lifetileimg,boomimg;
var Pop;
var bulletPower, bulletPowerImg,sbg;
var bullet1, bulletImg;
var extendPower, extendPowerImg;
var firePower, firePowerImg;
var life, lifeImg;
var score, lives;
var bg3, bg4;
var win, winImg;
var b=0
var c=0


function preload(){
  //preload fonts
  myFont = loadFont('fonts/fontwrite.ttf')

  /*box1img=loadImage("button2-main/box1.png")
box2img=loadImage("button2-main/box2.png")*/

playimg=loadImage("buttons/play.png")
aboutimg=loadImage("buttons/about.png")
soundimg=loadImage("buttons/sound.png")
nosoundimg=loadImage("buttons/nosound.png")
//logoimg=loadImage("logo.png")
nameimg=loadImage("buttons/name.png")
Sound = loadSound("sound.mp3")
bg = loadImage("bg.png");
bg2=loadImage("bg2.jpg");
sbg=loadImage("Bg.gif");
homeimg=loadImage("buttons/home.png")
restartImg = loadImage("restart.png");
paddleanim = loadAnimation( "NormalPaddle/paddle1.png","NormalPaddle/paddle2.png","NormalPaddle/paddle3.png");
bulletPanim = loadAnimation("BulletPaddle/bulletP1.png","BulletPaddle/bulletP2.png","BulletPaddle/bulletP3.png");
extendPanim = loadAnimation("extendPaddle.png");
ballimg = loadImage("ball.png");
lifeImg = loadImage("life.png");
tileimg1 = loadImage("tiles/tile1.png");
tileimg2 = loadImage("tiles/tile2.png");
tileimg3 = loadImage("tiles/tile3.png");
tileimg4 = loadImage("tiles/tile4.png");
tileimg5 = loadImage("tiles/tile5.png");
tileimg6 = loadImage("tiles/tile6.png");
tileimg7 = loadImage("tiles/tile7.png");
tileimg8 = loadImage("tiles/tile8.png");
tileimg9 = loadImage("tiles/tile9.png");
tileimg10 = loadImage("tiles/tile10.png");
bg3Img = loadImage ("Bg 3.jpg")
bg4Img = loadImage("Bg4.jpg")
win = loadImage("win.gif")

boomimg =loadImage("boom.gif")

bombtileimg=loadImage("tiles/bombtile.png")
lifetileimg=loadImage("tiles/lifetile.png")



bulletPowerImg = loadImage("power-ups/bulletpower.png");
bulletImg = loadImage("bullet.png");
extendPowerImg = loadImage("power-ups/extendpower.png");
firePowerImg = loadImage("power-ups/firepower.png");
fireBall = loadAnimation("Fireball/fireball.png","Fireball/fireball1.png","Fireball/fireball.png");
Pop = loadSound("Audio/pop.mp3");
Bullet = loadSound("Audio/laser.mp3");
}
  
function setup(){

createCanvas(windowWidth,windowHeight)

//setup fonts we selected
textSize(30)
textFont(myFont);



score = 0;
lives = 3;

box1=createSprite(100,40,50,40)
box1.shapeColor=("yellow")
life = createSprite((box1.x), (box1.y),box1.width*0.75,box1.height*75);
//box1.addImage(box2img)

life.addImage(lifeImg);
life.scale = 0.4;
life.visible = false
box1.scale=1.5



box2=createSprite((box1.x + 200),(box1.y),150,40)
box2.shapeColor=("yellow")

//box2.addImage(box1img)
//box2.scale=1.5

box3=createSprite(windowWidth-300,40,150,40)
box3.shapeColor=("yellow")
box3.visible=false

restart = createSprite(windowWidth / 2, windowHeight-100);
restart.addImage(restartImg);
restart.scale = 0.5;
restart.visible = false;

box1.visible=false
box2.visible=false




paddle = createSprite(width / 2, height - 40);
paddle.addAnimation("normal", paddleanim);
paddle.addAnimation("bullet", bulletPanim);
paddle.addAnimation("extend", extendPanim);
paddle.scale = 0.3;

ball = createSprite(width / 2, height / 2);
ball.addImage(ballimg);
ball.scale = 0.2;

play=createSprite(100,windowHeight-windowHeight/5)
play.addImage(playimg)


about=createSprite(230,windowHeight-windowHeight/5)
about.addImage(aboutimg)

home=createSprite(100,100)
home.addImage(homeimg)
home.visible=false;



sound=createSprite(windowWidth-120,windowHeight-windowHeight/5)
sound.addImage(soundimg)


nosound=createSprite(windowWidth-250,windowHeight-windowHeight/5)
nosound.addImage(nosoundimg)


/*logo=createSprite(windowWidth/2,windowHeight/2)
logo.scale=1.5
logo.addImage(logoimg)*/

/*name1=createSprite(windowWidth/2, windowHeight/2-200)
name1.addImage(nameimg)
name1.scale = 2*/

tilegroup = new Group();
tilegroup2 = new Group();
bulletG = new Group();
extendG = new Group();
fireG = new Group();
fireG2 = new Group();
bulletG2 = new Group();

bombGroup=new Group()

}

function draw(){
    if (gameState==="wait")
    {background(sbg)
    ball.x=windowWidth/2
    ball.y=windowHeight/2
    ball.visible=false
    tilegroup.visible = false
    paddle.visible = false
    restart.visible=false
    box3.visible=false

    
about.visible=true;
nosound.visible=true
sound.visible=true
//logo.visible=true
//name1.visible=true
play.visible=true
home.visible=false;
lives.visible=false
  }
   

    if(mousePressedOver(sound)){
        Sound.play(); 
    }

    if(mousePressedOver(nosound)){
        Sound.stop(); 
    
    }

    if(mousePressedOver(about)){
      background("pink")
      gameState="about"
      } 

      if(mousePressedOver(home)){
         gameState="wait"
        } 

    if(gameState==="about"){
      background(bg3Img)
        sound.visible = true
        //logo.y=(windowHeight-windowHeight/4)
        //logo.scale=0.75
        //name1.visible=false
        about.visible = false
        home.visible=true
        nosound.visible = true
        tilegroup.visible = false
        paddle.visible = false
       
          textSize(25)
       strokeWeight(4)
          stroke("white")
          fill("black")
           text("ABOUT : The player must smash a wall of bricks by deflecting a bouncing ball with a paddle.",100,180)
           text( "The paddle may move horizontally and is controlled by the computer's mouse ",100,230)
           text("or the touch of a finger (in the case of touchscreen).",100,280)
           text("  The player gets 3 lives to start with; a life is lost if the ball hits the bottom of the screen.",100,330)
           text(" When all the bricks have been destroyed, the player advances to a new harder level, with a twist. ",100,380)
           text(" The second level has deadly bombs, and life saving hearts that decide the fate of your game.",100,430)
           text(" If all lives are lost, the game is over. If the player can surpass the score of 1500, they win.",100, 480)
         text("The player can also collect power-ups along the way, in order to advance through the levels. ",100,530)

       }
       
if (mousePressedOver(play) || touches.length > 0){
    touches = [];
    gameState="play" 
    ball.velocityX = -13;
    ball.velocityY = 14;
    ball.visible=true
    
    tilespawn();
}

if (gameState==="play"){
    background(bg)
    about.visible = false;
    play.visible = false;
    sound.visible = true;
    nosound.visible = true;
    paddle.visible = true;
    home.visible=false;
    paddle.x = mouseX;
    //logo.visible=false
    //name1.visible=false
    life.visible=true
    ball.visible=true
    

    
  box1.visible=true
    box2.visible=true

    box3.visible=true 

    if(score>=100 && lives>0){
      gameState="level2"
      tilespawn2();
      spawnBomb()
    }

    if (ball.isTouching(paddle)) {
      //ball.y = ball.y - 5;
      ball.velocityY = -ball.velocityY;
    }

    if (ball.y <= 0) {
      ball.velocityY = -ball.velocityY;
    }

    if (ball.x <= 0) {
      ball.velocityX = -ball.velocityX;
    }

    if (ball.x >= windowWidth) {
      ball.velocityX = -ball.velocityX;
    }

    for (var i = 0; i < tilegroup.length; i++) {
        if (tilegroup.get(i) != null && ball.isTouching(tilegroup.get(i))) {
          tilegroup.get(i).destroy();
          ball.velocityY = -ball.velocityY;
          Pop.play();
          score += 10;
        }
      }
  
      for (var i = 0; i < bulletG.length; i++) {
        if (bulletG.get(i) != null && paddle.isTouching(bulletG.get(i))) {
          bulletG.get(i).destroy();
          paddle.changeAnimation("bullet", bulletPanim);
          setTimeout(actualanim, 2000);
          fireBullet();
          Bullet.play();
        }
      }
  
      for (var i = 0; i < extendG.length; i++) {
        if (extendG.get(i) != null && paddle.isTouching(extendG.get(i))) {
          extendG.get(i).destroy();
          paddle.changeAnimation("extend", extendPanim);
          setTimeout(actualanim, 6000);
        }
      }
  
      for (var i = 0; i < fireG.length; i++) {
        if (fireG.get(i) != null && paddle.isTouching(fireG.get(i))) {
          fireG.get(i).destroy();
          paddle.changeAnimation("bullet", bulletPanim);
          setTimeout(actualanim, 2000);
          shootFire();
        }
      }
    
      for (var i = 0; i < tilegroup.length; i++) {
        for (var j = 0; j < bulletG2.length; j++) {
          if (tilegroup.get(i) != null && bulletG2.isTouching(tilegroup.get(i))) {
            tilegroup.get(i).destroy();
            bulletG2.get(j).destroy();
            Pop.play();
            score += 10;
          }
        }
      }
  
      for (var i = 0; i < tilegroup.length; i++) {
        for (var j = 0; j < fireG2.length; j++) {
          if (tilegroup.get(i) != null && fireG2.isTouching(tilegroup.get(i))) {
            tilegroup.get(i).destroy();
            Pop.play();
            score += 10;
          }
        }
      
      }
  
      if (ball.y >= windowHeight + 5 && ball.y <= windowHeight + 20) {
        lives--;
        ball.x = width / 2;
        ball.y = height / 2;
        if (lives === 0) {
          gameState = "end";
          tilegroup.destroyEach()
          tilegroup2.destroyEach()
        }
      }
      for (var i = 0; i < tilegroup.length; i++) {
        if (tilegroup.get(i) != null && tilegroup.get(i).y >= windowHeight) {
          gameState = "end";
          lives = 0;
          tilegroup.destroyEach()
          tilegroup2.destroyEach()
        }
      }

      extendpower();
      bulletpower();
      firepower();
      addBricks();
    
    
    }
    
    
    else if (gameState === "end") {
      // reset();
       background("black")
        background(boomimg)
        tilegroup.destroyEach()
        tilegroup2.destroyEach()
        bulletG.destroyEach();
        extendG.destroyEach();
        fireG.destroyEach();
        fireG2.destroyEach();
        bulletG2.destroyEach();
        box3.visible=false
        bombGroup.destroyEach()

       
nosound.visible=false
sound.visible=false
//logo.visible=false
//name1.visible=false

box1.visible=false
box2.visible=false

play.visible=false
home.visible=false;
about.visible=false
tilegroup2.destroyEach()
life.visible=false
bombGroup.destroyEach()
paddle.visible=false
reset()

    }

if (gameState==="level2"){
  background(bg2)
  spawnBomb()

  about.visible = false;
    play.visible = false;
    home.visible=false;
    sound.visible = true;
    nosound.visible = true;
    paddle.visible = true;
    paddle.x = mouseX;
    box1.visible=true
    box2.visible=true
    //logo.visible=false
    //name1.visible=false
    life.visible=true
    tilegroup.destroyEach();

     if (ball.isTouching(paddle)) {
      ball.velocityY = -ball.velocityY;
    }

    if (ball.y <= 0) {
      ball.velocityY = -ball.velocityY;
    }

    if (ball.x <= 0) {
      ball.velocityX = -ball.velocityX;
    }

    if (ball.x >= windowWidth) {
      ball.velocityX = -ball.velocityX;
    }

    for (var i = 0; i < tilegroup2.length; i++) {
        if (tilegroup2.get(i) != null && ball.isTouching(tilegroup2.get(i))   ) {
          
          tilegroup2.get(i).destroy();
          ball.velocityY = -ball.velocityY;
          Pop.play();
          score += 10;
        }
      }
  
      for (var i = 0; i < bulletG.length; i++) {
        if (bulletG.get(i) != null && paddle.isTouching(bulletG.get(i))) {
          bulletG.get(i).destroy();
          paddle.changeAnimation("bullet", bulletPanim);
          setTimeout(actualanim, 2000);
          fireBullet();
          Bullet.play();
        }
      }
  
      for (var i = 0; i < extendG.length; i++) {
        if (extendG.get(i) != null && paddle.isTouching(extendG.get(i))) {
          extendG.get(i).destroy();
          paddle.changeAnimation("extend", extendPanim);
          setTimeout(actualanim, 6000);
        }
      }
  
      for (var i = 0; i < fireG.length; i++) {
        if (fireG.get(i) != null && paddle.isTouching(fireG.get(i))) {
          fireG.get(i).destroy();
          paddle.changeAnimation("bullet", bulletPanim);
          setTimeout(actualanim, 2000);
          shootFire();
        }
      }
    
      for (var i = 0; i < tilegroup.length; i++) {
        for (var j = 0; j < bulletG2.length; j++) {
          if (tilegroup2.get(i) != null && bulletG2.isTouching(tilegroup2.get(i))) {
            tilegroup2.get(i).destroy();
            bulletG2.get(j).destroy();
            Pop.play();
            score += 10;
          }
        }
      }
  
      for (var i = 0; i < tilegroup2.length; i++) {
        for (var j = 0; j < fireG2.length; j++) {
          if (tilegroup2.get(i) != null && fireG2.isTouching(tilegroup2.get(i))) {
            tilegroup2.get(i).destroy();
            Pop.play();
            score += 10;
          }
        }
      }
  
      if (ball.y >= windowHeight + 5 && ball.y <= windowHeight + 20) {
        lives--;
        ball.x = width / 2;
        ball.y = height / 2;
        if (lives === 0) {
          gameState = "end";
        }
      }
      for (var i = 0; i < tilegroup.length; i++) {
        if (tilegroup2.get(i) != null && tilegroup2.get(i).y >= windowHeight) {
          gameState = "end";
          lives = 0;
        }
      }

if(ball.isTouching(bombGroup)){
  gameState="end"
}

     extendpower();
      bulletpower();
      firepower();
      addBricks2();

   /* fill("white")  
   textSize(25);
     
 
   text("Timer: "+ timer, 250,50);*/

    if(frameCount % 60 ===0){
        timer--;
      }

     /*   fill("white");
      textSize(32);
     text("Score: " + score, windowWidth - 300, 50);
      text(lives, 100, 50);*/

      if(score>=200 && lives>0){
        gameState = "win"
      }
}

   if (gameState==="win"){
    background(win)
     tilegroup.destroyEach()
     tilegroup2.destroyEach()
     bulletG.destroyEach();
     extendG.destroyEach();
     fireG.destroyEach();
     fireG2.destroyEach();
     bulletG2.destroyEach();
     paddle.visible = false;
     ball.visible = false;
     life.visible = false;
    score.visible = false;
    timer.visible = false;
    box1.visible=false
box2.visible=false
     sound.visible=false
     nosound.visible=false
     box3.visible=false
     bombGroup.destroyEach()


     reset()
   }


 drawSprites();


 
 if (gameState==="play" || gameState ==="level2")
 {
 fill("black")  
textSize(25);
  
text("Timer: "+ timer, box2.x -(box2.width/2),box2.y+10);

 if(frameCount % 60 ===0){
     timer--;
   }

   fill("black");
   textSize(25);
  text("Score: " + score, box3.x -(box3.width/2),box3.y+10);
  text(lives, box1.x, box1.y);
   
}

}
  function actualanim() {
    paddle.changeAnimation("normal", paddleanim);
  }
  
  function reset() {
    restart.visible = true;
    lives.visible=true;
    if (mousePressedOver(restart) || touches.length > 0) {
      touches = [];
      gameState = "wait";
      
      /*ball.x = width / 2;
      ball.y = height / 2;
      ball.velocityX = -15;
      ball.velocityY = 16;
      tilegroup.destroyEach();
      tilespawn();
      paddle.changeAnimation("normal", padleanim);*/
      lives = 3;
      score = 0;
      b=0;
      c=0
      tilegroup.destroyEach()
      tilegroup2.destroyEach()
      bulletG.destroyEach();
     extendG.destroyEach();
     fireG.destroyEach();
     fireG2.destroyEach();
     bulletG2.destroyEach();
     bombGroup.destroyEach()

    }
  }
  
  function tilespawn() {
    for (var x = 52.5; x < windowWidth; x = x + windowWidth / 13) {
      for (var y = 100; y <= 350; y = y + 50) {
        tile = createSprite(x, y);
        tile.scale = 0.25;
        tilegroup.add(tile);
        rand = Math.round(random(1, 10));
        switch (rand) {
          case 1:
            tile.addImage(tileimg1);
            break;
          case 2:
            tile.addImage(tileimg2);
            break;
          case 3:
            tile.addImage(tileimg3);
            break;
          case 4:
            tile.addImage(tileimg4);
            break;
          case 5:
            tile.addImage(tileimg5);
            break;
          case 6:
            tile.addImage(tileimg6);
            break;
          case 7:
            tile.addImage(tileimg7);
            break;
          case 8:
            tile.addImage(tileimg8);
            break;
          case 9:
            tile.addImage(tileimg9);
            break;
          case 10:
            tile.addImage(tileimg10);
            break;
          default:
            break;
        }
      }
    }
  }
  
  function shootFire() {
    bullet1 = createSprite(paddle.x - paddle.width / 2, windowHeight - 35);
    bullet1.addAnimation("s", fireBall);
    bullet1.scale = 0.8;
    bullet1.velocityY = -12;
    bullet2 = createSprite(paddle.x + paddle.width / 2, windowHeight - 35);
    bullet2.addAnimation("s", fireBall);
    bullet2.scale = 0.8;
    bullet2.velocityY = -12;
    fireG2.add(bullet1);
    fireG2.add(bullet2);
    bulletG2.setLifeTimeEach = windowHeight / 12;
  }
  
  function fireBullet() {
    bullet1 = createSprite(paddle.x - paddle.width / 2, windowHeight - 35);
    bullet1.addImage(bulletImg);
    bullet1.scale = 0.8;
    bullet1.velocityY = -12;
    bullet2 = createSprite(paddle.x + paddle.width / 2, windowHeight - 35);
    bullet2.addImage(bulletImg);
    bullet2.scale = 0.8;
    bullet2.velocityY = -12;
    bulletG2.add(bullet1);
    bulletG2.add(bullet2);
    bulletG2.setLifeTimeEach = windowHeight / 12;
  }
  
  function addBricks() {
    for (var i = 0; i < tilegroup.length; i++) {
      if (tilegroup.get(i) != null && frameCount % 250 === 0) {
        tilegroup.get(i).y = tilegroup.get(i).y + 50;
      }
    }
    if (frameCount % 250 === 0) {
      for (var x = 52.5; x < windowWidth; x = x + windowWidth / 13) {
        tile = createSprite(x, 100);
        tile.scale = 0.25;
        tilegroup2.add(tile);
        rand = Math.round(random(1, 10));
        switch (rand) {
          case 1:
            tile.addImage(tileimg1);
            break;
          case 2:
            tile.addImage(tileimg2);
            break;
          case 3:
            tile.addImage(tileimg3);
            break;
          case 4:
            tile.addImage(tileimg4);
            break;
          case 5:
            tile.addImage(tileimg5);
            break;
          case 6:
            tile.addImage(tileimg6);
            break;
          case 7:
            tile.addImage(tileimg7);
            break;
          case 8:
            tile.addImage(tileimg8);
            break;
          case 9:
            tile.addImage(tileimg9);
            break;
          case 10:
            tile.addImage(tileimg10);
            break;
          default:
            break;
        }
      }
    }
  }
  
  
  function bulletpower() {
    if (frameCount % 350 === 0) {
      rand = Math.round(random(10, windowWidth - 10));
      bulletPower = createSprite(rand, 0);
      bulletPower.addImage(bulletPowerImg);
      bulletPower.scale = 0.2;
      bulletPower.velocityY += 6;
      bulletG.add(bulletPower);
    }
  }
  
  function extendpower() {
    if (frameCount % 250 === 0) {
      rand = Math.round(random(10, windowWidth - 10));
      extendPower = createSprite(rand, 0);
      extendPower.addImage(extendPowerImg);
      extendPower.scale = 0.2;
      extendPower.velocityY += 6;
      extendG.add(extendPower);
    }
  }
  
  function firepower() {
    if (frameCount % 450 === 0) {
      rand = Math.round(random(10, windowWidth - 10));
      firePower = createSprite(rand, 0);
      firePower.addImage(firePowerImg);
      firePower.scale = 0.2;
      firePower.velocityY += 6;
      fireG.add(firePower);
    }
  }

  function tilespawn2() {
    for (var x = 52.5; x < windowWidth; x = x + windowWidth / 13) {
      for (var y = 100; y <= 350; y = y + 50) {
        tile2 = createSprite(x, y);
        tile2.scale = 0.25;
        tilegroup2.add(tile2);
        rand = Math.round(random(1, 10));
        switch (rand) {
          case 1:
            tile2.addImage(tileimg1);
            break;
          case 2:
            tile2.addImage(tileimg2);
            break;
          case 3:
            tile2.addImage(tileimg3);
                        break;
          case 4:
            tile2.addImage(tileimg4);
            break;
          case 5:
            tile2.addImage(tileimg5);
            break;
          case 6:
            tile2.addImage(tileimg6);
            break;
          case 7:
            tile2.addImage(tileimg7);
                       break;
          case 8:
            tile2.addImage(tileimg8);
            break;
          case 9:
            tile2.addImage(tileimg9);
            break;
          case 10:
            tile2.addImage(tileimg10);
            break;
          default:
            break;
        }
      }
    }
  }

   function addBricks2() {
    for (var i = 0; i < tilegroup2.length; i++) {
      if (tilegroup2.get(i) != null && frameCount % 250 === 0) {
        tilegroup2.get(i).y = tilegroup2.get(i).y + 50;
      }
    }
    if (frameCount % 250 === 0) {
      for (var x = 52.5; x < windowWidth; x = x + windowWidth / 13) {
        tile2 = createSprite(x, 100);
        tile2.scale = 0.25;
        tilegroup2.add(tile2);
        rand = Math.round(random(1, 10));
        switch (rand) {
          case 1:
            tile2.addImage(tileimg1);
            break;
          case 2:
            tile2.addImage(tileimg2);
            break;
          case 3:
            tile2.addImage(tileimg3);
            
            break;
          case 4:
            tile2.addImage(tileimg4);
            break;
          case 5:
            tile2.addImage(tileimg5);
            break;
          case 6:
            tile2.addImage(tileimg6);
            break;
          case 7:
            tile2.addImage(tileimg7);
                      break;
          case 8:
            tile2.addImage(tileimg8);
            break;
          case 9:
            tile2.addImage(tileimg9);
            break;
          case 10:
            tile2.addImage(tileimg10);
            break;
          default:
            break;
        }
      }
    }
  }
  
  function spawnBomb(){
if(frameCount % 300 === 0){
  
    var bomb = createSprite(Math.round(random(70,width-width/10)), Math.round(random(70,height-height/4)))
    bomb.scale = 0.25;
    bomb.addImage(bombtileimg);
    bombGroup.add(bomb)
    }

}



