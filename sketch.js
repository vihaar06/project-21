var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(5,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(492,580,200,30);
    block3.shapeColor ="red";

    block4=createSprite(695,580,200,30);
    block4.shapeColor="yellow"

    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=5;
    ball.velocityY=-10;
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        function bounceoff(ball,block1){
            if (ball.x - block1.x < block1.width/2 + ball.width/2
              && block1.x - ball.x < block1.width/2 + ball.width/2) {
                ball.velocityX = ball.velocityX * (-1);
                block1.velocityX = block1.velocityX * (-1);
            }
        }
    }
    



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";      
        music.play();
        function bounceoff(ball,block2){
            if (ball.x - block2.x < block2.width/2 + ball.width/2
              && block2.x - ball.x < block2.width/2 + ball.width/2) {
                ball.velocityX = ball.velocityX * (-1);
                block2.velocityX = block2.velocityX * (-1);
            }
        }
        if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.velocityX = 0;
            ball.velocityY = 0;
          }
        

          //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";      
        music.play();
        function bounceoff(ball,block3){
            if (ball.x - block3.x < block3.width/2 + ball.width/2
              && block3.x - ball.x < block3.width/2 + ball.width/2) {
                ball.velocityX = ball.velocityX * (-1);
                block3.velocityX = block3.velocityX * (-1);
            }
        }
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";      
        music.play();
        function bounceoff(ball,block4){
            if (ball.x - block4.x < block4.width/2 + ball.width/2
              && block4.x - ball.x < block4.width/2 + ball.width/2) {
                ball.velocityX = ball.velocityX * (-1);
                block4.velocityX = block4.velocityX * (-1);
            }
        }
        
    }
    
    drawSprites();
}
