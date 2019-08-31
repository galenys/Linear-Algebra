
function rotZ(theta) {
  var rotZ = math.matrix([
    [Math.cos(theta), -Math.sin(theta), 0],
    [Math.sin(theta), Math.cos(theta), 0],
    [0, 0, 1]
  ]);
  return rotZ
}
function rotX(theta) {
  var rotX = math.matrix([
    [1, 0, 0],
    [0, Math.cos(theta), -Math.sin(theta)],
    [0, Math.sin(theta), Math.cos(theta)]
  ]);
  return rotX
}
function rotY(theta) {
  var rotY = math.matrix([
    [Math.cos(theta), 0, Math.sin(theta)],
    [0, 1, 0],
    [-Math.sin(theta), 0, Math.cos(theta)]
  ]);
  return rotY
}