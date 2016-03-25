function preload() {
  mySound = loadSound('Boop.m4a');
  Sound2 = loadSound('TiTiKuh.m4a');
  Sound3 = loadSound('OOGH.m4a');
  Sound4 = loadSound('BanahBanah.m4a');
  Sound5 = loadSound('Damn son.m4a');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(36, 37, 40);

//boop
  boop = createButton('BOOP');
  boop.class('myButton');
  boop.position(0, height * 0.05);
  boop.id("boop");

  $('#boop').click(function() {
    mySound.setVolume(0.2);
    mySound.play();
  });
  // $('#boop').on('click touchstart', function() {
  //   mySound.setVolume(0.2);
  //   mySound.play();
  // });

//ti ti kuh
  titikuh = createButton('TTK');
  titikuh.position(0, height * 0.25);
  titikuh.class('myButton');
  titikuh.id("titikuh");

  $('#titikuh').click(function() {
    Sound2.setVolume(0.2);
    Sound2.play();
  });
  // $('#titikuh').on('click touchstart', function() {
  //   Sound2.setVolume(0.2);
  //   Sound2.play();
  // });

//OOGH
  OOGH = createButton('OOGH');
  OOGH.position(0, height * 0.65);
  OOGH.class('myButton');
  OOGH.id("oogh");
  
    $('#oogh').click(function() {
    Sound3.setVolume(0.2);
    Sound3.play();
  });
  // $('#oogh').on('click touchstart', function() {
  //   Sound3.setVolume(0.2);
  //   Sound3.play();
  // });

//banah banah

  banah= createButton('BNABNA');
  banah.position(0, height * 0.45);
  banah.class('myButton');
  banah.id("bana");
  
    $('#bana').click(function() {
    Sound4.setVolume(0.4);
    Sound4.play();
  });
  
//damn son

  damn = createButton('DAMNSON');
  damn.position(0, height * 0.85);
  damn.class('myButton');
  damn.id("damn");
  
    $('#damn').click(function() {
    Sound5.setVolume(0.2);
    Sound5.play();
  });
}

function draw() {

}