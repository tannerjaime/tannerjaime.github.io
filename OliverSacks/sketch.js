var arr = [];
var scoreObj = {};
var li = [];
var essay = [];
var textX = 0;
var x = 20;
var y = 100;
var ysize = 12;
var done = false;
var z = 0;
var counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight * 2);
  background(86);
  textSize(25);
  fill(130);
  textFont('rockwell');
  text("'Sabbath' by Oliver Sacks", windowWidth / 2 - textWidth("SABBATH, by Oliver Sacks") / 2, 40);
  // filter(BLUR,1);
  loadJSON("sackScore.json", displaySent);
  // filter(BLUR,3);
}

function displaySent(data) {
  for (var i in data) {
    scoreObj[data[i].tokens[0]] = data[i].score;
  }
  arr = loadStrings("sabbath.txt", processData);
}

function processData() {
  for (var i in arr) {
    li.push(arr[i].split(" "));
  }
  for (i = 0; i < li.length; i++) {
    essay = Array.prototype.concat.apply([], li);
  }

  done = true;
}

function draw() {

  if (done) {
    background(125, 125, 125, 2);
    // for (var z = 0; z < 512; z++) {
    if (z < essay.length && counter == 1) {
      fill(230);
      textSize(ysize);
      if (scoreObj[essay[z]] > 0) {
        textStyle(BOLD);
        fill(110, 219, 179);
        // colorRed += 5;
      } else if (scoreObj[essay[z]] < 0) {
        textStyle(BOLD);
        fill(219, 142, 110);
        // colorRed -= 5;
      } else
        textStyle(NORMAL);
      if (x < width - 95) {
        text(essay[z], x, y);
        x += textWidth(essay[z]) + 10;
      } else {
        x = 20;
        y += ysize + 5;
        text(essay[z], x, y);
        x += textWidth(essay[z]) + 10;
        filter(BLUR, 1);
      }
      z++;
      counter = 0;
    }
    counter++;
  }
}