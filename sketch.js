function windowresized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("resized");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(random(0,windowWidth),random(0,windowHeight), 80, 80);

}
