var months = ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia");
  noLoop(); // Run once and stop
}

function draw() {
  background(color("#D0D7D9"));
  noStroke();
  fill(255, 255, 255, 75);
  // noFill();
  // strokeWeight(50);
  arc(windowWidth / 2, windowHeight / 1.25, windowWidth / 1.15, windowWidth / 1.15, PI, TWO_PI);
  fill(255, 255, 255, 125);
  var cat = (QUARTER_PI / 7.8);
  for (var i = 0; i < 31; i++) {
    // arc(windowWidth / 2, windowHeight / 1.25, windowWidth / 1.35, windowWidth / 1.35, PI, PI + cat - 0.01);
    // if (i == 5) {
    //   arc(windowWidth / 2, windowHeight / 1.25, windowWidth / 1.35, windowWidth / 1.35, PI + (i * cat + 0.025), PI + ((i + 1) * cat - 0.065));
    if (i == 15) {
      // arc(windowWidth / 2, windowHeight / 1.25, windowWidth / 1.35, windowWidth / 1.35, PI + (i * cat + 0.065), PI + ((i + 1) * cat - 0.025));
      console.log("hi");
    } else {
      arc(windowWidth / 2, windowHeight / 1.25, windowWidth / 1.25, windowWidth / 1.25, PI + (i * cat + 0.03), PI + ((i + 1) * cat - 0.02));
    }
  }
  fill(color("#D0D7D9"));
  ellipse(windowWidth / 2, windowHeight / 1.25, windowWidth / 2.75, windowWidth / 2.75);

  // arc(300, 300, 200, 200, HALF_PI, PI);
  fill(255, 0, 0);
  drawRing(months[1], 465, 28.8);
  textSize(16);
  textAlign(CENTER);
  textFont("Arial");
  // text("DAY", windowWidth / 2, windowHeight * 0.165);
  for (var d = 0; d < 12; d++) {
    textSize(9);
    text(months[d], windowWidth / 2, windowHeight * (0.197 + (0.0265 * d)));
  }
  for (d = 0; d < 12; d++){
        noFill();
    stroke(color("#D0D7D9"));
    // stroke(0, 0, 0);
    strokeWeight(1);
    ellipse (windowWidth / 2, windowHeight / 1.25, windowWidth / 2.75 + (26 * d), windowWidth / 2.75 + (26 * d));
  }
}

function drawRing(upto, rSize, size) {
  textFont('Stint Ultra Expanded');
  textSize(size);
  fill(0);
  // console.log(upto);

  var arclength = 0;
  for (i = 0; i < upto.length; i++) {

    // The character and its width
    var currentChar = upto.charAt(i);
    // Instead of a constant width, we check the width of each character.
    var w = textWidth(currentChar);
    // Each box is centered so we move half the width
    arclength += w / 2;

    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    var theta = PI + arclength / rSize;

    push();


    translate(rSize * cos(theta), rSize * sin(theta));

    rotate(theta + PI / 2);



    text(currentChar, 0, 0);

    pop();

    // Move halfway again
    arclength += w / 2;
  }

}