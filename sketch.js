var mario 
var Ground
var PLAY = 1
var END = 0
var Gamestate= PLAY

function preload(){
bgi=loadImage("bg.png")
marioi=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
groundi=loadImage("ground2.png")
restarti=loadImage("restart.png")
Gameoveri=loadImage("gameOver.png")
marioCollided = loadAnimation("collided.png")
obstacleI=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
bricki=loadImage("brick.png")
}


function setup(){
 createCanvas(windowWidth,windowHeight)
 mario = createSprite(width/4-200,height-130)
 mario.scale=2
 ground=createSprite(width/2,height-60,width,10)
 ground.scale=1.2
 ground.addImage(groundi)
restart=createSprite(width/2,height/2)
restart.addImage(restarti)
Gameover=createSprite(width/2,height/2-100)
Gameover.addImage(Gameoveri)
bricksGroup = new Group()
ObstaclesGroup = new Group()


}

function draw (){
background(bgi)
drawSprites()
mario.addAnimation("mariorunning",marioi)
if (keyDown("space")){
    mario.velocityY=-10
}
mario.velocityY = mario.velocityY + 0.8
mario.collide(ground)
//camera.x=mario.x
//camera.y=mario.y
ground.velocityX=-12
if (ground.x<0){
    ground.x= ground.width/2
}
spawnObstacles();
spawnBricks()

}

function spawnBricks(){
    if(frameCount%60==0){
        var brick = createSprite(width,Math.round(random(height/2,height/2-150)))
        
    
    brick.addImage(bricki)
    brick.velocityX=-3
    brick.lifetime=200;
    mario.depth=brick.depth+1
    bricksGroup.add(brick)
    }
}
function spawnObstacles(){
    if(frameCount%60==0){
        var obstacle=createSprite(width/2,height-100)
        obstacle.addAnimation("ob",obstacleI)
        obstacle.lifetime=300;
        ObstaclesGroup.add(obstacle)
    }
}