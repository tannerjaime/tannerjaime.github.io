// LEAFLET.JS EARTHQUAKE VISUALIZATION
// USGS DATA - SOURCE UPDATED EVERY 5 MINUTES
// JavaScript library available at http://leafletjs.org/


//roboto mono normal-medium weight
//

var mapp; // global
var canvas; // p5 canvas
var quakes = []; // array of earthquakes 
var mags = [];
var depth = []; // array of magnitudes
var allDepth = [];
var allMags = [];
// var timeStamp = [];
var timeStampAll = [];
var slider; // UI for setting minimum magnitude
var magnitude; // div for storing min magnitude from slider 
var details;
var bla;
var checker = false;
var quakeDay = [];
var quakeMonth = [];
var date = [];
var quakeMinute = [];
var quakeHour = [];
var quakeSecond = [];
var quakeHourAll = [];
var holder = [];
var mappedMag = [];
var allTime = [];
var loc1 = [];
var loc2 = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // full window p5 canvas
  canvas.parent('mapp'); // make p5 and leaflet use the same canvas (and z-index)
  initLeaflet(); // load leaflet functions and creat map and defined view
  loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.csv", parseSource);
  // loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", parseAll); // load source, parse when done

  //lower details 
  details = createDiv('');
  details.class("there");
  details.parent("mapp");
  details.position(width * 0.1, windowHeight * 0.78);

  var timeText = createP("DATE OF EARTHQUAKE");
  timeText.parent("mapp");
  $(".there").html(timeText);
  timeText.class("text");
  timeText.style("font-size", "15px");
  timeText.position(width * 0.14, windowHeight * 0.85);

  var depthText = createP("TIME OF EARTHQUAKE");
  depthText.parent("mapp");
  $(".there").html(depthText);
  depthText.class("text");
  depthText.style("font-size", "15px");
  depthText.position(width * 0.34, windowHeight * 0.85);

  var magText = createP("KILOMETERS DEEP");
  magText.parent("mapp");
  magText.class("text");
  $(".there").html(magText);
  magText.style("font-size", "15px");
  magText.position(width * 0.56, windowHeight * 0.85);

  var locText = createP("MAGNITUDE");
  locText.parent("mapp");
  locText.class("text");
  $(".there").html(locText);
  locText.style("font-size", "15px");
  locText.position(width * 0.75, windowHeight * 0.85);

  var locText = createP("SIGNIFICANT EARTHQUAKES OF LAST 30 DAYS");
  locText.parent("mapp");
  locText.class("numbers");
  $(".there").html(locText);
  locText.style("font-size", "20px");
  locText.position(width * 0.36, windowHeight * 0.80);

}

function draw() {

  // hide and show individual quakes by checking against slider threshold
  // for (var i = 1; i < mags.length; i++) {
  //   if (mags[i] < slider.value())
  //     quakes[i].setRadius(0);
  //   else
  //     quakes[i].setRadius(mags[i]);
  // }

  // magnitude.html("Magnitude > " + slider.value() + " RS");
  // noLoop();
}


function parseSource(data) {

  for (var i = 1; i < data.length; i++) {
    var row = split(data[i], ","); // split every row by the comma
    mags[i] = row[4];
    depth[i] = row[3];
    var timeStamp = row[0];

    quakeMonth[i] =timeStamp.substring(5, 7);
    quakeDay[i] = timeStamp.substring(8, 10);
    quakeMinute[i] = timeStamp.substring(14, 16);
    quakeHour[i] = timeStamp.substring(11, 13);
    quakeSecond[i] = timeStamp.substring(17, 19);
    console.log(quakeSecond[i]);
    // if (quakeMinute[i] < 10) {
    //   quakeMinute[i] = ("0" + quakeMinute[i]);
    // }
    // if (quakeSecond[i] < 10) {
    //   quakeSecond[i] = ("0" + quakeMinute[i]);
    // }
    date[i] = quakeMonth[i] + "/" + quakeDay[i];
    allTime[i] = (quakeHour[i] + ":" + quakeMinute[i] + ":" + quakeSecond[i]);
    // mappedMag = map(mags[i], 0, 10, height * 0.82, height * 0.85);
    // create custom leaflet marker
    holder[i] = [
      [row[1], row[2]]
    ];
    loc1[i] = row[1];
    loc2[i] = row[2];
    quakes[i] = L.circleMarker([row[1], row[2]], {
      stroke: true,
      color: '#64FDCF',
      weight: 3,
      loc1: loc1[i],
      loc2: loc2[i],
      magn: mags[i],
      depth: depth[i],
      date: date[i],
      tim: allTime[i],
      opacity: 0.9,
      fillOpacity: 0.4,
      fillColor: (234, 34, 0),
    });
    var place = row[13].substr(1);
    // make new labeled markers at lat, lon, 
    quakes[i].on('mouseover', function(e) {
      var string = "<p class='therep'> " + e.target.options.date + "</p>";
      var string2 = "<p class='there2'> " + e.target.options.tim + "</p>";
      var string3 = "<p class='there3'> " + e.target.options.depth + "</p>";
      var string4 = "<p class='there4'> " + e.target.options.magn + "</p>";

      $(".there").html(string + string2 + string3 + string4);
      // $(".there").html(string2);
      // + "\t\t\t" + e.target.options.depth +"\t\t\t" + e.target.options.magn + "        " + e.target.options.loc1 + "\t\t\t" +
      // var dstring = "<p class='thered'> " + e.target.options.depth + "</p>";
      // $(".there").html(dstring);
      // string.style("font-size", "30px");
      console.log(string);
    }).on('mouseout', function(e) {}).addTo(mapp).setRadius(19);






    // on('mouseover', function(e) {
    //   details.removeClass("notThere");
    //   details.class("there");
    // }).on('mouseout', function(e) {
    //   details.removeClass("there");
    //   details.class("notThere");
    // }).

  }
}


// init leaflet using a custom mapbox
function initLeaflet() {
  // your access token here
  L.mapbox.accessToken = 'pk.eyJ1IjoiY3Jvb2tvb2tvbyIsImEiOiJoSWZlQWhnIn0.BZsl4HSikEgkLjem-3Y8CQ';
  mapp = L.mapbox.map('mapp', 'mapbox.dark').setView([-3, 5], 2);

  function onMapClick(e) {
    // leaflet needs this function, no need to do anything here
  }
  mapp.on('click', onMapClick);
}