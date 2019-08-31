
var theta = 0.03;

var points = math.matrix([
  [300, -300, 0, 0, 0, 0],
  [0, 0, 300, -300, 0, 0],
  [0, 0, 0, 0, 300, -300]
]);

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
    ellipse(x, y, 10, 10);
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

function mousePressed() {
  var x = -(mouseX - width / 2);
  var y = -(mouseY - height / 2);

  points._data[0].push(x);
  points._data[1].push(y);
  points._data[2].push(0);

  console.log(points._data);
}