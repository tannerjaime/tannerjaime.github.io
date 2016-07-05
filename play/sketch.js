var x1;
var x2;
var x3;

var y1;
var y2;
var y3;

var xR;
var yR;

var a, b, c, d, e, x;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  frameRate(7);
}

function draw() {
  background(27, 15, 37);

  var w = width / 100;
  var h = height/80;
  
  for (var i = 0; i < w; i++) {
    for (var j = 0; j < h; j++) {
    a = 100 * i;
    b = (100 * i) + 50;
    c = (100 * i) + 100;
    d = 100*j + 80;
    e = 100*j;
    
    crystal(a, e, b, d, c, e);


    // console.log("for iteration" + i + "left is equal to " + d + "  middle is  " + e + " and right is " + d);
  }
  // crystal(30, 105, 80, 20, 130, 105);
}
}

function crystal(x1, y1, x2, y2, x3, y3) {

  x1 = x1;
  y1 = y1;

  x2 = x2;
  y2 = y2;

  x3 = x3;
  y3 = y3;

  var xmax = x3 + 50;
  var xmin = x1 - 50;
  var ymax = y3;
  var ymin = (y2);
  
  xR = Math.floor(Math.random() * (xmax - xmin + 1)) + xmin;
  yR = Math.floor(Math.random() * (ymax - ymin + 1)) + ymin;

  fill(86, 206, 220, 150);
  stroke(86, 206, 220, 150);
  triangle(x1, y1, xR, yR, x2, y2);
  fill(246,204,12, 120);
  stroke(246,204,12, 120);
  triangle(x2, y2, xR, yR, x3, y3);
  fill(207,114,121, 150);
  stroke(207,114,121, 150);
  triangle(x1, y1, xR, yR, x3, y3);
  
  // fill(82,232,179, 50);
  // stroke(82,232,179, 50);
  // triangle(x1, y1,x2, y2, x3, y3);
  
  
}