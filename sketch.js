var x;
var y;

function setup() {
  createCanvas(400, 400);
  background(220, 0, 120);
  x = 200;
  y = 200;
}

function draw() {
  stroke(255);
  strokeWeight(2);
  point(x,y);
  
  var r = floor(random(4));
  
  switch (r) {
    case 0:
      y = y  -1;
      break;
    case 1:
      x = x + 1;
      break;
    case 2:
      x = x - 1;
      break;
    case 3:
      y = y + 1;
      break;
  }
}