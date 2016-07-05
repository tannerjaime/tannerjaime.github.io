var y, b, m, x, z, xm, num;
var topStroke, bottomStroke, ztopStroke, xbottomStroke;
var count, sub;


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(200, 230, 230);
  frameRate(120);
  
  y = height / 5;
  b = height / 2;
  m = height / 2;
  g = height / 2;
  
  num = ((b - y) / 2) + y;
  console.log(b  + "~~" + y + "~~" + num);
  
  z = num;
  x = height - num;
  xm = num;
  
  
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() {
  background(0); // Set the background to black
  // stroke(255, 230, 230, 1 * y);
  y = y + 1;
  m = m - 1;

  topStroke = 0 + 0.08 * y * y / 200;
  bottomStroke = 0 + 0.08 * m * m / 200;

  strokeWeight(topStroke);
  line(500 - y / 2, y, width - 500 + y / 2, y);
  if (y > height / 2) {
    y = height / 5;
  }

  b = b + 1;
  strokeWeight(bottomStroke);
  line(500 - m / 2, b, width - 500 + m / 2, b);
  if (b > height - (height / 5)) {
    b = height / 2;
    m = height / 2;
  }
  
  strokeWeight(topStroke);
  g = g + 1;
  line(500 - g / 2, g, width - 500 + g / 2, g);
  if (g > height / 2) {
    g = height / 5;
  }



  z = z + 1;
  xm = xm - 1;
  ztopStroke = 0 + 0.08 * z * z / 200;
  strokeWeight(ztopStroke);
  line(500 - z / 2, z, width - 500 + z / 2, z);
  if (z > height / 2) {
    z = height / 5;
  }


  x = x + 1;
  xbottomStroke = 0 + 0.08 * xm * xm / 200;
  strokeWeight(xbottomStroke);
  line(500 - xm / 2, x, width - 500 + xm / 2, x);
  if (x > height - (height / 5)) {
    x = height / 2;
    xm = height / 2;
  }

}
