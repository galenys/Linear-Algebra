var theta = 0.03;
let dense = 30;
let scaler = 300;

// Torus
var torusPoints = [[],[],[]];
for (let alpha = 0; alpha < dense; alpha++) {
  var pointHeight = Math.sin(2*(alpha/dense)*Math.PI)*scaler/3;
  for (let theta = 0; theta < dense; theta++) {
    var pointX = Math.cos((theta/dense)*2*Math.PI)*scaler*Math.cos((alpha/dense)*Math.PI);
    var pointY = Math.sin((theta/dense)*2*Math.PI)*scaler*Math.cos((alpha/dense)*Math.PI);
    torusPoints[0].push(pointHeight);
    torusPoints[1].push(pointX);
    torusPoints[2].push(pointY);
  }
}

// Sphere
var spherePoints = [[],[],[]];
for (let alpha = 0; alpha < dense; alpha++) {
  var pointHeight = Math.sin(2*(alpha/dense)*Math.PI)*scaler;
  for (let theta = 0; theta < dense; theta++) {
    var pointX = Math.cos((theta/dense)*2*Math.PI)*scaler*Math.cos(2*(alpha/dense)*Math.PI);
    var pointY = Math.sin((theta/dense)*2*Math.PI)*scaler*Math.cos(2*(alpha/dense)*Math.PI);
    spherePoints[0].push(pointHeight);
    spherePoints[1].push(pointX);
    spherePoints[2].push(pointY);
  }
}

// change this for different geometries
var points = math.matrix(spherePoints);

axisDimension = 400;
var axes = math.matrix([
  [axisDimension, -axisDimension, 0, 0, 0, 0],
  [0, 0, axisDimension, -axisDimension, 0, 0],
  [0, 0, 0, 0, axisDimension, -axisDimension]
])

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(1, -1);

  // ROTATION
  zRot = rotZ(-0.01);
  xRot = rotX(0.01);
  yRot = rotY(0.01);

  points = math.multiply(zRot, points);
  points = math.multiply(xRot, points);
  points = math.multiply(yRot, points);

  axes = math.multiply(zRot, axes);
  axes = math.multiply(xRot, axes);
  axes = math.multiply(yRot, axes);

  // DRAWING

  // center
  fill(0, 224, 255); //rgb(0, 224, 255)
  ellipse(0, 0, 8, 8);

  fill(255);
  // points
  for (var i = 0; i < points._data[0].length; i++) {
    var x = points._data[0][i];
    var y = points._data[1][i];
    ellipse(x, y, 2, 2);
  }


  // axes
  for (var i = 0; i < axes._data[0].length; i++) {
    var x = axes._data[0][i];
    var y = axes._data[1][i];
    ellipse(x, y, 5, 5);
  }
  stroke(200);
  line(axes._data[0][0], axes._data[1][0], axes._data[0][1], axes._data[1][1]); // x-axis
  line(axes._data[0][2], axes._data[1][2], axes._data[0][3], axes._data[1][3]); // y-axis
  line(axes._data[0][4], axes._data[1][4], axes._data[0][5], axes._data[1][5]); // z-axis
}