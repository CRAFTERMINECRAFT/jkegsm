var spiderman, spiderman_img, backgrnd_img, buildings, buildings_img;
var ground;
var bkgrnd;
var ob1, ob2, ob3;
var ob1_img, ob2_img, ob3_img;
var score = 0;
var gameState = 0;
var restart, restart_img;







function preload(){
  spiderman_img = loadImage("spiderman.png");
  backgrnd_img = loadImage("back1.jpg");
  buildings = loadImage("b1.png");
  ob1_img = loadImage("b2.jpg");
  ob2_img = loadImage("b3.png");
  ob3_img = loadImage("back2.jpg");
  restart_img = loadImage("restatrt.jpg");
  
}
function setup() {
  createCanvas(600, 400);
  obstaclesGroup = new Group();
  //ext("ERROR", 00,350)
  // bkgrnd = createSprite(300,250,600,400);
  //  bkgrnd.addImage(backgrnd_img);
  //  bkgrnd.scale = 5
  //  bkgrnd.velocityX = -6
   
  
  // bkgrnd.x = bkgrnd.width/2
  //spiderman
  spiderman = createSprite(50,100,50,50);
  spiderman.addImage(spiderman_img);
  spiderman.scale = 0.2

  restart = createSprite(300,250,50,50);
  restart.addImage(restart_img);
  restart.visible = false;
  restart.scale = 0.3;
  
  //spiderman.velocityX = 6
  ground = createSprite(300,380,600,10);
  ground.visible = false;
 
}

function draw() {
  background("blue");
  //text("score " + score, 200,200)
  if(gameState === 0){
    if(keyDown("space")){
      spiderman.velocityY = -6;
      //console.log("hello")
    }
    spiderman.velocityY = spiderman.velocityY+0.7;
  
    // if(bkgrnd.x<0){
    //   bkgrnd.x = bkgrnd.width/2
    // }
    text(score , 500,20)
    if(spiderman.isTouching(obstaclesGroup)){
      score = score+20;
      console.log(score)
  }
  spawnObstacles();
  
  spiderman.collide(obstaclesGroup);
  if(spiderman.y>400){
   gameState = 1;
  }
}
else if(gameState === 1){
  restart.visible = true;
  spiderman.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  text("GAME OVER", 200,200);
  if(mousePressedOver(restart)){
    reset()
    console.log("done")
  }
}


  drawSprites();
  
  }

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,350,20,30);
    obstaclesGroup.add(obstacle);
    obstacle.scale = 0.5
    obstacle.setCollider('circle',0,0,45)
    obstacle.liftime = 100;
    // obstacle.debug = true
  
    obstacle.velocityX = -6
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(ob1_img);
              break;
      case 2: obstacle.addImage(ob2_img);
              break;
      default: break;
    }
  }
}
function reset(){
  gameState = 0;
  //obstaclesGroup.destroyEach()
  score = 0;
}