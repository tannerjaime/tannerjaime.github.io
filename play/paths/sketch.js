var y = 100;
var a = 100;
var b = 50;
var a;
var frame;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(46, 54, 67);

  frame = 30;
  frameRate(frame);

  fill(86);
  stroke(120);
  strokeWeight(1.5);
  
  a = height / 4;
  b = height / 2;
  c = 0;
  d = height - height/4;
}

function draw() {

  drawRain();
}

function drawRain(x, y) {

  var lmin = 0;
  var lmax = width;
  length = Math.floor(Math.random() * (lmax - lmin + 1)) + lmin;

  var dmin = 1;
  var dmax = 15;
  direction = Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;

  c = c + 11;
  if (c > width) {
    c = 0;
  }
  fill(255 - c / 6);
  stroke(255 - c / 6, 150);
  line(length, c, length, c + direction);

  length = Math.floor(Math.random() * (lmax - lmin + 1)) + lmin;
  direction = Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;
  
  b = b + 11;
  if (b > width) {
    b = 0;
  }
  fill(255 - b / 6);
  stroke(255 - b / 6, 150);
  line(length, b, length, b + direction);

  length = Math.floor(Math.random() * (lmax - lmin + 1)) + lmin;
  direction = Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;
  
  a = a + 11;
  if (a > width) {
    a = 0;
  }
  fill(255 - a / 6);
  stroke(255 - a / 6, 150);
  line(length, a, length, a + direction);
  
    length = Math.floor(Math.random() * (lmax - lmin + 1)) + lmin;
  direction = Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;
  
  d = d + 11;
  if (d > width) {
    d = 0;
  }
  fill(255 - d / 6);
  stroke(255 - d / 6, 150);
  line(length, d, length, d + direction);

}