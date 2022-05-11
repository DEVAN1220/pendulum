var angle = 0;
var counter = 0;
var x;
var y;
var size = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  angle = sin(counter)
  x=sin(angle)*size + width / 2
  y=cos(angle)*size
  background(220);
  line(width/2, 0, x, y)
  circle(x, y ,20)
  counter += 0.1
}