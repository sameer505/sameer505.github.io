var canvas;
var centerX;
var centerY;

var radius=50;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("resized");
}
function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(220);
  trigger=true;
  centerX=windowWidth/8;
  centerY=windowHeight/8;

}

function draw() {
  background(220);
  fill(100,255,100);
  ellipse(centerX, centerY, radius*2, radius*2);
  let vector1=createVector(mouseX-centerX,mouseY-centerY);
  var distance=vector1.mag();
  let vector= vector1;
  vector.normalize();
  
  var eyeRadius=radius/4;
  
  var eyeCenterX=centerX + vector.x*(radius-eyeRadius);
  var eyeCenterY=centerY + vector.y*(radius-eyeRadius);
  fill(0,0,0);
  ellipse(eyeCenterX,eyeCenterY,eyeRadius*2,eyeRadius*2);
  fill(220,100)
  ellipse(eyeCenterX,eyeCenterY,radius*2,radius*2);
  fill(0);

  let str="Sameer";
  textSize(32);
  textFont("Courier New");
  for(var i=0;i<str.length;i++){
    // if(mouseX<windowWidth/2){
    //   var randomX=random(0,4);
    //   var randomY=random(0,4);
    // }else{
    //   var randomX=random(-1,1);
    //   var randomY=random(-1,1);
    // }
    var randomX=(random(-0.1,0.1)*distance);
    var randomY=(random(-0.1,0.1)*distance);
    

    var alphaValue = map(distance,0,windowHeight,255,0);

    fill(255,255,255,alphaValue);
    text(str[i],200+textWidth()/5*i+100+randomX,100+randomY);
    // print(randomX,randomY);
    print(alphaValue);
  }
  
  
  text("Hello, p5.js!", 100, 100);
  
  

}
