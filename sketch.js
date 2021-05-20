var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
var edges;

function preload(){

    music = loadSound("music.mp3");

}

function setup(){

    canvas = createCanvas(800,600)

    block1 = createSprite(100,580,180,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,20);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,20);
    block3.shapeColor = "red"

    block4 = createSprite(700,580,180,20);
    block4.shapeColor = "green";

    ball = createSprite(Math.round(random(100,700)),50,50,50);
    ball.velocityX = Math.round(random(-8,6));
    ball.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){

        ball.shapeColor= rgb(0,0,255);
        music.play();
    }
    if(block2.isTouching(ball))
    { ball.shapeColor = rgb(255,128,0); 
    ball.velocityX = 0; 
    ball.velocityY = 0; 
    music.stop(); 
    }
    
    if(block3.isTouching(ball) && ball.bounceOff(block3))
    { ball.shapeColor = rgb(153,0,76); 
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))
    { ball.shapeColor = rgb(153,0,76);
    }

    text(mouseX+','+mouseY,200,50);
    drawSprites();
}
