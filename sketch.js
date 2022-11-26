var bg ,bgimg ;

function preload() {
    bgimg =  loadImage("bg.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite( displayWidth/2, displayHeight/2);  
    bg.addImage(bgimg)

}
function draw() {
  //  background(0);
    bg.velocityX = -2;
    if(bg.x<0){
        bg.x = 200;
    }
    drawSprites();
}