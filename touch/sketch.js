var max_distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(240);

  for(var i = 0; i <= width; i += 75) {
    for(var j = 0; j <= height + 75; j += 75) {
      var clr = dist(mouseX, mouseY, i, j);
      clr = clr/1.15;
      // console.log(max_distance);
      strokeWeight(3);
      // noFill();
      fill(1 * clr/1.5, 200, 230, 10);
      stroke(1 * clr/1.5, 200, 230);
      ellipse(i, j, 200, 200);
    }
  }
}